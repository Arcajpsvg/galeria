import { faker } from "@faker-js/faker";

let events = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

events = events.map((ev) => {
  return {
    id: ev,
    titulo: faker.lorem.sentence(),
    descripcion: faker.lorem.sentences(10),
    fecha: faker.date.between({
      from: "2020-01-01T00:00:00.000Z",
      to: "2030-01-01T00:00:00.000Z",
    }),
    aforoInvitados: faker.number.int({ min: 20, max: 500 }),
    precio: faker.datatype.float({ max: 100 }),
    imagen: faker.image.url({ width: 300, height: 220 }),
    eventoFormal: "Formal",
    aptaMenores: faker.datatype.boolean({ probability: 0.5 }),
  };
});

export default events;
