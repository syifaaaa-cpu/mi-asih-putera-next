import axios from "axios";
import { NewsItem } from "../types";

export const newsService = {
  async getNews(): Promise<NewsItem[]> {
    const res = await axios.get("/api/news");
    const response = res.data;
    const rawData =
      response.Data?.Content || response.data || (Array.isArray(response) ? response : []);

    if (rawData.length === 0) return [];

    const baseApiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:7000";

    const mappedNews: NewsItem[] = rawData.map((item: any, index: number) => {
      const imgName = item.SignedThumbnail || item.Thumbnail;
      let finalImage = "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80&w=800";
      
      if (imgName) {
        if (imgName.startsWith("http")) {
          finalImage = imgName;
        } else {
          const cleanFilename = imgName.endsWith(".enc") ? imgName.replace(".enc", "") : imgName;
          finalImage = `${baseApiUrl}/resources/asset/${cleanFilename}`;
        }
      }

      const cleanContent = item.Content ? item.Content.replace(/<[^>]*>?/gm, "") : "Ringkasan berita tidak tersedia.";

      const isPinned = Boolean(
        item.IsPin === true || item.IsPin === 1 || 
        item.Pin === true || item.Pin === 1 || 
        item.IsFeatured === true || item.IsFeatured === 1 ||
        item.StatusPin === true || item.StatusPin === 1
      );

      return {
        id: item.ContentId || item.id || index + 1,
        title: item.Title || item.title || "Tanpa Judul",
        category: item.Category || item.category || "Berita",
        date: item.TglPublish || item.date
          ? new Date(item.TglPublish || item.date).toLocaleDateString("id-ID", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })
          : "01 Sep 2026",
        author: item.Author || item.author || "Admin",
        readTime: "3 menit baca",
        image: finalImage,
        summary: cleanContent,
        fullContent: [cleanContent],
        featured: isPinned,
      };
    });

    mappedNews.sort((a: any, b: any) => (b.featured === true ? 1 : 0) - (a.featured === true ? 1 : 0));

    if (!mappedNews.some(item => item.featured) && mappedNews.length > 0) {
      mappedNews[0].featured = true;
    }

    return mappedNews;
  }
};