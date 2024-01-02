import express, { Request, Response } from "express";
import { MongoClient, ServerApiVersion } from "mongodb";
import cors from "cors"; // Import the cors middleware
import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const app = express();
const port = 3001;

//npm install jsonwebtoken
//npm i --save-dev @types/jsonwebtoken

//npm i --save-dev @types/bcrypt

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

    const usersCollection = client.db("your_database_name").collection("users");
    const {
      username,
      emailAddress,
      securityPin,
      password,
      guardianship,
      gradeLevel,
    } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
    let newUser;

    if (guardianship) {
      newUser = {
        username,
        emailAddress,
        securityPin,
        password: hashedPassword,
        guardianship,
      };
    } else {
      newUser = {
        username,
        emailAddress,
        securityPin,
        password: hashedPassword,
        gradeLevel,
      };
    }

    const existingUserWithEmail = await usersCollection.findOne({
      emailAddress: newUser.emailAddress,
    });

    const existingUserWithUsername = await usersCollection.findOne({
      username: newUser.username,
    });

    if (existingUserWithEmail) {
      return res.status(400).json({ error: "Email address already exists" });
    }

    if (existingUserWithUsername) {
      return res.status(400).json({ error: "Username already exists" });
    }

    const result = await usersCollection.insertOne(newUser);
    res.json({ message: "Signup successful", insertedId: result.insertedId });
  } catch (error) {
    console.error("Signup failed:", error);
    res.status(500).json({ error: "Signup failed" });
  } finally {
    await closeMongoConnection();
  }
});

app.post("/login", async (req: Request, res: Response) => {
  try {
    await connectToMongo();

    const usersCollection = client.db("your_database_name").collection("users");
    const { username, password } = req.body;

    console.log(
      `Attempting login with username: ${username}, password: ${password}`
    );

    // Find user by username in the database
    const user = await usersCollection.findOne({ username });

    if (!user) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    // Compare the provided password with the stored hashed password
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      // Passwords match, create a JWT
      const token = jwt.sign(
        {
          userId: user._id, // You might include additional user data here
          username: user.username,
        },
        "p73HT5kzmgE3lTSyiDvnLuN6o18Yv", //SECRET KEY
        { expiresIn: "1h" } // Token expiration time
      );

      // Set the token as an HTTP cookie
      res.cookie("token", token, { httpOnly: false, maxAge: 3600000 });
      // Send the JWT as part of the response
      res.json({ message: "Login successful", token });
    } else {
      res.status(401).json({ error: "Invalid username or password" });
    }
  } catch (error) {
    console.error("Login failed:", error);
    res.status(500).json({ error: "Login failed" });
  } finally {
    await closeMongoConnection();
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
