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
// import { IconType } from "react-icons/lib";

interface CartModalProps {
  icon: React.ReactNode;
}

const CartModal = ({ icon }: CartModalProps) => {
  const dispatch = useDispatch();
  const team: [] = useSelector((state) => state.team);
  //   console.log(team);

  const handleClearTeam = () => {
    dispatch(clearTeam());
  };

  return (
    <Dialog>
      <DialogTrigger className="flex gap-1 justify-center items-center">
        {icon} Cart
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl">Your cart:</DialogTitle>
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
          {team.length > 0 && (
            <>
              <Button
                onClick={() => {
                  ("");
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
