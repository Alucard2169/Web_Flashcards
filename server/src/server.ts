import cors from "cors";
import express from "express";
import path from "path";
import { router } from '../router/router';
const app = express();



// Enable CORS
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "../build")));
app.use("/api", router)





const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
