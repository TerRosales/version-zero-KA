import express, { Request, Response } from "express";
import { MongoClient, ServerApiVersion } from "mongodb";
import cors from "cors"; // Import the cors middleware

const app = express();
const port = 3001;

app.use(cors()); // Enable CORS for all routes

app.use(express.json()); // Middleware to parse JSON requests

const mongoUri =
  "mongodb+srv://tjrosales1234:tjrosales1234@kidadult.aleh9lu.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(mongoUri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function connectToMongo() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

async function closeMongoConnection() {
  try {
    await client.close();
    console.log("MongoDB connection closed.");
  } catch (error) {
    console.error("Error closing MongoDB connection:", error);
  }
}

app.post("/signup", async (req: Request, res: Response) => {
  try {
    await connectToMongo();

    // Assuming you have a 'users' collection
    const usersCollection = client.db("your_database_name").collection("users");
    const newUser = req.body; // Assuming the request body contains user data

    // Add additional logic for password hashing, validation, etc.
    // Example: newUser.password = hashPassword(newUser.password);

    const result = await usersCollection.insertOne(newUser);
    res.json({ message: "Signup successful", insertedId: result.insertedId });
  } catch (error) {
    console.error("Signup failed:", error);
    res.status(500).json({ error: "Signup failed" });
  } finally {
    await closeMongoConnection();
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
