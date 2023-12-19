import { ICard } from "../../@types/card";
import { Schema } from "mongoose";
import { addressSchema } from "./address-schema";
import { imageSchema } from "./image-schema";

const cardSchema = new Schema<ICard>({
  title: { type: String, required: true},
  subtitle: { type: String, required: true },
  description: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  web: { type: String, required: true },
  address: { type: addressSchema, required: true },
  image: { type: imageSchema },
  userId: { type: String, required: true },
  bizNumber: {
    type: Number,
    required: false,
    //we will fill this field in the card-service
    default: () => Math.round(Math.random() * 1_000_000),
    unique: true,
  },
  createdAt: {
    type: Date,
    required: false,
    default: new Date(),
  },
  likes: [
    {
      type: String,
    },
  ],
});

export { cardSchema };
