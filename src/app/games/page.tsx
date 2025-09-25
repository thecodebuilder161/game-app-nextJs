import WelcomeMessage from '../components/WelcomeMessage';
import { Categories, Games } from '../lib/definations';
import GamesContainer from './GamesContainer';



const GamesListing = async() => {

  const getGames = async () => {
    try {
      const res = await fetch("http://localhost:3001/games", { cache: "no-store" });
      return res.json();
    } catch (error) {
      console.error("Error fetching games:", error);
    }
  };

  const getCategories = async () => {
    try {
      const res = await fetch("http://localhost:3001/categories", { cache: "no-store" });
      return res.json();
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const games: Games = await getGames();
  const categories: Categories = await getCategories();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] to-[#16213e] py-10 px-2">
      <div className='container mx-auto'>
        <WelcomeMessage />
      </div>
      <GamesContainer categories={categories} games={games} />
    </div>
  );
}

export default GamesListing