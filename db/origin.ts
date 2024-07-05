import mongoose from "mongoose";
import { Character, origin } from "../types.ts";
const Schema = mongoose.Schema;

const originSchema = new Schema({
  name: { type: String, required: true },
  url: { type: String, required: true },
});

export type originModelType =
  & mongoose.Document
  & Omit<origin, "id">
  & {
    name: string;
    url: string;
  };

export const originModel = mongoose.model<originModelType>(
  "origin",
  originSchema,
);
