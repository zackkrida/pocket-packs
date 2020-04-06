// This script sets up the database to be used for this example application.
// Look at the code to see what is behind the magic
const faunadb = require("faunadb");
const q = faunadb.query;
const request = require("request");
const fs = require("fs");
const streamToPromise = require("stream-to-promise");
const adminKey = process.env.FAUNADB_ADMIN_KEY;

if (!adminKey) {
  throw Error("Schema import failed: No admin key provided.");
}

// A graphql schema can be imported in override or merge mode: 'https://docs.fauna.com/fauna/current/api/graphql/endpoints#import'
const options = {
  model: "override",
  uri: "https://graphql.fauna.com/import",
  headers: { Authorization: `Bearer ${adminKey}` }
};
const stream = fs.createReadStream("./schema.gql").pipe(request.post(options));

streamToPromise(stream)
  .then(response => {
    const readableResult = response.toString();
    if (readableResult.startsWith("Invalid authorization header")) {
      throw Error("You need to provide a secret, closing. Try again");
    } else if (readableResult.startsWith("Invalid database secret")) {
      throw Error(
        "The secret you have provided is not valid, closing. Try again."
      );
    } else if (readableResult.includes("success")) {
      console.info("Successfully imported schema.");
      process.exit();
    } else {
      console.error(`Import failed: ${readableResult}`);
      process.exit(1);
    }
  })
  .catch(err => {
    console.error(err);
    console.error(`Could not import schema, closing`);
    process.exit(1);
  });
