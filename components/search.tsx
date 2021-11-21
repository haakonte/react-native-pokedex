import React from "react";
import { StyleSheet, TextInput } from "react-native";

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    borderRadius: 5,
    width: "70%",
    color: "#282c34",
    borderColor: "#ED6C02",
    backgroundColor: "white",
  },
});

export default function Search({ onChangeText, text, handleSearch }: any) {
  return (
    <TextInput
      style={styles.input}
      onChangeText={onChangeText}
      value={text}
      placeholderTextColor="#ED6C02"
      underlineColorAndroid="#ED6C02"
      placeholder="Search..."
      onSubmitEditing={() => {
        handleSearch();
      }}
      onFocus={() => {
        onChangeText("");
      }}
      returnKeyType="search"
    />
  );
}
