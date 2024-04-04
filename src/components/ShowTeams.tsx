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

const ShowTeams = () => {
  const [teams, setTeams] = useState<Team[] | []>([]);
  const fetchTeams = async () => {
    try {
      const res = await axios.get("http://192.168.1.10:8000/api/team");
      setTeams(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTeams();
  }, []);

  console.log(
    teams.map((team) => {
      team.users.map((user) => console.log(user.first_name));
    })
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex  gap-3">
          <FaUsers size={20} />
          Teams
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl">Teams: </DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ShowTeams;
