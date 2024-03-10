const CardHeader = () => {
    return (
      <div className="flex justify-between flex-col gap-4 md:flex-row font-inter items-center">
        <h1 className="font-black text-MAIN text-xl">Javascript</h1>
        <ul className="flex justify-between md:justify-normal w-full md:w-fit text-sm md:gap-8 text-MAIN">
          <li>Revealed: 0</li>
          <li>Knew: 0</li>
          <li>Skipped: 0</li>
          <li className="font-bold">Total: 100</li>
        </ul>
      </div>
    );
}
 
export default CardHeader;