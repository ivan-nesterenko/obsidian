export interface IFileSystem {
  getDirectory(directory: string): Promise<string[]>;
  makeDirectory(directory: string): Promise<void>;
  writeFile(filePath: string, fileContent: string): Promise<void>;
  removeFile(filePath: string): Promise<void>;
}
