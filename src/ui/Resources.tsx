import { Link } from "react-router-dom";

const Resources = () => {
    return (
      <aside className="mt-2 absolute bottom-5 left-5 bg-PRIMARY p-2 rounded-md">
        <h2 className="text-MAIN font-semibold text-lg">Resources</h2>
        <ul className="mb-4">
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
            <a
              href="https://javascript.info/"
              className="text-blue-500 text-sm hover:text-red-500"
              aria-label="resource link"
            >
              Javascript.info
            </a>
          </li>
        </ul>
        <Link
          to={`/questionList/1`}
          aria-label="open question list"
          className="bg-MAIN p-1 rounded-md text-sm text-MAIN hover:scale-110 transition-transform ease-in-out"
        >
          Question list
        </Link>
      </aside>
    );
}
 
export default Resources;