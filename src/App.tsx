import './App.css';
import CardContainer from './ui/CardContainer';

function App() {


  return (
    <div className="p-4 flex flex-col gap-12">
      <section>
        <h1 className="text-2xl font-black font-inter text-MAIN mb-10">
          Your Cards
        </h1>
        <CardContainer />
      </section>
      <hr className='border-gray-500'/>
      <section>
        <h1 className="text-2xl font-black font-inter text-MAIN mb-10">
          Cards
        </h1>
        <CardContainer />
      </section>
    </div>
  );
}

export default App
