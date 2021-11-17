import React, {
  Dispatch,
  isValidElement,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Review from "../components/review";
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
        <Image
          style={styles.picture}
          source={{
            uri: pokedata.img,
          }}
        ></Image>
        <View style={styles.wrapper}>
          <Text style={styles.text}>
            PokeID:{"\n"}
            Name:{"\n"}
            Type:{"\n"}
            Weaknesses:
          </Text>
          <Text style={styles.textdata}>
            {pokedata.id} {"\n"}
            {pokedata.name} {"\n"}
            {pokedata.type.join(", ")} {"\n"}
            {pokedata.weaknesses.join(", ")}
          </Text>
        </View>
        <Review id={pokemon} />
      </View>
    );
  } else {
    return <></>;
  }
}

const styles = StyleSheet.create({
  info: {
    backgroundColor: "#282c34",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
  },

  picture: {
    width: 150,
    height: 150,
    margin: 10,
  },

  wrapper: {
    maxWidth: "70%",
    flexWrap: "wrap",
    flexDirection: "row",
  },

  text: {
    flex: 1,
    position: "relative",
    right: -20,
    color: "white",
    fontSize: 16,
    lineHeight: 24,
  },

  textdata: {
    flex: 1,
    color: "white",
    fontSize: 16,
    lineHeight: 24,
  },
});
