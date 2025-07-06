import { z } from 'zod';

export const createVaultSchema = z
  .object({
    name: z.string(),
    directory: z.string()
  })
  .required();

export type CreateVaultDto = z.infer<typeof createVaultSchema>;
