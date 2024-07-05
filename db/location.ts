import mongoose from "mongoose";
import { Character, location } from "../types.ts";
const Schema = mongoose.Schema;

const LocationSchema = new Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  type: { type: String, required: true },
  dimension: { type: String, required: true },
  residents: { type: Array, required: true },
  url: { type: String, required: true },
  created: { type: String, required: true },
});

export type LocationModelType =
  & mongoose.Document
  & Omit<location, "id">
  & {
    name: string;
    url: string;
  };

export const LocationModel = mongoose.model<LocationModelType>(
  "Location",
  LocationSchema,
);
