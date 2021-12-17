const express = require('express');
const { MongoClient } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;
require('dotenv').config();
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// middle war
app.use(cors());
app.use(express.json());

// database connection
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.6soco.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
console.log(uri)
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    try {
        await client.connect();
        console.log("database connect success");

        // database and collection
        const database = client.db("JerinsDB");
        const infoCollect = database.collection("info");


    }

    finally {
        //   await client.close();
    }
}
run().catch(console.dir);


// ------------------home-------------------------
app.get('/', (req, res) => {
    res.send('Running Jerins-Parlour server')
})
app.listen(port, () => {
    console.log(`Jerins-parlour listening at http://localhost:${port}`)
})
// ------------------home-------------------------