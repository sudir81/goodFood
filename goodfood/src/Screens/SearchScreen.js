import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import SearchBar from "./../components/SearchBar";
import useBusinessResults from "./../hooks/useBusinessResults";

const SearchScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [searchAPI, results, errMsg] = useBusinessResults();

  return (
    <View>
      {errMsg ? <Text style={styles.errMsg}>{errMsg}</Text> : null}
      <SearchBar
        searchText={searchText}
        onSearchTextChange={newSearchText => setSearchText(newSearchText)}
        onSearchTextSubmit={() => searchAPI(searchText)}
      />
      <Text>Found {results.length} restaurants.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  errMsg: {
    color: "red"
  }
});

export default SearchScreen;
