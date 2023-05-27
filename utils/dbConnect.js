const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://<username>:<password>@cluster0.p11nzlu.mongodb.net/?retryWrites=true&w=majority";
const uri = process.env.ATLAS_URI

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


let dbConnection;
module.exports = {
  connectToServer: async function() {
    try {
      await client.connect();
      dbConnection = client.db("tools")
      console.log("db connected");
    } 
    catch(err){
      console.log(err)
    }
  },

  getDb: function () {
    return dbConnection;
  },
};

