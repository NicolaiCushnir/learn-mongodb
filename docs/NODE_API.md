
### Node.js REST API with MongoDB. 

* CRUD exemple: 

```js
Example of code REST API:
const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient, ObjectId } = require('mongodb');

const app = express();
const port = 3000;
const mongoURI = 'mongodb://localhost:27017';
const dbName = 'mydatabase';
const collectionName = 'mycollection';

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
MongoClient.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) {
        console.error('Failed to connect to MongoDB:', err);
        return;
    }

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Routes
    app.get('/api/items', async (req, res) => {
        const items = await collection.find({}).toArray();
        res.json(items);
    });

    app.get('/api/items/:id', async (req, res) => {
        const id = req.params.id;
        const item = await collection.findOne({ _id: ObjectId(id) });
        res.json(item);
    });

    app.post('/api/items', async (req, res) => {
        const newItem = req.body;
        const result = await collection.insertOne(newItem);
        res.json(result.ops[0]);
    });

    app.put('/api/items/:id', async (req, res) => {
        const id = req.params.id;
        const updatedItem = req.body;
        await collection.updateOne({ _id: ObjectId(id) }, { $set: updatedItem });
        res.json({ message: 'Item updated successfully' });
    });

    app.delete('/api/items/:id', async (req, res) => {
        const id = req.params.id;
        await collection.deleteOne({ _id: ObjectId(id) });
        res.json({ message: 'Item deleted successfully' });
    });

    // Start the server
    app.listen(port, () => {
        console.log("Server is running on port: " + port);
    });
});
```