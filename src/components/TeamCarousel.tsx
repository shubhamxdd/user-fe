import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import UserCard from "./UserCard";
const TeamCarousel = ({ teamUsers }: any) => {
  return (
    <Carousel className="w-[400px] grid place-items-start mx-auto">
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
