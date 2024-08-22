# genmusic-front

## Description

Genmusic is an open-source project under development that aims to generate personalized Spotify playlists based on user-described emotions.

## Features

* AI Playlist Generation: Leverages artificial intelligence to create Spotify playlists tailored to user input.
* Emotion-Based Music Discovery: Users can describe their desired mood or emotion, and the application will generate a playlist to match.
* Spotify Integration: Seamlessly connects with user Spotify accounts to create and populate playlists.

## Getting Started

### Prerequisites

* [Node.js and npm (or yarn/pnpm/bun) installed on your system.]
* [A MongoDB account and database (if you're using Prisma).]
* [A Clerk account and a configured application.]

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/vitucordeiro/genmusic-front
   ```
2. Navigate to the project directory:
  ```bash
    cd genmusic-front 
  ```
3. Install dependencies:
  ```bash
    npm install
  ```
### Configuration

1. Set up your `.env`file based on the example provided in .env.example. You'll need to include:
  * `DATABASE_URL`: Your MongoDB connection string.
  * [Other environment variables required by your application and Clerk.]
2. Configure your Clerk application and webhooks as described in the "Webhooks" section below.

### Webhooks

This application uses Clerk webhooks to sync new users to MongoDB. To configure them:
1. Set up ngrok to expose your local development server -> Visit Ngrok Doc
2. In your Clerk dashboard, navigate to your application's webhook settings.
3. Add a new webhook for the user.created event (or any other relevant events) and use the ngrok URL as the webhook URL.
4. Initialize Webhook on terminal
  ```bash
  ngrox http --domain=<your-custom-domain-from-ngrok> localhost:<PORT>
  ```

### Prisma Setup

This project uses Prisma as the ORM for database interactions.
1. Initialize Prisma:
  ```bash 
  npx prisma init
  ```
2. Configure your prisma schema in `prisma/schema.prisma`:
  ```prisma
  generator client {
    provider = "prisma-client-js"
  }

  datasource db {
    provider = "mongodb"
    url      = env("DATABASE_URL")
  }
  ```
  3. Generate the Prisma Client:
  ```bash
  npx prisma generate
  ```
### Running the development server
  ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
  ```