import React, { SetStateAction, useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
} from "react-native";
import StarRating from "react-native-star-rating-widget";
import { useSelector } from "react-redux";
import { addReview } from "../services/pokemon_api";

export default function Review({
  id,
  refresh,
  doRefresh,
}: {
  id: string;
  refresh: boolean;
  doRefresh: React.Dispatch<SetStateAction<boolean>>;
}) {
  const nameSelector: any = useSelector((state) => state);
  const [rating, setRating] = useState(3);
  const [text, onChangeText] = useState("");

  const handleSubmit = async () => {
    //Push changes
    //TODO: fikse noe navnegreier
    addReview(id, rating, text, nameSelector.name).then(() => {
      doRefresh(!refresh);
      onChangeText("");
      setRating(3);
    });

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
            placeholder="Comment..."
            multiline
            numberOfLines={3}
            style={styles.textInput}
            value={text}
            onChangeText={onChangeText}
            placeholderTextColor="'rgba(255, 255, 255, 0.5)'"
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
    color: "#fff",
  },
  btnContainer: {
    borderWidth: 1,
    marginTop: 12,
    borderColor: "#ED6C02",
    borderRadius: 5,
  },
});
