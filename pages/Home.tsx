import React, { useEffect, useState } from "react";
import { Button, Image, Text, View, ScrollView } from "react-native";
import { fetchPokemon } from "../services/pokemon_api";
import Pokeinfo from "./Pokeinfo";

export default function Home({ navigation }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchPokemon(false, 20, 0).then((response) => {
      setData(response.data.allPokemon);
    });
  }, []);
  if (data == []) {
    return <></>;
  }
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home page boiler plate</Text>
      <ScrollView>
        {data.map((el: any) => (
          <View key={el.id}>
            <Text>
              {el.id}. {el.name}
            </Text>
            <Button
              title="Go to Details"
              onPress={() => {
                navigation.navigate("Pokeinfo", { pokemon: el._id });
              }}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
