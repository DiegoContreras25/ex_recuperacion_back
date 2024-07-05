import { Character } from "../types.ts";

export const getInformationFromApi = async (id: number): Promise<Character> => {
  const url = "https://rickandmortyapi.com/api/character/" + id;

  const data = await fetch(url, {
    method: "GET",
  });
  if (data.status !== 200) {
    console.error("error: ", data.status, data.statusText);
    throw new Error("error");
  }

  const response = await data.json();
  return response;
};
