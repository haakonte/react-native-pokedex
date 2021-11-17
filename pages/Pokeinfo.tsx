import React, {
  Dispatch,
  isValidElement,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { fetchSinglePokemon } from "../services/pokemon_api";

// interface pokemonInterface{
//   id: Number;
//   name: String;
//   type: [String];
//   weaknesses: [String];
// }

export default function Pokeinfo({ route }: any) {
  const { pokemon } = route.params;
  const [pokedata, setData]: [any, Dispatch<any>] = useState(null);
  useEffect(() => {
    fetchSinglePokemon(pokemon).then((response) => {
      setData(response.data.findSinglePokemon);
    });
  }, []);
  if (pokedata) {
    return (
      <View style={styles.info}>
        <Image style={styles.picture} source={{
              uri: pokedata.img
            }}>
        </Image>
        <Text>PokeID: {pokedata.id}</Text>
        <Text>Name: {pokedata.name}</Text>
        <Text>Type: {pokedata.type}</Text>
        <Text>Weakness: {pokedata.weaknesses}</Text>
      </View>
    );
  } else {
    return <></>;
  }
}

const styles = StyleSheet.create({

  info: {
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center",
  },

  picture: {
    width: 150,
    height: 150,
  },
})