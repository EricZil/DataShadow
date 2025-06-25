# 🛡️ DataShadow

<div align="center">
  
[![Built at Hack Club](https://img.shields.io/badge/Built%20at-Hack%20Club-fa0f00?style=for-the-badge)](https://hackclub.com/)
[![Summer of Making](https://img.shields.io/badge/Summer%20of%20Making-2025-blue?style=for-the-badge)](https://summer.hackclub.com)
[![Status](https://img.shields.io/badge/Status-Shipped-green?style=for-the-badge)]()

<a href="https://github-readme-stats.hackclub.dev/api/wakatime?username=4782&api_domain=hackatime.hackclub.com&theme=radical&custom_title=Hackatime+Stats&layout=compact">
  <img src="https://github-readme-stats.hackclub.dev/api/wakatime?username=4782&api_domain=hackatime.hackclub.com&theme=radical&custom_title=Hackatime+Stats&layout=compact" alt="Hackatime Stats" />
</a>

</div>

## 👀 What's this all about?

DataShadow is your personal digital bodyguard in the wild west of the internet! We handle billions of leaked records scattered across the digital landscape and make it ridiculously easy to check if your data has been compromised.

**Because let's face it:** In today's world, asking if your data has been leaked isn't a question of "if" but "how many times?" 😱

**Also!** DataShadow's bff - Claude AI ❤️

> **⚠️ HEADS UP!** This project has been shipped to SoM! But it's not over;)

## 📓 Devlog

### Devlog #8 - Chaos over?
![Devlog #8](https://cdn2.eryxks.cloud/devlog%238.png)

Welp, finally fixed everything (kinda... I think?) <br>

Sooo, lil recap of my brain meltdown: <br>
made a status page cuz things kept going 💥 <br>
added FAQ, password check, status badge (badge makes it feel official idk lol) <br>
header & footer got facelifts <br>
features, how it works, about – all went shopping (a bit) <br>
backend currently stable (as for now) (but like... barely, I breathe on it wrong and it goes 404) <br>
added some backend security (will double check when I trust myself again) <br>

basically… this is all I can do for now <br>
need more resources (aka people want my credit card lol no thx) <br>
but hey, gonna push this project more — just not in devlog format anymore. <br>
dashboard UI is already designed btw 👀 might leak it on GitHub README if I feel spicy. <br>

from now on backend updates gonna be in the shadows (get it... DataShadow… ha...) <br>
also found out Cloudflare R2 is like "free" but not really (tysm for the 1M A ops limit 💔), so now hunting for new S3/r2-ish thing that won’t cry when I upload 1M files 💀 <br>
this is the last devlog (unless I get possessed again with a new project) <br>
thanks if you read these at all <br>
it’s been messy, but fun as hell <br>
made with 0 budget, 6 liters of caffeine, and ✨love✨ by Eric (ft. Claude AI my emotional support bot, and not only;))

### Devlog #7 - Chaos
![Devlog #7](https://cdn2.eryxks.cloud/devlog%237.png)

Title says it all. Started backend work, uploaded the first dataset (like 4 times lol), hooked it up to frontend — it worked… then backend decided to nope out. <br>

So yeah, from beta-DEMO to 404-DEMO real quick 💀 <br>

Too tired to fight with it more today. Already 6+ hrs deep into front+backend. <br>
Scan page is now in maintenance mode (DEMO data yeeted). <br>
Breaches page also broke — dataset articles don’t wanna load. <br>

✅ Current backend status: 500k+ breached accounts uploaded. <br>
🛠 Updates coming tomorrow. Probably. Hopefully. Maybe. <br>
🧠 Brain = fried.


### Devlog #6 - Feedback feature
![Devlog #6](https://cdn2.eryxks.cloud/devlog%236.png)

Added a feedback/bug reporting system (Notion-backed, of course). <br>
Now you can politely yell at me if something breaks. <br>

Also fixed some cursed CSS that was fighting for its life.

### Devlog #5 - ✨AwUeGsLoYme✨ Public DEMO
![Devlog #5](https://cdn2.eryxks.cloud/devlog%235.png)

Optimised SEO, Security; <br>
Updated legal pages info <br>
New Breaches page with info about data leaks that will be added to the db. <br>
And other minor fixes. (i'm tired - gn!)

### Devlog #4 - ✨AwUeGsLoYme✨ just got hit with a bunch of pages
![Devlog #4](https://cdn2.eryxks.cloud/devlog%234.png)

scan <br>
about (don’t read it pls) <br>
how it works (even tho i barely know) <br>
legal stuff (so you don’t sue me) <br>
also tweaked some layout things that I’ll probably undo later <br>

next? <br>
gonna throw this thing online <br>
then ✨pretend to know what SEO and security means✨ before public demo <br>

✨AwUeGsLoYme✨ continues to thrive in confusion.

### Devlog #3 - 404
![Devlog #3](https://cdn2.eryxks.cloud/devlog%233.png)

Added a 404 page — easily the most loved page on the whole site (not even kidding). <br>
Also did some housekeeping: updated the README, added a license;)

Small update. Big heart. 💖

### Devlog #2 - ✨AwUeGsLoYme✨ v1 is here!
![Devlog #2](https://cdn2.eryxks.cloud/devlog%232.png)

The first full frontend pass is done... kinda. Trust me — there'll probably be like 3 more versions 'cause I'll start hating this one soon 💀 (not a frontend guy tbh). <br>

Next up: diving into legal stuff! Yes, the no one reads them privacy/terms pages... but still, don't sue me pls 🙃

### Devlog #1 - Welp, it's something ;P
![Devlog #1](https://cdn2.eryxks.cloud/devlog%231.png)

I'm calling it: ✨AwUeGsLoYme✨ <br>
Stay tuned for chaos!

## ✨ Core Features

- **Data Breach Scanning**: Our core feature allows you to scan for your personal information across billions of breached records, using privacy-preserving techniques.
  - Anonymous and secure scanning
  - Comprehensive database of known breaches
  - Instant results on your exposure

- **Password Check**: Check if your passwords have been compromised.

## 🔮 Planned Features (After SoM voting)

- **Continuous Monitoring & Alerts**: Get real-time alerts if your information is compromised in new breaches.
- **Privacy Dashboard**: A centralized dashboard to view your exposure and manage alerts.
- **Domain Check**: Monitor an entire domain for compromised email accounts.
- **Disposable Email Aliases**: Create unlimited email aliases to protect your primary email.

## 🛠️ Built With

- [Next.js](https://nextjs.org/) - The React framework
- [TypeScript](https://www.typescriptlang.org/) - For type safety
- [Tailwind CSS](https://tailwindcss.com/) - For styling
- [Cloudflare R2](https://www.cloudflare.com/developer-platform/products/r2/) - Cloud Storage
- A sprinkle of magic ✨ and a dash of humor 😄

## 🤝 Contribute

Found a bug? Have an idea? Want to contribute? Great! Open an issue or submit a PR. We're all about community collaboration!

## 🙏 Acknowledgments

- The amazing HackClub community
- All the hackers participating in Summer of Making
- Coffee ☕, the true hero behind all coding projects (don't forget RedBull)

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

*Remember: Your data is like your underwear – don't just leave it anywhere, and change it regularly! 🩲*
