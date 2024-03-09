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
          {/* <aside className="mt-2">
            <h2 className="text-MAIN font-semibold">Resources</h2>
            <ul>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/javascript"
                                aria-label="resource link"
                                className="text-blue-500 text-sm hover:text-red-500"
                >
                  MDN Docs
                </a>
              </li>
              <li>
                <a href="https://javascript.info/" aria-label="resource link">Javascript.info</a>
              </li>
            </ul>
          </aside> */}
        </section>
      </Link>
    );
}
 
export default Card;