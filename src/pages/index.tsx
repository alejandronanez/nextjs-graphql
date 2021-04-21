import React from "react";

function Home({ countries }) {
  return (
    <div>
      <h1>Countries</h1>
      <pre>{JSON.stringify(countries, null, 2)}</pre>
    </div>
  );
}

export default Home;
