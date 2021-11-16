import React, { useEffect, useState } from "react";
import { Button, Image, Text, View, ScrollView, FlatList } from "react-native";
import { fetchPokemon } from "../services/pokemon_api";
import Pokeinfo from "./Pokeinfo";

export default function Home({ navigation }) {
  const [data, setData]: [any, React.Dispatch<React.SetStateAction<any>>] =
    useState([]);
  const [offset, setOffset] = useState(1);

  const handleLoadMore = async () => {
    await setOffset(offset + 1);
    fetchPokemon(false, 20, 20 * offset).then((response) => {
      setData([...data, ...response.data.allPokemon]);
    });
  };

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
      <FlatList
        data={data}
        renderItem={({ item }: any) => (
          <View key={item.id}>
            <Text>
              {item.id}. {item.name}
            </Text>
            <Button
              title="Go to Details"
              onPress={() => {
                navigation.navigate("Pokeinfo", { pokemon: item._id });
              }}
            />
          </View>
        )}
        onEndReached={() => {
          if (offset < 151 / 20) {
            handleLoadMore();
          }
        }}
        onEndReachedThreshold={0.5}
        initialNumToRender={20}
      />
    </View>
  );
}
