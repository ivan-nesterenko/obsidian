import { z } from "zod";

export const VaultManagerSchema = z.object({
  directoryPath: z.string().min(1, {
    message: "Select directory to create vault at",
  }),
  vaultName: z.string().min(1, {
    message: "Enter vault name",
  }),
});
