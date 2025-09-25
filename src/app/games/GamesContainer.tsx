'use client'

import CategoryList from "@/app/components/CategoryList";
import GamesList from "@/app/components/GamesList";
import { Categories, Games } from "../lib/definations";
import { useState } from "react";
import SearchFilter from "@/app/components/SearchFilter";


const GamesContainer = ({ categories, games }: { categories: Categories; games: Games }) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<number>(0);
  const [search, setSearch] = useState("");
  
  const handleCategoryId = (id: number) => {
    setSelectedCategoryId(id);
  }

  const handleSearch = (search: string) => {
    setSearch(search);
  }

  return (
    <div>
      <div className="flex justify-between items-center max-w-6xl mx-auto mb-8">
        <CategoryList categories={categories} onCategorySelect={handleCategoryId} />
        <div className="mt-4 flex justify-end">
          <SearchFilter onSearch={handleSearch} />
        </div>
      </div>
      <div className="max-w-6xl mx-auto">
        <GamesList games={games} selectedCategoryId={selectedCategoryId} search={search} />
      </div>
    </div>
  )
}

export default GamesContainer;
