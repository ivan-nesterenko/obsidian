import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import { DrizzlePGModule } from "@knaadh/nestjs-drizzle-pg";
import * as schema from "./db";

@Module({
  imports: [
    DrizzlePGModule.register({
      tag: "DB_DEV",
      pg: {
        connection: "client",
        config: {
          connectionString:
            `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@localhost:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DB}` ||
            "postgres://postgres:postgres@localhost:5432/postgres",
        },
      },
      config: { schema: { ...schema } },
    }),
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
