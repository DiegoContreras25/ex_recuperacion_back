import mongoose from "mongoose";
import { Character } from "../types.ts";
const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  status: { type: String, required: true },
  species: { type: String, required: true },
  type: { type: String, required: true },
  gender: { type: String, required: true },
  //origin: { type: origin, required: true },
  //location: { type: location!, required: true },
  image: { type: String, required: true },
  episode: { type: Array, required: true },
  url: { type: String, required: true },
  created: { type: String, required: true },
});

export type CharacterModelType =
  & mongoose.Document
  & Omit<Character, "id">
  & {
    id: Number;
    name: String;
    status: String;
    species: String;
    type: String;
    gender: String;
    //origin: origin;
    //location: location;
    image: String;
    episode: Array<String>;
    url: String;
    created: String;
  };

export const CharacterModel = mongoose.model<CharacterModelType>(
  "Character",
  CharacterSchema,
);
