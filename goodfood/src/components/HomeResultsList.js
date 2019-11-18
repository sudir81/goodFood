import React from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity
} from "react-native";
import { withNavigation } from "react-navigation";
import BusinessDetail from "./BusinessDetails";

const HomeResultsList = ({ title, businessList, navigation }) => {
  if (!businessList.length) {
    return null;
  }

  return (
    <View style={styles.viewStyle}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal={true}
        data={businessList}
        keyExtractor={result => result.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("BusinessScreen", { id: item.id })
              }
            >
              <BusinessDetail business={item} />
            </TouchableOpacity>
          );
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

export default withNavigation(HomeResultsList);
