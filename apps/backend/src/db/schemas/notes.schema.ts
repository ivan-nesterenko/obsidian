import { pgTable, serial, varchar } from "drizzle-orm/pg-core";
import { timestamps } from "../../common/helpers/columns.helper";

export const notes = pgTable("Notes", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 256 }),
  ...timestamps
});
