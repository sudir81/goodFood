import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const BusinessDetail = ({ business }) => {
  return (
    <View style={styles.viewStyle}>
      <Image style={styles.imgStyle} source={{ uri: business.image_url }} />
      <Text style={styles.nameStyle}>{business.name}</Text>
      <Text>
        {business.rating} Stars, {business.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  nameStyle: {
    fontWeight: "bold"
  },
  imgStyle: {
    width: 200,
    height: 150,
    borderRadius: 4
  },
  viewStyle: {
    marginLeft: 10
  }
});

export default BusinessDetail;
