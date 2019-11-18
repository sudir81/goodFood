import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ searchText, onSearchTextChange, onSearchTextSubmit }) => {
  return (
    <View style={styles.searchBarView}>
      <Feather name="search" style={styles.featherStyle} />
      <TextInput
        style={styles.inputStyle}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        value={searchText}
        onChangeText={onSearchTextChange} //{newSearchText => onSearchTextChange(newSearchText)}
        onEndEditing={onSearchTextSubmit} //{() => onSearchTextSubmit()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarView: {
    backgroundColor: "#F0EEEE",
    height: 40,
    borderRadius: 5,
    marginVertical: 10,
    marginHorizontal: 10,
    flexDirection: "row"
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
    borderColor: "black"
  },
  featherStyle: {
    fontSize: 35,
    marginHorizontal: 10,
    alignSelf: "center"
  }
});

export default SearchBar;
