import Card from "../Ui/Card";

const DataMap = ({ Datos, className }) => {
  return (
    <div className={className}>
      {Datos.map((dato, index) => (
        <div key={index}>
          <Card {...dato} />
        </div>
      ))}
    </div>
  );
};

export default DataMap;
