import React, { useEffect, useState } from "react";
import { fetchPokemon, searchForPokemon } from "../services/pokemon_api";
import Pokeinfo from "./Pokeinfo";
import {
  Button,
  Image,
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { withSafeAreaInsets } from "react-native-safe-area-context";

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
    <View style={styles.home}>
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
        numColumns={3}
        data={data}
        renderItem={({ item }: any) => (
          <TouchableOpacity
            key={item.id}
            style={styles.wrapper}
            onPress={() => {
              navigation.navigate("Pokeinfo", { pokemon: item._id });
            }}
          >
            <Image
              style={styles.picture}
              source={{
                uri: item.img,
              }}
            ></Image>
            <Text style={styles.text}>
              {item.id}. {item.name}
            </Text>
            <Text style={styles.text}>
              {item.type.join(" ")}
            </Text>
          </TouchableOpacity>
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

  home: {
    backgroundColor: "#282c34",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  },

  picture: {
    width: 90,
    height: 90,
  },

  wrapper: {
    borderWidth: 2,
    borderColor: "#ED6C02",
    alignContent: "center",
    margin: 5,
    padding: 5,
  },

  text: {
    justifyContent: "center",
    textAlign: "center",
    fontSize: 12,
    color: "white",
  },
});
