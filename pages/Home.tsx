import React, { useEffect, useState } from "react";
import {
  fetchPokemon,
  filterOnType,
  searchForPokemon,
} from "../services/pokemon_api";
import {
  View,
  StyleSheet,
  Switch,
  Text,
} from "react-native";
import Name from "../components/name";
import Filter from "../components/Filter";
import Search from "../components/search";
import Pokelist from "../components/pokelist";

export default function Home({ navigation }: any) {
  const [data, setData]: [any, React.Dispatch<React.SetStateAction<any>>] =
    useState([]);
  const [offset, setOffset] = useState(1);
  const [text, onChangeText] = useState("");
  const [filterValue, setFilterValue]: [any, any] = useState(null);
  const [sorting, setSorting] = useState(false);


  const sortSwitch = async () => {
    setOffset(1);
    setFilterValue();
    onChangeText("");
    setSorting(value => !value);
  }

  const handleSearch = async () => {
    setOffset(1);
    searchForPokemon(text, 20, 0, sorting).then((response) => {
      setData(response.data.searchForPokemon);
    });
  };

  const handleFilter = async (value: any) => {
    setOffset(1);
    if (value.length > 0) {
      filterOnType(value, 20, 0, sorting).then((response) => {
        setData(response.data.findOnType);
      });
    } else {
      fetchPokemon(sorting, 20, 0).then((response) => {
        setData(response.data.allPokemon);
      });
    }
  };

  const handleLoadMore = async () => {
    await setOffset(offset + 1);
    if (text != "") {
      searchForPokemon(text, 20, 20 * offset, sorting).then((response) => {
        setData([...data, ...response.data.searchForPokemon]);
      });
    } else if (filterValue && filterValue.length > 0) {
      filterOnType(filterValue, 20, 20 * offset, sorting).then((response) => {
        setData([...data, ...response.data.findOnType]);
      });
    } else {
      fetchPokemon(sorting, 20, 20 * offset).then((response) => {
        setData([...data, ...response.data.allPokemon]);
      });
    }
  };

  useEffect(() => {
    fetchPokemon(sorting, 20, 0).then((response) => {
      setData(response.data.allPokemon);
    });
  }, [sorting]);
  if (data == [sorting]) {
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
      <View style={styles.sort}>
      <Text style={{color: 'white'}}>Chronological</Text>
      <Switch
        trackColor={{ false: '#ED6C02', true: '#ED6C02'}}
        thumbColor={ sorting ?  'white' :'white'}
        onValueChange={sortSwitch}
        value={sorting}
      />
      <Text style={{color: 'white'}}>Alphabetical</Text>
      </View>
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
  sort: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",
  }
});
