import { Games } from "@/features/games/model";

const getGamesApi = async (): Promise<Games[]>  => {
    try {
      const res = await fetch(process.env.BACKEND_URL + "/games", { cache: "default" });
      
      if (!res.ok) {
        throw new Error(`Failed to fetch games: ${res.status} ${res.statusText}`);
      }
      return res.json();

    } catch (error) {
      console.error("Error fetching games:", error);
      return [];
    }
};

export default getGamesApi