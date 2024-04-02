import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface FilterDropdownProps {
  title: string;
  items: any[];
  handleFilterChange: (filter: any) => void;
}

const FilterDropdown = ({
  title,
  items,
  handleFilterChange,
}: FilterDropdownProps) => {
  return (
    <DropdownMenu>
      <Button variant={"ghost"} asChild>
        <DropdownMenuTrigger>{title}</DropdownMenuTrigger>
      </Button>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => handleFilterChange("")}>
          Reset
        </DropdownMenuItem>
        {items.map((item, i) => (
          <DropdownMenuItem key={i} onClick={() => handleFilterChange(item)}>
            {typeof item === "boolean" ? (item ? "Yes" : "No") : item}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default FilterDropdown;
