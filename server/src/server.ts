import cors from "cors";
import express, { Request, Response } from "express";
import path from "path";
const app = express();

// Enable CORS
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "../build")));

// Define your routes
app.get("/", (req, res) => {
  res.send("Hello, TypeScript!");
});

app.post("/api/addQuestion", (req: Request, res: Response) => {
  try {
    const { tech, questionList, resources } = req.body;
    res.json({tech,questionList,resources})    
  } catch (error) {
    console.error("Error processing request:", error);
    res.status(500).send("Internal Server Error");
  }
});




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
