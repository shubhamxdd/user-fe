import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaUsers } from "react-icons/fa6";
import { Button } from "./ui/button";
import axios from "axios";
import { useEffect, useState } from "react";
import { Team } from "@/types";
import TeamCarousel from "./TeamCarousel";
import { ScrollArea } from "./ui/scroll-area";

const ShowTeams = () => {
  const [teams, setTeams] = useState<Team[] | []>([]);
  const fetchTeams = async () => {
    try {
      const res = await axios.get(
        "https://user-backend-4wri.onrender.com/api/team"
      );
      setTeams(res.data);
      // console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTeams();
  }, []);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex gap-3">
          <FaUsers size={20} />
          Teams
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <div className="text-left">
            <DialogTitle className="text-2xl">Teams: </DialogTitle>
            This is a carousel componet swipe to see more {"->"}
          </div>
          <ScrollArea className="h-[500px]">
            <DialogDescription>
              {teams.length > 0 ? (
                teams.map((team, index) => (
                  <div key={index} className="flex flex-col gap-4">
                    <h3 className="text-xl font-bold text-black text-left">
                      Team {index + 1}
                    </h3>
                    <TeamCarousel teamUsers={team.users} />
                  </div>
                ))
              ) : (
                <p>No teams available</p>
              )}
            </DialogDescription>
          </ScrollArea>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ShowTeams;
