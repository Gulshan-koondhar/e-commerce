"use client";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface IClass {
  className: string;
}

const SearchBar = (className: IClass) => {
  const [query, setQuery] = useState<string>("");
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/products?name=${query}`);
    }
    setQuery("");
  };

  return (
    <div>
      <form
        action=""
        className={`${className.className}`}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-[90%] bg-transparent outline-none text-white "
        />
        <button className="w-[10%]">
          <Search />
        </button>
      </form>
    </div>
  );
};
export default SearchBar;
