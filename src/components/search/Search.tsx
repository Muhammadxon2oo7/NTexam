"use client"; 
import React, { useState, useEffect } from "react";
import Link from "next/link"; 
import { useSearch } from "@/hooks/useSearch";
import { SearchIcon } from "@/../public/img/header/SearchIconn";
import { Button } from "../ui/button";
import { FilterIcon } from "@/../public/img/header/FilterIcon";

interface SearchProps {
  onSearchResults: (results: any[]) => void;
}

const Search: React.FC<SearchProps> = ({ onSearchResults }) => {
  const [searchQuery, setSearchQuery] = useState(""); 
  const { data, isLoading, isFetching, error } = useSearch(searchQuery); 

  useEffect(() => {
    if (data && data.length > 0) {
      onSearchResults(data); 
    }
  }, [data, onSearchResults]);
  const handleItemClick = () => {
    setSearchQuery("");
  };
  return (
    <div className="relative">
      <div className="border border-primary bg-[#f7f7f7] rounded-[6px] w-[910px] h-[49px] flex items-center pl-[9px] mr-[24px]">
        <SearchIcon />
        <input
          type="text"
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)} 
          placeholder="Qidirish"
          className="h-[90%] bg-transparent flex flex-grow outline-none pl-[16px] pr-[10px]"
        />
        <Button className="flex w-[118px] h-full rounded-none rounded-tr-[6px] rounded-br-[6px]">
          <FilterIcon /> Filter
        </Button>
      </div>

     
      {searchQuery && (
        <div className="w-[930px] absolute top-[65px] rounded shadow-md z-[100] h-[200px] overflow-hidden overflow-y-scroll">
          {isLoading || isFetching ? (
            <p>Loading...</p> 
          ) : (
            <ul>
              {data?.map((result, index) => (
                <li
                  key={index}
                  className="p-2 bg-white hover:text-primary transition-all"

                >
                  
                  <Link href={`/pages/product/${result.id}`} onClick={handleItemClick}>
                   {result.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
