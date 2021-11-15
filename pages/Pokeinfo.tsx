import React, {
  Dispatch,
  isValidElement,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { Text, View } from "react-native";
import { fetchSinglePokemon } from "../services/pokemon_api";

// interface pokemonInterface{
//   id: Number;
//   name: String;
//   type: [String];
//   weaknesses: [String];
// }

export default function Pokeinfo({ route }) {
  const { pokemon } = route.params;
  const [pokedata, setData]: [any, Dispatch<any>] = useState(null);
  useEffect(() => {
    fetchSinglePokemon(pokemon).then((response) => {
      setData(response.data.findSinglePokemon);
    });
  }, []);
  if (pokedata) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Pokeinfo page boilerplate</Text>
        <Text>PokeID: {JSON.stringify(pokedata.id)}</Text>
        <Text>Name: {JSON.stringify(pokedata.name)}</Text>
        <Text>Type: {JSON.stringify(pokedata.type)}</Text>
        <Text>Weakness: {JSON.stringify(pokedata.weaknesses)}</Text>
      </View>
    );
  } else {
    return <></>;
  }
}
