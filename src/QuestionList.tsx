const QuestionList = () => {
    return (
      <section className="p-6 font-inter">
        <h1 className="font-black text-MAIN text-xl">Javascript</h1>
        <ol className="mt-6 ml-6 flex flex-col gap-4 max-h-[70vh] overflow-scroll scroll-smooth">
          <li className="text-MAIN text-md">
            What is Javascript?
          </li>
          <li className="text-MAIN text-md">
            Java is similar to Javascript?
          </li>
         
            </ol>
            <p className="absolute bottom-5 text-MAIN">Total Questions: 2</p>
      </section>
    );
}
 
export default QuestionList;