export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content?: string;
  date: string;
  readTime: string;
  tags: string[];
  slug: string;
  author: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title:
      "Did we just eliminate another reason for communication between humans?",
    excerpt:
      "I recently started exploring a startup idea of Vertical AI integration in the ship building and repairing industry. A few years back I would directly reach out to my network and find somebody who is an expert in it and grab a lunch together.",
    content: `
      <p>I recently started exploring a startup idea of Vertical AI integration in the shipbuilding and repairing industry. A few years back, I would directly reach out to my network, find somebody who was an expert in it, and grab lunch together.</p><br/>

<p>I would be like a blank page, like a sponge, like a child in early school years asking “why” to everything. Fast forward to today: instead of looking around for people with real experience, I went with the path of least resistance - I asked ChatGPT to consult me on the topic. We had a looong conversation; in fact, we had multiple chats approaching the topic from different angles. But the result of all of them was somewhat the same. The idea we developed was solid. It increased my confidence and strengthened my understanding of the industry. It might have even made me feel like an expert in the field of shipbuilding and ship repairing.</p><br/>

<p>I sketched a map of the entire industry: Who are the big players? What companies are there? What are the government regulations? How are the insurance companies operating? What is the exact direction of cash flow? Who is desperate to pay, to whom, and why? It was time to build.</p><br/>

<p>I felt myself on top of the game. But then - thanks to my spouse convincing me to still reach out to human experts in the field - I finally did make one video call. After an hour-long discussion, I ended up scratching the whole thing off, starting over, and even evaluating the possibility of changing industry from shipbuilding and repairing to construction. The idea went from exciting fantasy to boring reality. The feeling of being an expert dissipated, and the realization of being a newbie hit. It was shocking. It was like graduating from high school, feeling like Isaac Newton nailing your math classes, and then going to university, having new classmates, just to realize that you are an average dude, and that there are much smarter people around you, and so much more to learn to catch up.</p><br/>

<p>After a short time of adapting to this new reality, I started working on the revised startup idea. And, of course, as expected, I reached out to ChatGPT for advice on how to build it. To no surprise, it praised my new idea and made me feel like I could be an expert in no time with its help - again.</p><br/>

<p>I wish every user of chatbots who is reading this to have a partner or a friend who can persuade them to reach out to humans for advice, ideally before they have made up their mind thanks to encouraging AI. After all, it is much harder to educate someone who has already formed strong but wrong beliefs about a subject than someone who is like a blank page, like a sponge, like my daughter in her first grade asking “why” to everything.</p><br/>
    `,
    date: "2025-08-18",
    readTime: "3 min read",
    tags: ["Startup", "ChatGPT", "Vertical AI", "Entrepreneurship"],
    slug: "how-ai-is-eliminating-reasons-for-communication-between-humans",
    author: "Kamran Elchuzade",
  },
];
