import { BsFillSkipForwardCircleFill } from "react-icons/bs";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { GiSecretBook } from "react-icons/gi";

const CardNavigator = () => {
  return (
    <aside className="h-fit pb-[2rem] mt-auto w-1/2 self-center flex font-inter justify-between items-center">
      <button className="flex gap-4 items-center bg-PRIMARY p-2 rounded-md text-MAIN font-semibold hover:scale-110 transition-transform ease-in-out">
        <FaArrowCircleLeft />
        Previous
      </button>
      <button
        className="flex gap-4 items-center bg-PRIMARY p-2 rounded-md text-MAIN font-semibold hover:scale-110 transition-transform ease-in-out"
      >
        <GiSecretBook /> Reveal Answer
      </button>
      <button className="flex gap-4 items-center bg-PRIMARY p-2 rounded-md text-MAIN font-semibold hover:scale-110 transition-transform ease-in-out">
        <BsFillSkipForwardCircleFill /> Skip
      </button>
      <button className="flex gap-4 items-center bg-PRIMARY p-2 rounded-md text-MAIN font-semibold hover:scale-110 transition-transform ease-in-out">
        Next <FaArrowCircleRight />
      </button>
    </aside>
  );
};

export default CardNavigator;
