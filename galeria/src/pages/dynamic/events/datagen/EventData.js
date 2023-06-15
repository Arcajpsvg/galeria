import { faker } from "@faker-js/faker";

let events = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

events = events.map((ev) => {
  return {
    id: ev,
    titulo: faker.lorem.sentence(),
    descripcion: faker.lorem.sentences(10),
    fecha: faker.date.anytime(),
    aforoInvitados: faker.number.int,
    precio: faker.number.float,
  };
});

export default events;
