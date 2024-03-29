import { FormEvent, ReactNode, useState } from "react";
import Qcontainer from "./ui/QContainer";
import { handleSubmit } from "./utils/addForumUtils";



const AddForum = () => {

// keeps dynamically added question component
  const [questions, setQuestions] = useState<ReactNode[]>([]); 
  
// keeps track of question component id
  const [idCounter, setIdCounter] = useState<number>(0);

  const handleQuestionAdd = () => {
    const newId = idCounter + 1;
    setQuestions((prev) => [...prev, <Qcontainer key={newId} id={newId} />]);
    setIdCounter(newId);
  };
  


  const handleForm = async (e: FormEvent<HTMLFormElement>) => {
    const {data,error} = await handleSubmit(e, questions)
    console.log(data)
  }

    return (
      <section className="p-6 font-inter">
        <h1 className="text-2xl font-black text-MAIN">Add Tech Card</h1>
        <hr className="my-4 border-gray-700" />
        <form
          onSubmit={(e) => handleForm(e)}
          className="w-[90%] md:w-2/3 mx-auto flex flex-col gap-4 items-center"
        >
          <label htmlFor="tech" className="flex flex-col gap-2 w-full">
            <span className="text-md sm:text-lg text-MAIN font-light">
              Tech
            </span>
            <input
              type="text"
              id="tech"
              name="tech"
              placeholder="eg. Javascript"
              className="text-sm sm:text-md font-light text-MAIN outline-none border rounded-md p-2 bg-transparent"
              required
            />
          </label>
          <label htmlFor="resources" className="flex flex-col gap-2 w-full">
            <span className="text-md md:text-lg text-MAIN font-light">
              Provide Some Resources
            </span>
            <textarea
              className="text-sm md:text-md font-light text-MAIN outline-none border rounded-md p-2 bg-transparent"
              name="resources"
              id="resources"
              placeholder="format: title-link, eg: MDN Docs-https://developer.mozilla.org/en-US/"
              required
            ></textarea>
          </label>

          {questions.map((question) => question)}

          <div className="flex flex-col w-full items-center gap-2">
            <button
              className="w-[90%] p-2 rounded-md bg-PRIMARY text-MAIN"
              type="button"
              onClick={handleQuestionAdd}
            >
              Add Question
            </button>
            <span className="text-MAIN">or</span>
            <label
              htmlFor="file"
              className="w-[90%] p-2 rounded-md bg-PRIMARY text-MAIN text-center cursor-pointer"
            >
              <span>Add Questions using JSON file</span>
              <input type="file" className="hidden" id="file" />
            </label>
          </div>

          <input
            type="submit"
            value="SUBMIT"
            className="mt-4 bg-PRIMARY w-full rounded-md text-MAIN text-xl p-1 cursor-pointer font-bold"
          />
        </form>
        <aside className="fixed text-md text-MAIN bottom-10 left-2">
          <span>Total Questions: {questions.length}</span>
        </aside>
      </section>
    );
}
 
export default AddForum;