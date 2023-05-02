import { Configuration, OpenAIApi } from "openai";
import fs from "fs";

import { categories } from "../constants";
import fetchNews from "../lib/fetchNews";
import NewsList from "./NewsList";
import SummarizeNews from "./NewsSummary";

const configuration = new Configuration({
  organization: "org-X7e86axkdmVt7cKLBA7cWwn3",
  apiKey: process.env.OPENAI_API_KEY,
});

async function HomePage() {
  // fetch news data
  const news: NewsResponse = await fetchNews(categories.join(","));

  console.log("Let's ask ChatGPT to summarize news.json for us!");

  const openai = new OpenAIApi(configuration);

  const chatGPTNewsFeed = news.data.map((article) => {
    return {
      source: article.source,
      title: article.title,
      description: article.description,
      category: article.category,
    };
  });

  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: `You are a news presenter that takes an array of objects of today's news and generates and read out a short and succinct daily news update for the readers. Here is the array: ${chatGPTNewsFeed}`,
      },
    ],
  });

  console.log(`completion: ${completion.data.choices[0].message}`);

  fs.writeFile(
    "/Users/karansapolia/Learning/AI/live-news-app/chatGPT_answer.json",
    JSON.stringify(completion.data),
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("File written successfully\n");
      }
    }
  );

  const answer = completion.data.choices[0].message.content || "";

  return (
    <div>
      <SummarizeNews summary={answer} />
      <NewsList news={news} />
    </div>
  );
}

export default HomePage;
