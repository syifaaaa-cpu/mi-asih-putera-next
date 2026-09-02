import axios from 'axios';

export interface SiteInfoData {
  Alamat: string;
  Telp: string;
  Email: string;
  Instagram: string;
  Youtube: string;
}

export const siteInfoService = {
  async getSiteInfo(): Promise<SiteInfoData> {
    try {
      const response = await axios.get('/api/site-info');
      const resJson = response.data;

      // Mendukung berbagai struktur respons (langsung, terbungkus 'Data', atau 'data')
      const d = resJson.Data || resJson.data || resJson;

      if (!d) {
        return { Alamat: "", Telp: "", Email: "", Instagram: "", Youtube: "" };
      }

      let cleanAddress = d.Alamat || "";
      if (cleanAddress) {
        cleanAddress = cleanAddress.replace(/<[^>]*>?/gm, '').trim();
      }

      return {
        Alamat: cleanAddress,
        Telp: d.Telp && d.Telp !== "null" ? d.Telp : "",
        Email: d.Email && d.Email !== "null" ? d.Email : "",
        Instagram: d.Instagram && d.Instagram !== "null" ? d.Instagram : "",
        Youtube: d.Youtube && d.Youtube !== "null" ? d.Youtube : ""
      };
    } catch (err) {
      console.error("Gagal memuat data site info:", err);
      return { Alamat: "", Telp: "", Email: "", Instagram: "", Youtube: "" };
    }
  }
};