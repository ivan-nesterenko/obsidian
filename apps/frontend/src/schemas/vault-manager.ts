import { z } from "zod";

export const VaultManagerSchema = z.object({
  vaultName: z
    .string()
    .min(1, {
      message: "Enter vault name",
    }),
  directoryPath: z.string().min(1, {
    message: "Select directory to create vault at",
  }),
});
