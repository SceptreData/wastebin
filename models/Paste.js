import mongoose from "mongoose";
import { nanoid } from "nanoid/non-secure";

/* PetSchema will correspond to a collection in your MongoDB database. */
const PasteSchema = new mongoose.Schema({
  _id: { type: String, default: nanoid(6) },
  body: String,
  language: String,
  views: Number,
  date: { type: Date, default: Date.now },
});

export default mongoose.models.Paste || mongoose.model("Paste", PasteSchema);
