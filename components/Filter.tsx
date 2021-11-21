import React, { Dispatch, SetStateAction, useState } from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    minHeight: 300,
    marginBottom: -250
  }
});

export default function Filter({
  value,
  setValue,
  onChangeValue,
}: {
  value: any;
  setValue: Dispatch<SetStateAction<any>>;
  onChangeValue: any;
}) {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { value: "Bug", label: "Bug" },
    { value: "Dragon", label: "Dragon" },
    { value: "Electric", label: "Electric" },
    { value: "Fighting", label: "Fighting" },
    { value: "Fire", label: "Fire" },
    { value: "Flying", label: "Flying" },
    { value: "Ghost", label: "Ghost" },
    { value: "Grass", label: "Grass" },
    { value: "Ground", label: "Ground" },
    { value: "Ice", label: "Ice" },
    { value: "Normal", label: "Normal" },
    { value: "Poison", label: "Poison" },
    { value: "Psychic", label: "Psychic" },
    { value: "Rock", label: "Rock" },
    { value: "Water", label: "Water" },
  ]);

  return (
    <View style={open ? styles.container : {}}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        multiple={true}
        onChangeValue={(value) => onChangeValue(value)}
      />
    </View>
  );
}
