import {faker} from '@faker-js/faker';

let PostP = [1,2,3,4,5,6,7,8,9,10];

PostP = PostP.map(post =>{
    return {
        id: post,
        imagen: faker.image.urlLoremFlickr(),
        titulo: faker.lorem.sentence(),
        autor: faker.person.firstName(),
        estilo:faker.lorem.sentence(),
        precio:faker.commerce.price(),
        anno: faker.date.past({ years: 80 }).toString()
    }
});

export default PostP;