import { Categories } from "@/features/games/model";

const getCategoriesApi = async (): Promise<Categories[]> => {
    try {
      const res = await fetch(process.env.BACKEND_URL + "/categories", { cache: "default" });
      return res.json();
    } catch (error) {
      console.error("Error fetching categories:", error);
      return [];
    }
  };

export default getCategoriesApi