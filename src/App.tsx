import Routes from '@/routes'
import { ApolloProvider } from '@apollo/client'
import { client } from '@/services'

const App = () => (
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>
)

export default App
