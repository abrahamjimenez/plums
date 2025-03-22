import Card from "@/components/Card";

const CardContainer = () => {
  return (
    <div className="grid grid-cols-2 gap-3 pr-16 pl-16">
      <Card image="/html.png" />
      <Card image="/css.png" />
      <Card image="/css.png" />
      <Card image="/css.png" />
    </div>
  );
};

export default CardContainer;
