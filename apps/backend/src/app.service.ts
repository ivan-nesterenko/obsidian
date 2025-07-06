import { Inject, Injectable } from "@nestjs/common";
import { NodePgDatabase } from "drizzle-orm/node-postgres";
import * as schema from "./db";

@Injectable()
export class AppService implements BaseService {
  constructor(@Inject("DB_DEV") private drizzleDev: NodePgDatabase<typeof schema>) {}

  async getData() {
    return {
      ok: true,
    };
  }
}
