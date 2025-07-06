import { Dir } from "node:fs";

export type CreateVaultProps = {
  directory: string;
  name: string;
};

export type CreateVaultRes = {
  directory: string;
  name: string;
};

export type OpenVaultProps = {
  directory: string;
};

export type OpenVaultRes = {
  directoryContent: Dir;
};
