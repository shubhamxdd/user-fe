import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { User } from "@/types";
import { Button } from "./ui/button";
import { MdEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addToTeam, clearTeam, removeFromTeam } from "@/redux/actions";

interface UserCardProps {
  user: User;
  onUserSelect?: (user: User) => void;
  fromCarousel: boolean;
}

const UserCard = ({ user, onUserSelect, fromCarousel }: UserCardProps) => {
  const dispatch = useDispatch();
  // function resizeImageUrl(url: string, newSize: number) {
  //   const parsedUrl = new URL(url);
  //   parsedUrl.searchParams.set("size", `${newSize}x${newSize}`);
  //   return parsedUrl.toString();
  // }

  // const classes = [
  //   "bg-red-300",
  //   "bg-yellow-300",
  //   "bg-green-300",
  //   "bg-blue-300",
  //   "bg-indigo-300",
  //   "bg-purple-300",
  //   "bg-pink-300",
  // ];
  // const randomClass = classes[Math.floor(Math.random() * classes.length)];

  const handleAddUserToTeam = (user: User) => {
    dispatch(addToTeam(user));
    console.log();
  };

  const handleRemoveUserFromTeam = (userId: string) => {
    dispatch(removeFromTeam(userId));
  };

  const handleClearTeam = () => {
    dispatch(clearTeam());
  };

  return (
    <Card
      className={` shadow-md hover:shadow-lg mb-3 transition-all duration-300 ${
        fromCarousel ? "w-[320px] h-[400px] " : "sm:w-[400px]"
      }`}
    >
      <CardHeader>
        <div className="grid place-items-center">
          <img
            src={user.avatar}
            // src={resizeImageUrl(user.avatar, 600)}
            alt={user.first_name}
            // ${randomClass}
            className={`w-32 h-32 rounded-full object-cover bg-zinc-300`}
          />
        </div>
        <CardTitle className="text-center">
          <div className="my-3">
            <h2 className="font-bold text-xl">
              {user.first_name} {user.last_name}
            </h2>
          </div>
        </CardTitle>
        <CardDescription>
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
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-zinc-600">Contact: {user.email}</p>
      </CardContent>
      <CardFooter>
        <div className="w-full flex items-center gap-2 justify-center">
          {onUserSelect && (
            <Button
              variant={"default"}
              className="w-1/2 font-semibold"
              onClick={() => handleAddUserToTeam(user)}
            >
              Add to team
            </Button>
          )}
          <Button variant={"secondary"} className="w-1/2 gap-2 font-semibold">
            <MdEdit size={20} /> Edit
          </Button>
          {/* <Button
            variant={"destructive"}
            onClick={() => console.log("remove user")}
            className="w-1/3 gap-2 font-semibold"
          >
            <MdDeleteOutline size={20} /> Delete
          </Button> */}
        </div>
      </CardFooter>
    </Card>
  );
};

export default UserCard;
