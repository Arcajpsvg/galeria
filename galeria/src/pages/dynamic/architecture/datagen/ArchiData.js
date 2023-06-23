import {faker} from '@faker-js/faker';

let places = [1,2,3,4,5,6,7,8,9,10];
let thisYear = new Date().getFullYear();
console.log(thisYear);
places = places.map(post => {
    return{
        id: post,
        name: faker.lorem.sentence(),
        description: faker.lorem.sentences(10),
        constructionYear: faker.number.int({min: -500, max: thisYear}),
        author: faker.person.firstName(),
        location: faker.location.country()
    }
})


export default places;