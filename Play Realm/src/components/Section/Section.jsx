import Card from "../Card";

const Section = ({ title, card }) => {
  return (
    <section className="section">
      <h2>{title}</h2>
      <div className="section__card">
        {card.map((item) => {
          return <Card key={item.title} {...item} />;
        })}
      </div>
    </section>
  );
};

export default Section;
