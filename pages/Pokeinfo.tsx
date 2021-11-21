import React, {
  Dispatch,
  isValidElement,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Review from "../components/review";
import ReviewList from "../components/review-list";
import { connect } from "react-redux";
import { fetchSinglePokemon } from "../services/pokemon_api";

// interface pokemonInterface{
//   id: Number;
//   name: String;
//   type: [String];
//   weaknesses: [String];
// }

const mapStateToProps = (state: { name: any }) => {
  const { name } = state;
  return { name };
};

export default function Pokeinfo({ route }: { route: any }) {
  connect(mapStateToProps)(Pokeinfo);
  const { pokemon } = route.params;
  const [pokedata, setData]: [any, Dispatch<any>] = useState(null);
  const [refresh, doRefresh]: [boolean, Dispatch<SetStateAction<boolean>>] =
    useState<boolean>(false);
  useEffect(() => {
    fetchSinglePokemon(pokemon).then((response) => {
      setData(response.data.findSinglePokemon);
    });
  }, [refresh]);
  if (pokedata) {
    return (
      <ScrollView
        style={styles.info}
        contentContainerStyle={{ alignItems: "center" }}
      >
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
        <Review id={pokemon} refresh={refresh} doRefresh={doRefresh} />
        <ReviewList id={pokemon} refresh={refresh} />
      </ScrollView>
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
