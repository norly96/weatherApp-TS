import { useState } from "react";

const SearchInput = () => {
  const [name, setName] = useState<string>("");

  const handleSearch = () => {
    console.log("Searching for:", name);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <div className="flex items-center bg-green-card rounded-full shadow-md overflow-hidden ">
      <input
        type="text"
        className="flex-grow px-10 bg-inherit py-4 text-xl text-light-white placeholder:text-light-white focus:outline-none"
        placeholder="Search..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch} className="p-4">
        <img src="/images/search.svg" alt="Search" className="h-8 w-8" />
      </button>
    </div>
  );
};

export default SearchInput;
