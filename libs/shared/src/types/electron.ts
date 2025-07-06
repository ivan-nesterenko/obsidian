import { MainSettingsType } from "@/shared/types/electron-settings";

export type ElectronWindow = {
  close: () => void;
  minimize: () => void;
  toggleMaximize: () => void;
  createVault: ({ vaultName, directoryPath }: CreateVaultParams) => void;
  getDirectory: () => Promise<GetDirectoryResponse>;
  openVault: () => Promise<unknown>;
  getMainSetting<K extends keyof MainSettingsType>(
    props: { key: K }
  ): Promise< MainSettingsType[K] >;
  editMainSetting<K extends keyof MainSettingsType>(
    props: { key: K; value: MainSettingsType[K] }
  ): Promise<EditMainSettingValueResponse>;
};

export type CreateVaultParams = {
  vaultName: string;
  directoryPath: string;
};

export type GetDirectoryResponse = {
  success: boolean;
  filePaths: string;
  error?: string;
};

export type EditMainSettingValueResponse = {
  success: boolean;
};

export type GetMainSettingValueProps<K extends keyof MainSettingsType> = {
  key: K;
};

export type EditMainSettingValueProps<K extends keyof MainSettingsType> = {
  key: K;
  value: MainSettingsType[K];
};


