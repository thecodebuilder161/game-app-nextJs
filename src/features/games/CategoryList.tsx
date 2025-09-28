'use client';
import { useState } from "react";
import { Categories } from "@/features/games/model"

const CategoryList = ( { categories, onCategorySelect }: { categories: Categories[], onCategorySelect: (id: number) => void } ) => {

  const [selectedCategoryId, setSelectedCategoryId] = useState<number>(0);

  return (
    <div className="flex flex-wrap gap-3 justify-center items-center">
      {categories.map(cat => (
        <span key={cat.id} className={`px-5 py-2 rounded-full border-1 font-normal sm:font-bold cursor-pointer select-none ${cat.id === selectedCategoryId ? 'bg-[#8eb50d] text-[#232946]' : 'bg-[#232946] border-[#8eb50d] text-[#8eb50d]'} `} onClick={() => {onCategorySelect(cat.id); setSelectedCategoryId(cat.id)}}
        >
          {cat?.name ? cat.name : 'No Name defined'}
        </span>
      ))}
    </div>
  )
}

export default CategoryList