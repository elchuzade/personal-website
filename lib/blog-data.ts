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
  imageKey: string;
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
    readTime: "5 min read",
    tags: ["Startup", "ChatGPT", "Vertical AI", "Entrepreneurship"],
    slug: "how-ai-is-eliminating-reasons-for-communication-between-humans",
    author: "Kamran Elchuzade",
    imageKey:
      "did-we-just-eliminate-another-reason-for-communication-between-humans",
  },
  {
    id: 2,
    title: "Will AI replace me or empower me?",
    excerpt:
      "If you are a developer, you have probably come across many posts online about AI replacing you very soon. If you are a believer in that, I am here to convince you that the opposite is true.",
    content: `
      <p>If you are a developer, you have probably come across many posts online about AI replacing you very soon. If you are a believer in that, I am here to convince you that the opposite is true.</p><br/>
      
      <p>I was first introduced to programming in high school, in the early 2000s. At the time, we were using Visual Basic. It would take far longer than today to write a simple program, like a calculator, for example. Even without AI, with modern IDEs, autocompletion, and all sorts of extensions, it is much easier and faster to achieve the same goal. Does that mean companies need fewer engineers? No - the total opposite is true. Since it is much faster to accomplish the same goals, companies increase their ambitions and aim higher: more projects, harder projects, more users, more scalability, and naturally either the same number of developers or even more.</p><br/>

      <p>So, the jump in progress doesn’t really mean developers should get thrown out the door. Rather, it means a whole new demand for developers is being created. Companies set more goals, and developers simply perform at a faster pace with a higher success rate.</p><br/>

      <p>Today, we are going through yet another technological breakthrough, where AI is handling a lot of the routine work that software engineers used to do in the past. This progress helps software engineers learn faster. Instead of googling or scrolling through Stack Overflow, we can ask AI to explain concepts in detail. We can consult with AI before starting to build a huge, scalable database for the next project the company aims to deliver. We can build an MVP of our dream idea faster, iterate, and reach product–market fit much sooner.</p><br/>

      <p>At a previous employer, in one of the quarterly evaluations, I remember setting goals to improve certain skills to grow in my career. The main area I was lacking in was writing unit tests. I spent a lot of time perfecting that skill. Years later, in the company where I work at the time of writing this blog post, the CTO asked all developers to delegate writing unit tests to AI. Does that mean AI is here to stop me from growing in my career? Or does it mean AI has simply eliminated one obstacle from my path toward becoming a more senior developer? I lean toward the latter.</p><br/>

      <p>If you use AI the right way, it is here to assist you - not replace you by any means. Many developers, including myself, have a backlog of useful ideas and mini projects that could help our companies move forward. These projects help us get noticed within our companies and show that we care about our teams and customers. One such project had always been in my notes, and I kept saying I would do it one day, on some weekend when I had time and energy. Our company has partners, and across the website we display partner logos. There were challenges in retrieving the logos in the right format and dimensions to make them look homogeneous across the site.</p><br/>

      <p>One evening, spending just under an hour with the help of AI, I managed to build and deploy a formatter to solve that exact problem. The project was built using Python, which I hadn’t touched in years, and deployed on Render, which I wasn’t familiar with. Although the project itself was not complicated, it showed that, as software engineers, we can benefit from AI to learn new technologies more deeply while spending significantly less time. With AI, we can also improve the quality of the code we write (as long as we don’t blindly copy code for an entire task), and perhaps most importantly, we can build side projects that improve our teams’ and customers’ lives - projects that strengthen our positions at our companies.</p><br/>

      <p>I encourage you to look at your company and analyze where you could build a quick solution, with the help of AI, during a weekend or an evening. These small efforts can help your team work faster and more productively. And if you were worried that AI will replace you, I hope reading this has lifted your hopes and motivated you to learn, improve your skills, and see AI as your assistant rather than your rival.</p><br/>
    `,
    date: "2025-08-31",
    readTime: "8 min read",
    tags: ["AI", "Software Development", "Side Projects"],
    slug: "will-ai-replace-me-or-empower-me",
    author: "Kamran Elchuzade",
    imageKey: "will-ai-replace-me-or-empower-me",
  },
];
