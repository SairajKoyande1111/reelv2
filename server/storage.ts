import {
  type InsertDownload,
  type Download
} from "../shared/schema.js";

export interface IStorage {
  getDownloads(): Promise<Download[]>;
  createDownload(download: InsertDownload): Promise<Download>;
}

export class MemStorage implements IStorage {
  private downloads: Map<number, Download>;
  private currentId: number;

  constructor() {
    this.downloads = new Map();
    this.currentId = 1;
  }

  async getDownloads(): Promise<Download[]> {
    return Array.from(this.downloads.values());
  }

  async createDownload(insertDownload: InsertDownload): Promise<Download> {
    const id = this.currentId++;
    const download: Download = {
      ...insertDownload,
      id,
      createdAt: new Date()
    };
    this.downloads.set(id, download);
    return download;
  }
}

export const storage = new MemStorage();
