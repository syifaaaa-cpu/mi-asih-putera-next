import axios from 'axios';

export interface TestimonialItem {
  id: number;
  title: string;
  content: string;
  author: string;
  role: string;
  avatar: string;
}

export const testimonialService = {
  async getTestimonials(): Promise<TestimonialItem[]> {
    try {
      const response = await axios.get('/api/testimonials');
      const json = response.data;
      
      const rawData = json.Data?.Content || json.data || json;

      if (!Array.isArray(rawData)) {
        return [];
      }

      return rawData.map((item: any, index: number) => {
        let rawContent = item.Content || item.content || item.deskripsi || '';
        const cleanedContent = rawContent.replace(/<\/?[^>]+(>|$)/g, "");

        return {
          id: item.ContentId || item.id || index,
          title: item.Title || item.judul || '',
          content: cleanedContent,
          author: item.Author || item.name || 'Orang Tua Siswa',
          role: item.Category || 'Orang Tua Siswa',
          avatar: item.SignedThumbnail || item.image || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
        };
      });
    } catch (error) {
      console.error("Gagal mengambil data testimoni:", error);
      return [];
    }
  }
};