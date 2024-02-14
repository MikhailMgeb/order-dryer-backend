const { MongoClient, ObjectId } = require('mongodb');

const url = "mongodb://0.0.0.0:27017/";
const client = new MongoClient(url);

const dbName = 'order-dryer';

let db;

async function main() {
    await client.connect();
    console.log('Connected successfully to server');
    db = client.db(dbName);

    return 'done.';
}

main()
    .then(console.log)
    .catch(console.error)

function getDb() {
    return db;
}

module.exports = { getDb, ObjectId };