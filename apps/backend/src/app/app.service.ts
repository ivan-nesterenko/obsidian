import {  Inject, Injectable } from '@nestjs/common';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import {schema} from '../db';

@Injectable()
export class AppService implements BaseService {
  constructor(
    @Inject('DB_DEV') private drizzleDev: NodePgDatabase<typeof schema>,
  ) {}

  async getData() {
    const books = await this.drizzleDev.query.books.findMany();
    const authors = await this.drizzleDev.query.authors.findMany();
    return {
      books: books,
      authors: authors,
    };
  }

 
}
