import { GraphQLError } from "graphql";
import { CharacterModel } from "../db/Character.ts";
import { getInformationFromApi } from "../lib/apifunction.ts";
import { Character } from "../types.ts";

export const Query = {
  character: async (_: unknown, args: { id: number }): Promise<Character> => {
    try {
      const llamada = await getInformationFromApi(args.id);
      if (!llamada) {
        throw new GraphQLError("no se ha hecho la llamada");
      }
      const character = await CharacterModel.find(args.id.toString);
      return character;
    } catch (err) {
      console.log(err);
      throw new GraphQLError(err);
    }
  },

  charactersByIds: async (
    _: unknown,
    args: { id: number },
  ): Promise<[Character]> => {
    try {
      const llamada = await getInformationFromApi(args.id);
      if (!llamada) {
        throw new GraphQLError("no se ha hecho la llamada");
      }
      const character = await CharacterModel.find(args.id.toString);
      return character;
    } catch (err) {
      console.log(err);
      throw new GraphQLError(err);
    }
  },
};
