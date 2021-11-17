import axios from "axios";

const URI = "http://it2810-26.idi.ntnu.no:4000/";

export type Pokemon = {
  _id: string;
  name: string;
  img: string;
  type: [string];
};

const ALL_POKEMON = (sorted: boolean, limit: number, offset: number) =>
  `query Query {
    allPokemon(sorted: ${sorted}, limit: ${limit}, offset: ${offset}) {
        _id
        id
        name
        img
        type
    }
}`;

const FILTER_POKEMON_ON_TYPE = () =>
  `query Query($type: [String], $limit: Int, $offset: Int, $sorted: Boolean) {
    findOnType(type: $type, limit: $limit, offset: $offset, sorted: $sorted) {
        _id
        id
        name
        img
        type
    }
}`;

const SEARCH_FOR_POKEMON = () =>
  `query Query($name: String!, $limit: Int, $offset: Int, $sorted: Boolean) {
    searchForPokemon(name: $name, limit: $limit, offset: $offset, sorted: $sorted) {
        _id
      id
      name
      img
      type
    }
  }`;

export const searchForPokemon = async (
  name: string,
  limit: number,
  offset: number,
  sorted: boolean
): Promise<any> => {
  const response: any = await fetch(URI, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      query: SEARCH_FOR_POKEMON(),
      variables: {
        name,
        limit,
        offset,
        sorted,
      },
    }),
  });
  return response.json();
};

const SEARCH_FOR_POKEMON_COUNT = () =>
  `query Query($name: String!, $limit: Int, $offset: Int) {
    searchForPokemonCount(name: $name, limit: $limit, offset: $offset)
  }`;

export const searchForPokemonCount = async (
  name: String,
  limit: Number,
  offset: Number
): Promise<any> => {
  const response: any = await fetch(URI, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      query: SEARCH_FOR_POKEMON_COUNT(),
      variables: {
        name,
        limit,
        offset,
      },
    }),
  });
  return response.json();
};

export const filterOnType = async (
  type: string[],
  limit: Number,
  offset: Number,
  sorted: Boolean
): Promise<any> => {
  const response: any = await fetch(URI, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      query: FILTER_POKEMON_ON_TYPE(),
      variables: {
        type,
        limit,
        offset,
        sorted,
      },
    }),
  });
  return response.json();
};

const FILTER_POKEMON_ON_TYPE_COUNT = () =>
  `query Query($type: [String], $limit: Int, $offset: Int, $sorted: Boolean) {
    findOnTypeCount(type: $type, limit: $limit, offset: $offset, sorted: $sorted)
}`;

const COUNT_POKEMON = () =>
  `query Query{
    countPokemon
}`;

export const filterOnTypeCount = async (
  type: string[],
  limit: Number,
  offset: Number,
  sorted: Boolean
): Promise<any> => {
  const response: any = await fetch(URI, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      query: FILTER_POKEMON_ON_TYPE_COUNT(),
      variables: {
        type,
        limit,
        offset,
        sorted,
      },
    }),
  });
  return response.json();
};

export const fetchPokemon = async (
  sorted: boolean,
  limit: number,
  offset: number
): Promise<any> => {
  const response: any = await axios.post(
    URI,
    { query: ALL_POKEMON(sorted, limit, offset) },
    {
      headers: { "Content-type": "application/json" },
    }
  );
  return response.data;
};

export const countPokemon = async (): Promise<any> => {
  const response: any = await axios.post(
    URI,
    { query: COUNT_POKEMON() },
    {
      headers: { "Content-type": "application/json" },
    }
  );
  return response.data;
};

const FETCH_SINGLE_POKEMON = () =>
  `query Query($id: ID!) {
    findSinglePokemon(id: $id) {
        _id
        id
        name
        img
        type
        weaknesses
        height
        weight
    }
}`;

const ADD_REVIEW = () =>
  `mutation Mutation($pokemonReviewed: String!, $score: Int!, $comment: String!, $name: String!) {
    addReview(pokemonReviewed: $pokemonReviewed, score: $score, comment: $comment, name: $name) {
        _id
        score
        comment
        name 
    }
}`;

const FIND_REVIEWS_OF_POKEMON = () =>
  `query Query($id: ID!) {
    findReviewsOfPokemon(id: $id) {
      name
      score
      comment
    }
  }
`;

export const fetchReviewsOfPokemon = async (id: string) => {
  const response: any = await fetch(URI, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      query: FIND_REVIEWS_OF_POKEMON(),
      variables: { id },
    }),
  });
  return response.json();
};

export const fetchSinglePokemon = async (id: string) => {
  const response: any = await fetch(URI, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      query: FETCH_SINGLE_POKEMON(),
      variables: { id },
    }),
  });
  return response.json();
};

export const addReview = async (
  pokemonReviewed: string,
  score: Number,
  comment: string,
  name: string
): Promise<any> => {
  const response: any = await fetch(URI, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      query: ADD_REVIEW(),
      variables: {
        pokemonReviewed,
        score,
        comment,
        name,
      },
    }),
  });
  return response.json();
};
