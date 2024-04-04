import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { User } from "@/types";
import { Button } from "./ui/button";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { clearTeam, removeFromTeam } from "@/redux/actions";

interface CartUserListProps {
  user: User;
  onUserSelect?: (user: User) => void;
}

const CartUserList = ({ user, onUserSelect }: CartUserListProps) => {
  const dispatch = useDispatch();

  const handleRemoveUserFromTeam = (userId: number) => {
    dispatch(removeFromTeam(userId));
  };

  return (
    <Card className="md:gap-3 flex-wrap h-44 shadow-md hover:shadow-lg transition-all duration-300">
      <CardHeader className="flex justify-center flex-row items-center">
        <img
          src={user.avatar}
          alt={user.first_name}
          className="w-20 h-20 p-1 rounded-full bg-zinc-400"
        />
        <div className="px-1">
          <CardTitle className="text-center">
            {user.first_name} {user.last_name}
          </CardTitle>
        </div>
        <div className="flex gap-1 md:gap-3 flex-wrap items-center justify-center">
          <span className="text-[14px] font-bold rounded-full bg-blue-500/10 px-4 py-1 text-blue-700">
            {user.domain === "It" ? "IT" : user.domain}
          </span>
          <span className="text-[14px] font-bold rounded-full bg-purple-500/10 px-4 py-1 text-purple-700">
            {user.gender}
          </span>
          <span
            className={`text-[14px] font-bold rounded-full px-4 py-1 line-clamp-1 ${
              user.available
                ? "bg-green-500/10 text-green-700"
                : "bg-red-500/10 text-red-700"
            }`}
          >
            {user.available ? "Available" : "Not Available"}
          </span>
        </div>

        <Button
          variant={"destructive"}
          size={"icon"}
          onClick={() => handleRemoveUserFromTeam(user.id)}
          className="font-semibold"
        >
          <MdDeleteOutline size={20} />
        </Button>
      </CardHeader>
    </Card>
  );
};

export default CartUserList;
