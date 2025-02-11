import {ApolloClient} from "@apollo/client/core";
import {InMemoryCache} from "@apollo/experimental-nextjs-app-support";

export const client = new ApolloClient({
	cache: new InMemoryCache(),
	uri: 'https://publy-fullstack-example.fly.dev/graphql',
});


