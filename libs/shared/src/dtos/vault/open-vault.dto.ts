import { z } from 'zod';

export const openVaultSchema = z
  .object({
    directory: z.string()
  })
  .required();

export type OpenVaultDto = z.infer<typeof openVaultSchema>;
