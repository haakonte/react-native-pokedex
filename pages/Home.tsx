import React, { useEffect, useState } from "react";
import { Button, Image, Text, View, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { withSafeAreaInsets } from "react-native-safe-area-context";
import { fetchPokemon } from "../services/pokemon_api";



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
    <View style={styles.home}>
      <FlatList numColumns={3}
        data={data}
        renderItem={({ item }: any) => (
          <TouchableOpacity key={item.id} style={styles.wrapper} onPress={() => {
            navigation.navigate("Pokeinfo", { pokemon: item._id });
          }}>
            <Image style={styles.picture} source={{
              uri: item.img
            }}>
            </Image>
            <Text style={styles.text}>
              {item.id}. {item.name}
            </Text>
            <Text style={styles.text}>
              {item.type}
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

  home: {
    backgroundColor: '#282c34',
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
    borderColor: '#ED6C02',
    margin: 5,
    padding: 5,
  },

  text: {
    textAlign: 'center',
    fontSize: 12,
    color: 'white',
  }

});
