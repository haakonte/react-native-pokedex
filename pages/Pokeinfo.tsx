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
      <View style={styles.info}>
        <Image style={styles.picture} source={{
              uri: pokedata.img
            }}>
        </Image>
        <Text style= {styles.text}>
              PokeID:         {pokedata.id} {"\n"}
              Name:           {pokedata.name} {"\n"}
              Type:             {pokedata.type} {"\n"}
              Weakness:   {pokedata.weaknesses}</Text>
      </View>
    );
  } else {
    return <></>;
  }
}

const styles = StyleSheet.create({

  info: {
    backgroundColor: '#282c34',
    display: "flex",
    flexDirection: "column",
    alignItems: "center", 
    flex: 1, 
  },

  picture: {
    width: 150,
    height: 150,
    margin: 12,
  },

  text: {
    color: 'white',
    fontSize: 16,
    lineHeight: 24,
  },
})