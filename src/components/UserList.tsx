import { User } from "@/types";
import UserCard from "./UserCard";

interface UserListProps {
  users: User[];
  selectedUsers: User[];
  onUserSelect: (user: User) => void;
}

const UserList = ({ users, selectedUsers, onUserSelect }: UserListProps) => {
  return (
    <div className="flex flex-row gap-4 flex-wrap justify-center">
      {users.length > 0
        ? users.map((item) => (
            <UserCard
              user={item}
              key={item._id}
              onUserSelect={onUserSelect}
              fromCarousel={false}
            />
          ))
        : "Fetching users please wait..."}
    </div>
  );
};

export default UserList;
