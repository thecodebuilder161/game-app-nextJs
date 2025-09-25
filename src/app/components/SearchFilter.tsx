'use client';

import { useEffect, useState } from "react";

const SearchFilter = ({onSearch}: {onSearch: (search: string) => void}) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      onSearch(search);
    }, 300)

    return () => clearTimeout(delayDebounceFn)
  }, [search, onSearch])
  
  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={e => { setSearch(e.target.value); }}
        placeholder="Search games..."
        className="px-4 py-2 rounded-lg border border-[#8eb50d] bg-[#232946] text-white focus:outline-none focus:ring-2 focus:ring-[#8eb50d] w-full max-w-xs"
      />
    </div>
  )
}

export default SearchFilter