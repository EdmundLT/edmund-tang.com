import {
    createHttpLink,
    ApolloClient,
    InMemoryCache,
  } from "@apollo/client";
  import { setContext } from "apollo-link-context";
  

  
  const httpLink = createHttpLink({
    uri: "https://graphql.contentful.com/content/v1/spaces/9qeu7i5xdkno"
  });
  
  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer QDRJtbQxaCb2n7RoQu3sdpei4FZDf7oPFzuiZbnIre4`,
      },
    };
  });
  export const client = new ApolloClient({
    // @ts-expect-error testing
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
  
  
  