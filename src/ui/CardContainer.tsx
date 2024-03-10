import { IoIosAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import Card from "./Card";
const CardContainer = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <Card />
        <Link
          to={"/addCard"}
          className="bg-PRIMARY rounded-md border flex justify-center items-center hover:scale-90 hover:bg-MAIN transition-all ease-in-out"
        >
            <IoIosAddCircle className="text-6xl text-MAIN" />
        </Link>
      </div>
    );
}
 
export default CardContainer;