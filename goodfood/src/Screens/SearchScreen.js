import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import SearchBar from "./../components/SearchBar";

const SearchScreen = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <View>
      <SearchBar
        searchText={searchText}
        onSearchTextChange={newSearchText => setSearchText(newSearchText)}
        onSearchTextSubmit={() => console.log("new search text")}
      />
      <Text>{searchText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
