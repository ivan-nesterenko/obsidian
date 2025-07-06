import { Module } from "@nestjs/common";
import { VaultController } from "./vault.controller";
import { VaultService } from "./vault.service";
import { FileSystemHelper } from "../../common/helpers/file-system.helper";

@Module({
  controllers: [VaultController],
  providers: [VaultService, { provide: "IFileSystem", useClass: FileSystemHelper }],
})
export class VaultModule {}
