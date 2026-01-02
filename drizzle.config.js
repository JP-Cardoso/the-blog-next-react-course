import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './src/db/drizzle/migrations', //migrations
  schema: './src/db/drizzle/schemas.ts', //schemas
  dialect: 'sqlite',
  dbCredentials: {
    url: './db.sqlite3'
  }
});
