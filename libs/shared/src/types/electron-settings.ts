import { z } from "zod";

export const mainSettingsSchema = z.object({
  lastActiveVaultId: z.string().default(""),
  lastActiveFiles: z
    .array(
      z.object({
        name: z.string(),
        directoryPath: z.string(),
      }),
    )
    .default([]),
  directories: z
    .array(
      z.object({
        name: z.string(),
        directoryPath: z.string(),
        isExpanded: z.boolean().default(false),
        isEmpty: z.boolean().default(true),
      }),
    )
    .default([]),
  window: z.object({
    width: z.number(),
    height: z.number(),
    x: z.number(),
    y: z.number(),
  }).default({ width: 0, height: 0, x: 0, y: 0 }),
});

export type MainSettingsType = z.infer<typeof mainSettingsSchema>;
