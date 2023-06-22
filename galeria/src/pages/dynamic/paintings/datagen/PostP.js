import {faker} from '@faker-js/faker';

let PostP = [1,2,3,4,5,6,7,8,9,10];

PostP = PostP.map(post =>{
    return {
        id: post,
        image: faker.image.urlLoremFlickr(),
        title: faker.lorem.sentence(),
        author: faker.person.firstName(),
        style:faker.lorem.sentence(),
        price:faker.commerce.price(),
        year: faker.date.past({ years: 80 }).toString()
    }
});

export default PostP;