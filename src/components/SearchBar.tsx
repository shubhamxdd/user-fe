import { IoMdSearch } from "react-icons/io";
import { Input } from "./ui/input";

const SearchBar = ({ query, handleQueryChange }: any) => {
  return (
    <div className="flex items-center focus-within:ring-0 focus:ring-0 focus:outline-none focus-within:outline-none border-2 border-zinc-200 transition-all duration-300 focus-within:border-zinc-600 pr-4 rounded-lg">
      <Input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleQueryChange}
      />
      <IoMdSearch size={24} className="cursor-pointer" />
    </div>
  );
};

export default SearchBar;
