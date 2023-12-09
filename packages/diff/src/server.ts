import { startStandaloneServer } from '@apollo/server/standalone';
import { server } from './index';

export  async function  main() {

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
