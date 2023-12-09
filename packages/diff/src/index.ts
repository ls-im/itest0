import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';


const books = [
    {
      title: 'The Awakening',
      author: 'Kate Chopin',
    },
    {
      title: 'City of Glass',
      author: 'Paul Auster',
    },
  ];

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
  type Book {
    title: String
    author: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
  }
`;


const resolvers = {
    Query: {
        books: () => books,
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  
async function  main() {
    const { url } = await startStandaloneServer(server, {
      listen: { port: 4000 },
    });

    return url;
}

main().then((url: string) => {

    console.log(`🚀  Server ready at: ${url}`);
}).catch((err) => {
    console.log(err, ' not able to start the server');
});
  