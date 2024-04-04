import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useDispatch, useSelector } from "react-redux";
import CartUserList from "./CartUserList";
import { clearTeam } from "@/redux/actions";
import { Button } from "./ui/button";
import axios from "axios";
// import { IconType } from "react-icons/lib";
import { useToast } from "@/components/ui/use-toast";
import { ScrollArea } from "./ui/scroll-area";

interface CartModalProps {
  icon: React.ReactNode;
}

const CartModal = ({ icon }: CartModalProps) => {
  const dispatch = useDispatch();
  const { toast } = useToast();
  const team: [] = useSelector((state) => state.team);
  //   console.log(team);

  const handleClearTeam = () => {
    dispatch(clearTeam());
  };

  const addCartToDatabse = async () => {
    try {
      const res = await axios.post(
        "https://user-backend-4wri.onrender.com/api/team",
        team
      );
      console.log(res.data);
      toast({
        title: "Added to DB",
      });
    } catch (error) {
      console.log(error);
      toast({
        title: "Something went wrong!",
      });
    }
  };

  return (
    <Dialog>
      <DialogTrigger className="flex gap-1 justify-center items-center">
        {icon} Cart
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl">Your cart:</DialogTitle>
          <ScrollArea className="h-[500px]">
            <DialogDescription>
              {team.length > 0 ? (
                team.map((item) => (
                  <div className="my-5">
                    <CartUserList user={item} />
                  </div>
                ))
              ) : (
                <p className="text-xl text-center my-6">No items in cart!</p>
              )}
            </DialogDescription>
          </ScrollArea>
          {team.length > 0 && (
            <>
              <Button
                onClick={() => {
                  addCartToDatabse();
                  handleClearTeam();
                }}
                className="mt-4"
              >
                Add to database
              </Button>
              <Button
                onClick={handleClearTeam}
                variant={"destructive"}
                className="mt-4"
              >
                Clear Cart
              </Button>
            </>
          )}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CartModal;
