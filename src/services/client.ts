import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: process.env.APP_URL,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          launchesPast: {
            keyArgs: false,
            merge(existing, incoming) {
              return existing ? [...existing, ...incoming] : incoming
            },
          },
        },
      },
    },
  }),
})

export default client
