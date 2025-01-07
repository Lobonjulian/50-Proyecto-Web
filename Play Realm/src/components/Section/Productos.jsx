import Section from "./Section";

const Producto = [{
  title: "PlayStation 5",
  description: "Consola de ultima generación",
  price: 499.99
},{
title: "Xbox Serie X",
description: "La consola mas potente de Microsoft",
price: 499.99
},
{
  title: "Nintendo Switch OLED",
  description: "La mejor experiencia portatil",
  price: 349.99
},
{
  title: "Auriculares Gaming Pro",
  description: "Sonido Inmerso para gaming",
  price: 129.99
}
]

const Productos = () => {
  return <Section title={"Productos Destacados"} card={Producto}> </Section>;
};

export default Productos;
