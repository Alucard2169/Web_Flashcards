const Qcontainer = ({id}:{id:number}) => {
    return (
        <div className="w-full p-4 border border-gray-800 rounded-md">
        <label htmlFor={`question${id}`} className="flex flex-col gap-2">
          <span className="text-md text-MAIN font-light">Question {id}</span>
          <input
            type="text"
            name={`question${id}`}
            className="text-md font-light text-MAIN outline-none border rounded-md p-2 bg-transparent"
            id={`question${id}`}
            required
          />
        </label>

        <label htmlFor={`answer${id}`} className="flex flex-col gap-2 mt-2">
                <span className="text-sm text-MAIN font-light">Answer</span>
          <textarea
            name={`answer${id}`}
            className="text-md font-light text-MAIN outline-none border rounded-md p-2 bg-transparent"
            id={`answer${id}`}
            required
          />
        </label>
      </div>
    );
}
 
export default Qcontainer;