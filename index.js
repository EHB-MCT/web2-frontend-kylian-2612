const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://admin:admin@cluster0.8226wva.mongodb.net/Games?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("Games").collection("Outdoor");
  // perform actions on the collection object
  client.close();
});
