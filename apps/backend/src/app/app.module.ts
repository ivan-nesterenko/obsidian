import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DrizzlePGModule } from '@knaadh/nestjs-drizzle-pg';
import {schema} from '../db';


@Module({
  imports: [         
    DrizzlePGModule.register({
    tag: 'DB_DEV',
    pg: {
      connection: 'client',
      config: {
        connectionString: process.env.DATABASE_URL,
      },
    },
    config: { schema },
  }), ConfigModule.forRoot({ isGlobal: true })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
