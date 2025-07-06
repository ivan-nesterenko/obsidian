import * as path from "node:path";
import { app } from "electron";
import { z, ZodObject } from "zod";
import { writeFile } from "node:fs/promises";
import { readFileSync, writeFileSync } from "node:fs";
import { rename } from "next/dist/lib/fs/rename";

// TODO: Test class on error handling

export class ElectronStoreManager<TSchema extends ZodObject<any>> {
  private storeFileName = "";
  private storePath = app.getPath("userData");
  private storeFilePath = "";
  private storeContent: z.infer<TSchema> = {};
  private storeSchema: ZodObject<any>;

  constructor(
    storeName: string,
    private schema: ZodObject<any>,
  ) {
    const storeFileName = storeName + ".json";
    const storeFilePath = path.join(this.storePath, storeFileName);

    this.storeFileName = storeFileName;
    this.storeFilePath = storeFilePath;
    this.storeSchema = schema;

    try {
      const fileData = readFileSync(this.storeFilePath, "utf-8");
      const fileJson = JSON.parse(fileData);

      this.schema.parse(fileJson);
      this.storeContent = fileJson;
    } catch (error) {
      this.initializeStore();
    }
  }

  private initializeStore(): void {
    const defaultContent = this.storeSchema.parse({});

    try {
      writeFileSync(this.storeFilePath, JSON.stringify(defaultContent), "utf-8");
    } catch (err) {
      console.error("Could not initialize store:", err);
    }

    this.storeContent = defaultContent;
  }

  private async updateStore() {
    try {
      const tempStoreFileName = this.storeFileName + ".tmp";
      const tempStoreFilePath = path.join(this.storePath, tempStoreFileName);

      await writeFile(tempStoreFilePath, JSON.stringify(this.storeContent), "utf-8");
      await rename(this.storeFilePath, tempStoreFilePath);
    } catch (err) {
      console.error("Could not save store:", err);
    }
  }

  public async set<K extends keyof z.infer<TSchema>, T extends z.infer<TSchema>[K]>(key: K, value: T): Promise<void> {
    this.storeContent[key] = value;
    await this.updateStore();
  }

  public get<K extends keyof z.infer<TSchema>>(key: K): z.infer<TSchema>[K] | undefined {
    return this.storeContent[key];
  }
}
