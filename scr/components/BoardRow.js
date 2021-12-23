import Card from "./Card";

const BoardRow = ({ rowCardsId }) => {
  return (
    <div className="row row-cols-4 justify-content-center border border-3 m-1">
      {rowCardsId.map((id) => {
        return <Card id={id} key={id} />;
      })}
    </div>
  );
};

export default BoardRow;
