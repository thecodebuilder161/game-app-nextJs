'use client';

import Image from 'next/image';
import Script from "next/script";
import { Games } from '@/app/lib/definations';


interface GamesListProps {
  games: Games;
  selectedCategoryId: number;
  search?: string;
}

const GamesList = ({ games, selectedCategoryId, search = "" }: GamesListProps) => {
  const launchGame = (gameCode: string) => {
    if (typeof window !== "undefined" && window.comeon?.game?.launch) {
      window.comeon.game.launch(gameCode);
    }
  };

  const filteredGames = games
    .filter(g => g.categoryIds.includes(selectedCategoryId))
    .filter(g =>
      g.name.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <>
      <Script src="/lib/comeon.game-1.1.min.js" strategy="beforeInteractive" />

      <div className='flex flex-col gap-8'>
        {filteredGames.map((g) => (
          <div key={g.name} className="bg-[#232946] rounded-2xl shadow-xl flex flex-col md:flex-row items-center md:items-stretch hover:scale-[1.01] transition-transform overflow-hidden">
            <div className="flex-shrink-0 w-full md:w-64 h-48 md:h-auto flex items-center justify-center">
              <Image
                src={g.icon.startsWith('/') ? g.icon : `/${g.icon}`}
                alt={g.name}
                width={280}
                height={180}
                className="object-contain max-h-40"
              />
            </div>
            <div className="flex-1 flex flex-col justify-between p-6">
              <div>
                <h2 className="text-2xl font-bold text-[#eebbc3] mb-2">{g.name}</h2>
                <p className="text-gray-300 text-sm mb-4">{g.description}</p>
              </div>
              <div className="flex justify-end mt-4">
                <button type='button' className="px-6 py-2 bg-gradient-to-r from-[#8eb50d] to-[#eebbc3] hover:from-[#eebbc3] hover:to-[#8eb50d] text-[#232946] font-bold rounded-lg shadow-lg transition text-base tracking-wide border-2 border-[#8eb50d]" onClick={() => launchGame(g.code)}>
                  Play Now
                </button>
              </div>
            </div>
          </div>
        ))}
        { filteredGames.length === 0 && (
          <p className="text-center text-gray-400">No games found.</p>
        )}
      </div>
      <div id="game-launch" />
    </>
  );
}

declare global {
  interface Window {
    comeon?: any;
  }
}

export default GamesList;