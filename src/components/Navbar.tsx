import Mobilenav from "./Mobilenav";
import Navlinks from "./Navlinks";

const Navbar = () => {
  return (
    <div className="bg-white px-6 md:px-20 lg:px-32 py-5 flex justify-between items-center">
      <h1 className="text-xl md:text-2xl  font-semibold">User Cards</h1>
      <ul className="md:flex items-center gap-3 md:gap-4 hidden">
        <Navlinks />
      </ul>
      <Mobilenav />
    </div>
  );
};

export default Navbar;
