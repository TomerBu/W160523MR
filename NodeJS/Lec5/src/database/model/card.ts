import mongoose from "mongoose";
import { cardSchema } from "../schema/card-schema";

const Card = mongoose.model("Card", cardSchema);

export { Card };
