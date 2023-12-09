import { server, Book } from 'diffz'

const book: Book= {
    title: 'Cooking book',
    author: 'The poet',
    __typename: 'Book'
}
console.log(`Hello from SUM dev ${Date.now().toString()}`);
console.log(JSON.stringify(server ), book);