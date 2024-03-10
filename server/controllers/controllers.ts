import { Request, Response } from "express";
import { addCardProps } from "../types";


const addCards = async (req: Request, res: Response) => {
try {
  const { tech, questionList, resources }: addCardProps = req.body;
  res.json({ tech, questionList, resources });
} catch (error) {
  console.error("Error processing request:", error);
  res.status(500).send("Internal Server Error");
}
}


export { addCards };
