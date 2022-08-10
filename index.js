const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = "mongodb+srv://admin:admin@cluster0.8226wva.mongodb.net/Games?retryWrites=true&w=majority";
const client = new MongoClient(url);
 
 // The database to use
 const dbName = "Games";
                      
 async function run() {
    try {
         await client.connect();
         console.log("Connected correctly to server");
         const db = client.db(dbName);

         // Use the collection "Outdoor"
         const col = db.collection("Outdoor");

         // Construct a document                                                                                                                                                              
         let GameDocument = {
          Name:"De vloer is lava",
          Categorie:"Tactiek",
          Plaats:"Buiten",
          Omschrijving:"Dit is een variant van tikkertje, hierbij mogen de spelers de grond niet permanent raken maar bijvoorbeeld telkens maar 10seconden dit geeft de tikker een grotere kans om te winnen."
         }

         // Insert a single document, wait for promise so we can read it back
         const p = await col.insertOne(GameDocument);
         // Find one document
         const myDoc = await col.findOne();
         // Print to the console
         console.log(myDoc);

        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
}

run().catch(console.dir);

