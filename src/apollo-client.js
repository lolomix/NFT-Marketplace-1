import {
    ApolloClient,
    InMemoryCache,
  } from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://integral-hare-70.hasura.app/v1/graphql',
    cache: new InMemoryCache(),
    headers: {
        'x-hasura-admin-secret' : 'E8NrFMo4Dl0VQSxmGMmEnWLIOI1C3X05LZh8Bgw085BDTL4qLWg1D1hcM3jHCKsE'
    }
  });


  export default client