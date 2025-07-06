import { AxiosResponse } from "axios";
import { axiosInstance } from "../../config/axios-intstance";
import { CreateVaultProps, CreateVaultRes, OpenVaultProps, OpenVaultRes } from "../models/vault-models";

export const createVault = async ({ directory, name }: CreateVaultProps): Promise<AxiosResponse<CreateVaultRes>> => {
  return await axiosInstance.post("/vault/create", {
    directory,
    name,
  });
};

export const openVault = async ({ directory }: OpenVaultProps): Promise<AxiosResponse<OpenVaultRes>> => {
  return await axiosInstance.post("/vault/open", {
    directory,
  });
};
