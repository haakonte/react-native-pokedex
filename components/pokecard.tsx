import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function PokeCard({ pokedata }: { pokedata: any }) {
  return (
    <>
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
    </>
  );
}

const styles = StyleSheet.create({
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
