import { z } from "zod";

export const insertDownloadSchema = z.object({
  url: z.string().url("Please enter a valid Instagram URL"),
  status: z.string(),
});

export type InsertDownload = z.infer<typeof insertDownloadSchema>;

export interface Download extends InsertDownload {
  id: number;
  createdAt: Date;
}
