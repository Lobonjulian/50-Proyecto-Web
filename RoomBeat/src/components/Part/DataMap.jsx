import Card from "../Ui/Card";

const DataMap = ({ Datos, className, classCard }) => {
  return (
    <div className={className}>
      {Datos.map((dato, index) => (
        <div key={index}>
          <Card className={classCard} {...dato} />
        </div>
      ))}
    </div>
  );
};

export default DataMap;
