import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

export default function Pokelist({
  navigation,
  data,
  offset,
  handleLoadMore,
}: any) {
  return (
    <FlatList
      numColumns={3}
      indicatorStyle="white"
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
          <Text style={styles.text}>{item.type.join(" ")}</Text>
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
  );
}

const styles = StyleSheet.create({
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
