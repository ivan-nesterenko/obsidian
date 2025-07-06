import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { IFileSystem } from "../../common/interfaces/IFileSystem";
import { CreateVaultDto } from "@/shared/dtos/vault/create-vault.dto";
import { OpenVaultDto } from "@/shared/dtos/vault/open-vault.dto";
import * as path from "node:path";
import { welcomeNoteFileName, welcomeNoteContent, appMetadataDirectoryName } from "@/shared/contstants/vault";

@Injectable()
export class VaultService implements BaseService {
  constructor(@Inject("IFileSystem") private readonly fileSystem: IFileSystem) {}

  async createVault(createVaultDto: CreateVaultDto) {
    const directoryPath = path.join(createVaultDto.directory, createVaultDto.name);
    const welcomeNoteFilePath = path.join(directoryPath, welcomeNoteFileName, ".md");

    try {
      await this.fileSystem.makeDirectory(directoryPath);
      await this.fileSystem.writeFile(welcomeNoteFilePath, welcomeNoteContent);
      await this.createVaultMetadata(directoryPath);
    } catch (error) {
      throw new BadRequestException(error);
    }

    return {
      ok: true,
    };
  }

  async createVaultMetadata(vaultDirectoryPath: string) {
    const appMetadataDirectoryPath= path.join(vaultDirectoryPath, appMetadataDirectoryName)
    await this.fileSystem.makeDirectory(appMetadataDirectoryPath);
  }

  async openVault(openVaultDto: OpenVaultDto) {
    const directoryContent = await this.fileSystem.getDirectory(openVaultDto.directory);

    console.log(`Opening Vault: ${openVaultDto.directory}`);
    console.log(`Directory Content: ${directoryContent}`);

    return {
      ok: true,
      directoryContent,
    };
  }
}
