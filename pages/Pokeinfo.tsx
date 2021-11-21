import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Review from "../components/review";
import ReviewList from "../components/review-list";
import { connect } from "react-redux";
import { fetchSinglePokemon } from "../services/pokemon_api";
import PokeCard from "../components/pokecard";

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
        <PokeCard pokedata={pokedata} />
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
});
