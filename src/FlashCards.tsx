import { useState } from "react";
import { BsFillSkipForwardCircleFill } from "react-icons/bs";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { GiSecretBook } from "react-icons/gi";

const FlashCards = () => {
 const [isRevealed, setIsRevealed] = useState(false);

  const handleReveal = () => {
    setIsRevealed(!isRevealed)
  }

  return (
    <section className="p-[2rem] md:p-6 font-roboto flex h-[90dvh] flex-col justify-between">
      <div className="flex justify-between flex-col gap-4 md:flex-row font-inter items-center">
        <h1 className="font-black text-MAIN text-xl">Javascript</h1>
        <ul className="flex justify-between md:justify-normal w-full md:w-fit text-sm md:gap-8 text-MAIN">
          <li>Revealed: 0</li>
          <li>Knew: 0</li>
          <li>Skipped: 0</li>
          <li className="font-bold">Total: 100</li>
        </ul>
      </div>

      <section className="mt-28 mb-12 font-inter self-center  bg-PRIMARY rounded-md p-4 w-1/2 text-center hover:shadow-md hover:scale-105 transition-all ease-in-out">
        <h1 className="text-xl font-black text-MAIN">What is Javascript?</h1>
        {isRevealed &&
          <article>
          <hr className="my-4 border-gray-500" />
          <p className="text-MAIN text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
            enim cum quaerat aliquam, non officiis rem quas necessitatibus quis
            dolorem consequuntur molestiae, odit voluptatibus maxime!
            Repellendus itaque beatae suscipit sint.
          </p>
        </article>}
      </section>

      <aside className="h-fit pb-[2rem] mt-auto w-1/2 self-center flex font-inter justify-between items-center">
        <button className="flex gap-4 items-center bg-PRIMARY p-2 rounded-md text-MAIN font-semibold hover:scale-110 transition-transform ease-in-out">
          <FaArrowCircleLeft />
          Previous
        </button>
        <button onClick={handleReveal} className="flex gap-4 items-center bg-PRIMARY p-2 rounded-md text-MAIN font-semibold hover:scale-110 transition-transform ease-in-out">
          <GiSecretBook /> Reveal Answer
        </button>
        <button className="flex gap-4 items-center bg-PRIMARY p-2 rounded-md text-MAIN font-semibold hover:scale-110 transition-transform ease-in-out">
          <BsFillSkipForwardCircleFill /> Skip
        </button>
        <button className="flex gap-4 items-center bg-PRIMARY p-2 rounded-md text-MAIN font-semibold hover:scale-110 transition-transform ease-in-out">
          Next <FaArrowCircleRight />
        </button>
      </aside>
    </section>
  );
};

export default FlashCards;
