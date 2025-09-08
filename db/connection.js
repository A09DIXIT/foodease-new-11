import { MongoClient } from "mongodb";

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

async function connectDB() {
  try {
    await client.connect();
    console.log("✅ Database connected!");
    const db = client.db("mydb"); // database name
    return db;
  } catch (err) {
    console.error("❌ DB connection failed:", err);
  }
}

connectDB();
