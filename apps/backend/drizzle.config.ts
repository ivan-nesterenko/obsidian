import { defineConfig } from 'drizzle-kit';
import { config } from 'dotenv';

config();


export default defineConfig({
  schema: './apps/backend/src/db/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL||'postgres://postgres:postgres@localhost:5432/obsidian',
  },
})