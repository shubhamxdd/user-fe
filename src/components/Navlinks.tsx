import { Button } from "./ui/button";
import { CiHome } from "react-icons/ci";
import { MdAlternateEmail } from "react-icons/md";

const Navlinks = () => {
  const navLinks = [
    { label: "Home", path: "/", icon: <CiHome size={20} /> },
    { label: "About", path: "/", icon: "A" },
    { label: "Contact", path: "/", icon: <MdAlternateEmail size={20} /> },
  ];

  return (
    <>
      {navLinks.map(({ label, path, icon }) => (
        <li key={label}>
          <Button variant={"ghost"} className="text-[16px] gap-1">
            {icon} {label}
          </Button>
        </li>
      ))}
    </>
  );
};

export default Navlinks;
