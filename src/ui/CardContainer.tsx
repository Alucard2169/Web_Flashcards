import Card from "./Card";

const CardContainer = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <Card />
        <Card />
        <Card />
      </div>
    );
}
 
export default CardContainer;