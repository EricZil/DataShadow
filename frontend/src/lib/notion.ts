import { Client } from '@notionhq/client';
import { APIResponseError } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_API_KEY });

const databaseId = process.env.NOTION_BREACHES_DATABASE_ID!;

interface NotionRichText {
  plain_text: string;
}

interface NotionTitle {
  title: NotionRichText[];
}

interface NotionSelect {
  select: {
    name: string;
  };
}

interface NotionMultiSelect {
  multi_select: { name: string }[];
}

interface NotionDate {
  date: {
    start: string;
  };
}

interface NotionNumber {
  number: number;
}

interface NotionRichTextProperty {
  rich_text: NotionRichText[];
}

interface NotionPage {
  id: string;
  properties: {
    Name: NotionTitle;
    'Pwned Count': NotionNumber;
    Date: NotionDate;
    'Exposed Data': NotionMultiSelect;
    Severity: NotionSelect;
    Status: NotionSelect;
    Summary: NotionRichTextProperty;
    'Full Description': NotionRichTextProperty;
    Recommendations: NotionRichTextProperty;
    Sources: NotionRichTextProperty;
    Company?: NotionRichTextProperty;
  };
}

export interface BreachPost {
  id: string;
  title: string;
  company: string;
  pwnedCount: number;
  date: string;
  dataTypes: string[];
  severity: string;
  status: string;
  summary: string;
  fullDescription: string;
  recommendations: string[];
  sources: string[];
}

function pageToBreachPost(page: NotionPage): BreachPost {
  const getTextContent = (richTextArr?: NotionRichText[]) => 
    richTextArr?.map(t => t.plain_text).join('') || '';

  const recommendationsText = getTextContent(page.properties.Recommendations?.rich_text);
  const sourcesText = getTextContent(page.properties.Sources?.rich_text);
  const fullDescriptionText = getTextContent(page.properties['Full Description']?.rich_text);
  const summaryText = getTextContent(page.properties.Summary?.rich_text);
  
  const companyName = page.properties.Company 
    ? getTextContent(page.properties.Company.rich_text)
    : page.properties.Name.title[0]?.plain_text || 'Unknown';

  return {
    id: page.id,
    title: page.properties.Name.title[0]?.plain_text || 'Untitled',
    company: companyName,
    pwnedCount: page.properties['Pwned Count']?.number || 0,
    date: page.properties.Date?.date?.start || new Date().toISOString(),
    dataTypes: page.properties['Exposed Data']?.multi_select?.map((s) => s.name) || [],
    severity: (page.properties.Severity?.select?.name || 'low').toLowerCase(),
    status: (page.properties.Status?.select?.name || 'investigating').toLowerCase().replace(' ', '-'),
    summary: summaryText,
    fullDescription: fullDescriptionText,
    recommendations: recommendationsText.split('\n').filter((s: string) => s.trim() !== ''),
    sources: sourcesText.split('\n').filter((s: string) => s.trim() !== ''),
  };
}

async function retryOperation<T>(
  operation: () => Promise<T>, 
  retries = 3, 
  delay = 1000
): Promise<T> {
  try {
    return await operation();
  } catch (error) {
    if (retries <= 0) throw error;
    
    console.error(`Notion API error, retrying (${retries} attempts left):`, error);
    
    await new Promise(resolve => setTimeout(resolve, delay));
    
    return retryOperation(operation, retries - 1, delay * 1.5);
  }
}

export async function getAllBreaches(): Promise<BreachPost[]> {
  try {
    const response = await retryOperation(() => 
      notion.databases.query({
        database_id: databaseId,
        sorts: [
          {
            property: 'Date',
            direction: 'descending',
          },
        ],
      })
    );

    return response.results.map(page => pageToBreachPost(page as unknown as NotionPage));
  } catch (error) {
    if (error instanceof APIResponseError) {
      console.error('Notion API error:', error.code, error.message);
      
      if (error.code === 'unauthorized') {
        console.error('Notion API key is invalid or expired');
      } else if (error.code === 'object_not_found') {
        console.error('Notion database not found - check your database ID');
      }
    } else {
      console.error('Error fetching breaches from Notion:', error);
    }
    
    return [];
  }
}

export async function getBreach(id: string): Promise<BreachPost | null> {
  try {
    const page = await retryOperation(() => notion.pages.retrieve({ page_id: id }));
    return pageToBreachPost(page as unknown as NotionPage);
  } catch (error) {
    console.error(`Error fetching breach ${id} from Notion:`, error);
    return null;
  }
}
