import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import SearchBar from "./../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState([]);
  const [errMsg, setErrMsg] = useState("");

  const searchAPI = async searchTxt => {
    console.log("search APi called.");
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTxt,
          location: "new york"
        }
      });
      setResults(response.data.businesses);
    } catch (err) {
      console.log(err);
      setErrMsg("Something went wrong, try again.");
    }
  };

  // Default search when component load
  useEffect(() => {
    searchAPI("thai");
  }, []);

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
