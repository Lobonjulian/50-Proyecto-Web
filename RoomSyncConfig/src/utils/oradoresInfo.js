import { faker } from "@faker-js/faker";

export const oradores = Array.from({ length: 3 }, () => {
  const name = faker.person.fullName();
  return {
    name,
    icono: `https://i.pravatar.cc/300?u=${Math.random()
      .toString(36)
      .substr(2, 9)}`,
  };
});
