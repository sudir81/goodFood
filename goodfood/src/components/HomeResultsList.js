import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import BusinessDetail from "./BusinessDetails";

const HomeResultsList = ({ title, businessList }) => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal={true}
        data={businessList}
        keyExtractor={result => result.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return <BusinessDetail business={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 10
  },
  viewStyle: {
    marginBottom: 5
  }
});

export default HomeResultsList;
