import express from 'express';
import { addCards } from '../controllers/controllers';
const router = express.Router();

router.post("/addCard", addCards);


export { router };
