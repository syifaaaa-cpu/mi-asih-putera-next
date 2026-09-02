import axios from 'axios';

export interface ProgramItem {
  id: string | number;
  title: string;
  description: string;
  image: string;
}

export const programService = {
  async getPrograms(): Promise<ProgramItem[]> {
    try {
      const response = await axios.get('/api/program-unggulan');
      const resJson = response.data;
      
      console.log("Struktur API Program:", resJson);

      // Menyesuaikan dengan struktur JSON Postman Anda: Data -> Content (berupa array)
      const rawData = resJson.Data || resJson.data || resJson;
      const list = Array.isArray(rawData) 
        ? rawData 
        : (Array.isArray(rawData.Content) ? rawData.Content : []);

      return list.map((item: any, index: number) => {
        let cleanContent = item.Content || "";
        if (cleanContent) {
          cleanContent = cleanContent.replace(/<[^>]*>?/gm, '').trim();
        }

        return {
          id: item.ContentId || index,
          title: item.Title || "",
          description: cleanContent,
          // Menggunakan SignedThumbnail dari respons Postman Anda
          image: item.SignedThumbnail || item.Thumbnail || "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=500",
        };
      });
    } catch (err) {
      console.error("Gagal memuat service program:", err);
      return [];
    }
  }
};