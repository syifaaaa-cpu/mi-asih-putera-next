import axios from 'axios';

export interface StudentStoryItem {
  id: number | string;
  title: string;
  content: string;
  thumbnail: string;
  isPinned?: boolean;
}

export const studentStoryService = {
  getStories: async (): Promise<StudentStoryItem[]> => {
    try {
      const response = await axios.get('/api/student-stories');
      const json = response.data;

      console.log("JSON LENGKAP DARI API:", json);

      // Menyesuaikan jika Data berupa objek yang membungkus list/array di dalamnya
      let rawData: any[] = [];
      
      const targetData = json.Data || json.data || json;

      if (Array.isArray(targetData)) {
        rawData = targetData;
      } else if (targetData && typeof targetData === 'object') {
        // Mencari properti apa saja di dalam objek Data yang berupa array
        const possibleArrayKey = Object.keys(targetData).find(key => Array.isArray(targetData[key]));
        if (possibleArrayKey) {
          rawData = targetData[possibleArrayKey];
        } else if (Array.isArray(targetData.content)) {
          rawData = targetData.content;
        } else if (Array.isArray(targetData.list)) {
          rawData = targetData.list;
        }
      }

      console.log("DATA BERHASIL DIEKSTRAK (RAWDATA):", rawData);

      if (!rawData || rawData.length === 0) {
        return [];
      }

      const baseUrl = 'http://localhost:7000';

      return rawData.map((item: any) => {
        let imageUrl = item.SignedThumbnail || '';
        
        if (!imageUrl && item.Thumbnail) {
          imageUrl = item.Thumbnail.startsWith('http') 
            ? item.Thumbnail 
            : `${baseUrl}/resources/asset/${item.Thumbnail}`;
        }

        return {
          id: item.ContentId || item.id || Math.random(),
          title: item.Title || "Tanpa Nama",
          content: item.Content || "",
          thumbnail: imageUrl,
          isPinned: item.Pin === "true" || item.Pin === true || item.isPinned || false,
        };
      });
    } catch (error) {
      console.error("Error studentStoryService:", error);
      return [];
    }
  }
};