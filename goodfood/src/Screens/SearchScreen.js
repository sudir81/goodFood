import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import SearchBar from "./../components/SearchBar";
import useBusinessResults from "./../hooks/useBusinessResults";
import HomeResultsList from "./../components/HomeResultsList";

const SearchScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [searchAPI, results, errMsg] = useBusinessResults();

  const filterBusinessesByPrice = price => {
    return results.filter(result => {
      return result.price === price;
    });
  };

  return (
    <View style={styles.searchView}>
      {errMsg ? <Text style={styles.errMsg}>{errMsg}</Text> : null}
      <SearchBar
        searchText={searchText}
        onSearchTextChange={newSearchText => setSearchText(newSearchText)}
        onSearchTextSubmit={() => searchAPI(searchText)}
      />
      <Text style={{ marginHorizontal: 10 }}>
        Found {results.length} restaurants.
      </Text>
      <ScrollView>
        <HomeResultsList
          title="Fruitful"
          businessList={filterBusinessesByPrice("$")}
        />
        <HomeResultsList
          title="Economic"
          businessList={filterBusinessesByPrice("$$")}
        />
        <HomeResultsList
          title="Spender"
          businessList={filterBusinessesByPrice("$$$")}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  errMsg: {
    color: "red"
  },
  searchView: {
    flex: 1
  }
});

export default SearchScreen;
