import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, FlatList, Image } from "react-native";
import yelp from "./../api/yelp";

const BusinessDetailScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const businessId = navigation.getParam("id");

  const getRestaurant = async id => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getRestaurant(businessId);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 200
  }
});

export default BusinessDetailScreen;
