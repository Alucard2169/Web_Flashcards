import { Link } from "react-router-dom";

const Card = () => {
    return (
      <Link to={`/card/${1}`}>
        <section className="border rounded-md font-inter bg-PRIMARY p-4 hover:scale-105 hover:bg-NEUTRAL hover:shadow-md transition-all ease-in-out">
          <h1 className="text-xl font-black text-MAIN">Javascript</h1>
          <article className="mt-2 mb-4">
            <p className="mb-2 text-MAIN font-light text-sm">Total Cards 100</p>
            <div className="mt-6 w-full bg-white h-2 rounded-full"></div>
          </article>
         
        </section>
      </Link>
    );
}
 
export default Card;