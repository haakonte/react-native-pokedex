import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../reducer/nameReducer";
import { StyleSheet, View } from "react-native";
import Dialog from "react-native-dialog";

const Name = (props: any) => {
  const dispatch = useDispatch();
  const nameSelector: any = useSelector((state) => state);

  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log(nameSelector.name);
    if (nameSelector.name === "") {
      handleClickOpen();
    }
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    if (name !== "") {
      setOpen(false);
      dispatch(changeName(name));
    }
  };

  return (
    <View>
      <Dialog.Container visible={open}>
        <Dialog.Title style={styles.title}>Hva heter du?</Dialog.Title>
        <Dialog.Description>
          Vi vil bruke navnet ditt i forbindelse med reviews du legger igjen.
          Skriv inn navnet ditt for å fortsette.
        </Dialog.Description>
        <Dialog.Input
          style={styles.input}
          value={name}
          placeholder="Skriv her..."
          onChangeText={setName}
        ></Dialog.Input>
        <Dialog.Button
          style={styles.button}
          label="Lagre"
          onPress={handleClose}
        />
      </Dialog.Container>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 10,
    textAlign: "center",
    fontSize: 18,
  },

  title: {
    textAlign: "center",
  },

  button: {
    fontSize: 18,
    color: "#ED6C02",
  },
});

export default Name;
