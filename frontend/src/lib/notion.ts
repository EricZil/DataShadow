import { Client } from '@notionhq/client';

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
  };
}

function pageToBreachPost(page: NotionPage) {
  const recommendationsText = page.properties.Recommendations?.rich_text?.map((t) => t.plain_text).join('\n') || '';
  const sourcesText = page.properties.Sources?.rich_text?.map((t) => t.plain_text).join('\n') || '';
  const fullDescriptionText = page.properties['Full Description']?.rich_text?.map((t) => t.plain_text).join('\n') || '';

  return {
    id: page.id,
    title: page.properties.Name.title[0]?.plain_text || 'Untitled',
    company: page.properties.Name.title[0]?.plain_text || 'Untitled',
    pwnedCount: page.properties['Pwned Count']?.number || 0,
    date: page.properties.Date?.date?.start || new Date().toISOString(),
    dataTypes: page.properties['Exposed Data']?.multi_select?.map((s) => s.name) || [],
    severity: (page.properties.Severity?.select?.name || 'low').toLowerCase(),
    status: (page.properties.Status?.select?.name || 'investigating').toLowerCase().replace(' ', '-'),
    summary: page.properties.Summary?.rich_text[0]?.plain_text || '',
    fullDescription: fullDescriptionText,
    recommendations: recommendationsText.split('\n').filter((s: string) => s.trim() !== ''),
    sources: sourcesText.split('\n').filter((s: string) => s.trim() !== ''),
  };
}

export async function getAllBreaches() {
  const response = await notion.databases.query({
    database_id: databaseId,
    sorts: [
        {
            property: 'Date',
            direction: 'descending',
        },
    ],
  });

  return response.results.map(page => pageToBreachPost(page as unknown as NotionPage));
}

export async function getBreach(id: string) {
    const page = await notion.pages.retrieve({ page_id: id });
    return pageToBreachPost(page as unknown as NotionPage);
}
