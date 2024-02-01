import express from "express";
import dotenv from "dotenv";
import { MongoClient, ServerApiVersion } from "mongodb";
import cors from "cors";
dotenv.config();
const app = express();
app.use(cors());
const client = new MongoClient(process.env.DATABASE_URL, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
const ConnectDB = async () => {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Connected to MongoDB");
  } finally {
    await client.close();
  }
};
ConnectDB().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.listen(process.env.PORT || 8001, () => {
  console.log(`Server is running on port ${process.env.PORT || 8001}`);
});
