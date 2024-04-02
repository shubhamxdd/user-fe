import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "./ui/separator";
import { RxHamburgerMenu } from "react-icons/rx";
import Navlinks from "./Navlinks";

const Mobilenav = () => {
  return (
    <div className="max-md:flex hidden">
      <Sheet>
        <SheetTrigger>
          <RxHamburgerMenu size={24} />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>
              <h1 className="text-xl md:text-2xl text-left font-semibold">
                User Cards
              </h1>
              <Separator className="mt-2" />
            </SheetTitle>
            <SheetDescription className="text-black font-normal text-[16px]">
              <ul className="flex flex-col gap-2 text-left md:gap-8 -mx-4">
                <Navlinks />
              </ul>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Mobilenav;
