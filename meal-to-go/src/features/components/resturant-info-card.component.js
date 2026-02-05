import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

export const ResturantInfoCard = ({ resturant = {} }) => {
  const {
    name = "Some Resturant",
    icon,
    photos = [
      "https://recipes.net/wp-content/uploads/2023/07/raspberry-red-velvet-cake_7a92da8a54c76592e2116eb037b80d8a-768x768.jpeg",
    ],
    address = "16 Kei Close Street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = resturant;

  return (
    <Card style={styles.card}>
      <Card.Cover key={name} source={{ uri: photos[0] }} style={styles.cover} />
      <Card.Content style={styles.title}>
        <Text>{name}</Text>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
  },
  cover: {
    padding: 15,
    backgroundColor: "white",
  },
  title: {
    padding: 10,
  },
});
