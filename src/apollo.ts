import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-boost';
import { createHttpLink } from 'apollo-link-http';
import { Platform } from 'react-native';

const host = Platform.OS === 'ios' ? 'http://localhost:4000' : 'http://10.0.2.2:4000';

const httpLink = createHttpLink({
  uri: host,
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
