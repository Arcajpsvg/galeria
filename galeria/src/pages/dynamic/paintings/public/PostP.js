import {faker} from '@faker-js/faker';

let PostP = [1,2,3,4,5,6,7,8,9,10];

posts = posts.map(post =>{
    return {
        id: post,
        image: faker.image.url(),
        title: faker.lorem.sentence(),
        author: faker.person.firstName(),
        image: faker.image.url(),
        style:faker.lorem.sentence()
    }
});

export default PostP;