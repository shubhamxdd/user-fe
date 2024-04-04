import { Button } from "./ui/button";
import { CiHome } from "react-icons/ci";
import { MdAlternateEmail } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import CartModal from "./CartModal";
import ShowTeams from "./ShowTeams";

const Navlinks = () => {
  const navLinks = [
    { label: "Home", path: "/", icon: <CiHome size={20} /> },
    { label: "About", path: "/", icon: "A" },
    { label: "Contact", path: "/", icon: <MdAlternateEmail size={20} /> },
    { label: "Cart", path: "/", icon: <FaShoppingCart size={20} /> },
    { label: "Teams", path: "/" },
  ];

  return (
    <>
      {navLinks.map(({ label, path, icon }) => (
        <li key={label}>
          <Button variant={"ghost"} className="text-[16px] gap-1">
            {label === "Cart" ? (
              <CartModal icon={icon} />
            ) : label === "Teams" ? (
              <ShowTeams />
            ) : (
              <>
                {icon} {label}
              </>
            )}
          </Button>
        </li>
      ))}
    </>
  );
};

export default Navlinks;
