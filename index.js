const { MongoClient } = require('mongodb');

async function main() {
    // Replace with your MongoDB URL if different
    const url = "mongodb://localhost:27017";
    const client = new MongoClient(url);

    try {
        await client.connect();
        console.log("Connected to MongoDB!");
        const db = client.db("testDB");
        const collection = db.collection("users");

        // Insert a document
        await collection.insertOne({ name: "Nina", age: 21 });
        console.log("Document inserted!");

        // Query the document
        const result = await collection.findOne({ name: "Nina" });
        console.log("Query result:", result);
    } catch (err) {
        console.error("Error:", err);
    } finally {
        await client.close();
    }
}

main().catch(console.error);