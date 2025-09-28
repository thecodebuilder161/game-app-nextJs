import getGamesApi from '@/app/api/getGames';
import getCategoriesApi from '@/app/api/getCategories';
import WelcomeMessage from '@/app/components/WelcomeMessage';
import GamesContainer from '@/features/games/GamesContainer';

const GamesListing = async() => {

  const games  = await getGamesApi();
  const categories = await getCategoriesApi();

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