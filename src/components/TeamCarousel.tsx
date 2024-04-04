import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import UserCard from "./UserCard";
const TeamCarousel = ({ teamUsers }: any) => {
  console.log(teamUsers.map((item) => console.log(item.first_name)));
  return (
    <Carousel>
      <CarouselContent>
        {teamUsers.map((item) => (
          <CarouselItem>
            <UserCard user={item} fromCarousel key={item._id} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default TeamCarousel;
