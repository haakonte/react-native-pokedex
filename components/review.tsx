import React, { Props, useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
  Text,
} from "react-native";
import StarRating from "react-native-star-rating-widget";
import { addReview } from "../services/pokemon_api";

export default function Review({ id }: { id: string }) {
  const [rating, setRating] = useState(3);
  const [text, onChangeText] = useState("");

  const handleSubmit = async () => {
    //Push changes
    //TODO: fikse noe navnegreier
    addReview(id, rating, text, "anon").then((res) => console.log(res));

    //TODO: reloade frontend
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <StarRating
            rating={rating}
            onChange={setRating}
            enableHalfStar={false}
          />
          <TextInput
            placeholder="comment"
            multiline
            numberOfLines={3}
            style={styles.textInput}
            value={text}
            onChangeText={onChangeText}
          />
          <View style={styles.btnContainer}>
            <Button title="Submit" onPress={handleSubmit} color="#ED6C02" />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "space-around",
  },
  textInput: {
    height: 40,
    borderColor: "#ED6C02",
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    borderWidth: 1,
    marginTop: 12,
    borderColor: "#ED6C02",
    borderRadius: 5,
  },
});
