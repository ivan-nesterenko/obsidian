import { opendir, writeFile } from "node:fs/promises";
import type { IFileSystem } from "../interfaces/IFileSystem";
import { mkdir, unlink } from "node:fs/promises";

export class FileSystemHelper implements IFileSystem {
  async getDirectory(directory: string): Promise<string[]> {
    const dir = await opendir(directory);
    const contents: string[] = [];

    for await (const dirent of dir) {
      contents.push(dirent.name);
    }

    return contents;
  }

  async makeDirectory(directory: string): Promise<void> {
    await mkdir(directory);
  }

  async writeFile(filePath: string, fileContent: string): Promise<void> {
    await writeFile(filePath, fileContent);
  };

  async removeFile(filePath: string): Promise<void> {
    await unlink(filePath)
  }
}
