import { pgTable, serial, varchar } from 'drizzle-orm/pg-core';

export const notes = pgTable('Notes', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 256 }),
});
