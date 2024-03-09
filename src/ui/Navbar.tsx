import { FaUserAstronaut } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed w-full flex bg-MAIN shadow-lg justify-between px-4 py-2 z-20">
      <h1 className="font-inter text-MAIN font-black text-xl">WF</h1>
      <ul className="flex gap-6 items-center font-inter text-MAIN">
        <li className="font-black rounded-md border p-1 text-sm">
          <Link to="/">CARDS</Link>
        </li>
        <li className="p-1 rounded-full bg-white">
          <Link to={`/user/${1}`}>
            <FaUserAstronaut className="text-black text-md" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
