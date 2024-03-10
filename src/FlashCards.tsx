
import CardHeader from "./ui/CardHeader";
import CardNavigator from "./ui/CardNavigator";
import Qcard from "./ui/Qcard";
import Resources from "./ui/Resources";

const FlashCards = () => {


  return (
    <section className="relative p-[2rem] md:p-6 font-roboto flex h-[90dvh] flex-col justify-between">
      <CardHeader />
      <Qcard />
      <CardNavigator />
     <Resources/>
    </section>
  );
};

export default FlashCards;
