import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { User } from "@/types";
import UserCard from "./UserCard";

interface Props {
  selectedUsers: User[];
}

const ShowSelectedUsers = ({ selectedUsers }: Props) => {
  return (
    <>
      <Dialog>
        <DialogTrigger>Show Selected Users</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {selectedUsers.length === 0
                ? "Add some users to team to see here"
                : "Selected Users"}
            </DialogTitle>
            <DialogDescription>
              {selectedUsers.length === 0 ? (
                "You have not selected any users yet. Click on the plus icon on the user card to add them to your team."
              ) : (
                <>
                  <h1>
                    This is a carousel component! Swipe to see more added users{" "}
                    {"->"}
                  </h1>
                  <Carousel>
                    <CarouselContent>
                      {selectedUsers.map((user) => (
                        <CarouselItem className="w-[20px]">
                          <UserCard
                            user={user}
                            key={user._id}
                            fromCarousel={true}
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </>
              )}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ShowSelectedUsers;
