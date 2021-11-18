import React, { SetStateAction, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import StarRating from "react-native-star-rating-widget";
import { fetchReviewsOfPokemon } from "../services/pokemon_api";
export default function ReviewList({
  id,
  refresh,
}: {
  id: string;
  refresh: boolean;
}) {
  const [data, setData]: [
    Array<object>,
    React.Dispatch<SetStateAction<Array<object>>>
  ] = useState([{}]);

  const [loaded, setLoaded]: [
    boolean,
    React.Dispatch<SetStateAction<boolean>>
  ] = useState<boolean>(false);

  useEffect(() => {
    fetchReviewsOfPokemon(id).then((res) => {
      setData(res.data.findReviewsOfPokemon);
      if (res.data.findReviewsOfPokemon.length > 0) {
        setLoaded(true);
      }
    });
  }, [refresh]);

  if (!loaded) return <></>;

  return (
    <View>
      <Text style={styles.heading}>Reviews</Text>
      {data.map((review: any, i) => (
        <View key={i} style={styles.container}>
          <StarRating rating={review.score} onChange={() => {}} starSize={15} />
          <Text style={styles.name}>{review.name}</Text>
          <Text style={styles.comment}>{review.comment}</Text>
        </View>
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: "auto",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: "#ED6C02",
    minWidth: 200,
    maxWidth: 300,
  },
  heading: {
    color: "#fff",
    fontSize: 24,
    padding: 5,
    marginHorizontal: "auto",
    marginVertical: 10,
    fontWeight: "700",
  },
  name: {
    color: "#fff",
    position: "absolute",
    top: 2,
    right: 5,
    fontSize: 12,
  },
  comment: {
    color: "#fff",
    padding: 5,
    fontSize: 16,
  },
});
