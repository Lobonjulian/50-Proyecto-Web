import { faker } from "@faker-js/faker";
import {  HomeData,OradoresData } from "./Datos";

const dataMap = HomeData || OradoresData;

export const oradores = Array.from({ length: 3 }, (_, index) => {
  const name = faker.person.fullName();
  const description =
    dataMap[0].oradores[index].description || "Descripción no disponible";
  return {
    name,
    icono: `https://i.pravatar.cc/300?u=${Math.random()
      .toString(36)
      .substr(2, 9)}`,
    description,
  };
});
