export type Character = {
  id: Number;
  name: String;
  status: String;
  species: String;
  type: String;
  gender: String;
  origin: origin;
  location: Location;
  image: String;
  episode: Array<String>;
  url: String;
  created: String;
};

export type location = {
  id: Number;
  name: String;
  type: String;
  dimension: String;
  residents: Array<Character>;
  url: String;
  created: String;
};

export type origin = {
  name: String;
  url: String;
};
