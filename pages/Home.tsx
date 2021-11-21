import React, { useEffect, useState } from "react";
import {
  fetchPokemon,
  filterOnType,
  searchForPokemon,
} from "../services/pokemon_api";
import Pokeinfo from "./Pokeinfo";
import {
  Image,
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Name from "../components/name";
import { withSafeAreaInsets } from "react-native-safe-area-context";
import Filter from "../components/Filter";
import Search from "../components/search";
import Pokelist from "../components/pokelist";

export default function Home({ navigation }: any) {
  const [data, setData]: [any, React.Dispatch<React.SetStateAction<any>>] =
    useState([]);
  const [offset, setOffset] = useState(1);
  const [text, onChangeText] = useState("");
  const [filterValue, setFilterValue]: [any, any] = useState(null);

  const handleSearch = async () => {
    setOffset(1);
    searchForPokemon(text, 20, 0, false).then((response) => {
      setData(response.data.searchForPokemon);
    });
  };

  const handleFilter = async (value: any) => {
    setOffset(1);
    if (value.length > 0) {
      filterOnType(value, 20, 0, false).then((response) => {
        setData(response.data.findOnType);
      });
    } else {
      fetchPokemon(false, 20, 0).then((response) => {
        setData(response.data.allPokemon);
      });
    }
  };

  const handleLoadMore = async () => {
    await setOffset(offset + 1);
    if (text != "") {
      searchForPokemon(text, 20, 20 * offset, false).then((response) => {
        setData([...data, ...response.data.searchForPokemon]);
      });
    } else if (filterValue && filterValue.length > 0) {
      filterOnType(filterValue, 20, 20 * offset, false).then((response) => {
        setData([...data, ...response.data.findOnType]);
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
      <Name />
      <Search
        onChangeText={onChangeText}
        value={text}
        handleSearch={handleSearch}
      />
      <Filter
        value={filterValue}
        setValue={setFilterValue}
        onChangeValue={handleFilter}
      />
      <Pokelist
        data={data}
        offset={offset}
        handleLoadMore={handleLoadMore}
        navigation={navigation}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    backgroundColor: "#282c34",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  },
});
