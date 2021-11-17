import React, { useEffect, useState } from "react";
import {
  Button,
  Image,
  Text,
  View,
  ScrollView,
  FlatList,
  TextInput,
  StyleSheet,
} from "react-native";
import { fetchPokemon, searchForPokemon } from "../services/pokemon_api";
import Pokeinfo from "./Pokeinfo";

export default function Home({ navigation }) {
  const [data, setData]: [any, React.Dispatch<React.SetStateAction<any>>] =
    useState([]);
  const [offset, setOffset] = useState(1);
  const [text, onChangeText] = useState("");

  const handleSearch = async () => {
    setOffset(1);
    searchForPokemon(text, 20, 0, false).then((response) => {
      setData(response.data.searchForPokemon);
    });
  };

  const handleLoadMore = async () => {
    await setOffset(offset + 1);
    if (text != "") {
      searchForPokemon(text, 20, 20 * offset, false).then((response) => {
        setData([...data, ...response.data.searchForPokemon]);
      });
    } else {
      fetchPokemon(false, 20, 20 * offset).then((response) => {
        setData([...data, ...response.data.allPokemon]);
      });
    }
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
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Search..."
        onSubmitEditing={() => {
          handleSearch();
        }}
        onFocus={() => {
          onChangeText("");
        }}
        returnKeyType="search"
      />
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
        onEndReachedThreshold={0.2}
        initialNumToRender={20}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    width: "70%",
  },
});
