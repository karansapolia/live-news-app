# ChatGPT News Summarizer

This app aims to be a news aggregator as well as a "News summarizer"

We use:

1. Mediastack News API to fetch news by topics
2. Use the OpenAI API to make ChatGPT summarize the presented news articles.

## How to try this locally?

1. Download repo and install node modules with yarn/npm/pnpm
2. Create a `.env` or `.env.local` file
3. Add two API keys to this file:
   1. Mediastack API key as `ACCESS_KEY`
   2. OpenAPI Api key as `OPENAI_API_KEY`
4. Run `pnpm dev` or `npm dev` or `yarn dev`
5. Click on the "Summarize news" button 
6. Enjoy