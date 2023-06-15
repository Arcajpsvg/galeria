import {faker} from '@faker-js/faker';

let places = [1,2,3,4,5,6,7,8,9,10];

places = places.map(post => {
    return{
        id: post,
        name: faker.lorem.sentence(),
        description: faker.lorem.sentences(10),
        constructionDate: faker.date.past({ years: 10 }).toString(), 
        author: faker.person.firstName(),
        location: faker.location.country()
    }
})


export default places;