import { Body, Controller, Post, UsePipes } from "@nestjs/common";
import { VaultService } from "./vault.service";
import { ZodValidationPipe } from "../../common/pipes/zod-validation.pipe";
import { CreateVaultDto, createVaultSchema } from "@/shared/dtos/vault/create-vault.dto";
import { OpenVaultDto, openVaultSchema } from "@/shared/dtos/vault/open-vault.dto";

@Controller("vault")
export class VaultController {
  constructor(private readonly vaultService: VaultService) {}

  @Post("create")
  @UsePipes(new ZodValidationPipe(createVaultSchema))
  async createVault(@Body() openVaultDto: CreateVaultDto) {
    return this.vaultService.createVault(openVaultDto);
  }

  @Post("open")
  @UsePipes(new ZodValidationPipe(openVaultSchema))
  async openVault(@Body() openVaultDto: OpenVaultDto) {
    return this.vaultService.openVault(openVaultDto);
  }
}
