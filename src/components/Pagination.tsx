import { Button } from "./ui/button";

const Pagination = ({ currentPage, totalPages, onPageChange }: any) => {
  return (
    <div>
      <div className="flex gap-2 justify-evenly my-10">
        <Button
          variant={"secondary"}
          className="w-28 font-semibold"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          Previous
        </Button>
        <span>
          {currentPage} / {totalPages}
        </span>
        <Button
          variant={"secondary"}
          className="w-28 font-semibold"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
