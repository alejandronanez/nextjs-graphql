import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  gql,
} from "@apollo/client";

function Home({ countries = [] }) {
  return (
    <div>
      <h1>Countries</h1>
      <pre>{JSON.stringify(countries, null, 2)}</pre>
    </div>
  );
}

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/",
  cache: new InMemoryCache({
    addTypename: false,
  }),
});

async function fetchCountries() {
  const { data } = await client.query({
    query: gql`
      {
        countries(filter: { continent: { eq: "EU" } }) {
          name
          currency
        }
      }
    `,
  });

  return { countries: data.countries };
}

export async function getStaticProps() {
  const { countries } = await fetchCountries();
  return {
    props: {
      countries,
    },
  };
}

export default Home;
