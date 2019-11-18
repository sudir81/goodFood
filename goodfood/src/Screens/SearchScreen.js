import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import SearchBar from "./../components/SearchBar";
import useBusinessResults from "./../hooks/useBusinessResults";
import HomeResultsList from "./../components/HomeResultsList";

const SearchScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");
  const [searchAPI, results, errMsg] = useBusinessResults();

  const filterBusinessesByPrice = price => {
    return results.filter(result => {
      return result.price === price;
    });
  };

  return (
    <>
      {errMsg ? <Text style={styles.errMsg}>{errMsg}</Text> : null}
      <SearchBar
        searchText={searchText}
        onSearchTextChange={newSearchText => setSearchText(newSearchText)}
        onSearchTextSubmit={() => searchAPI(searchText)}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <HomeResultsList
          title="Fruitful"
          businessList={filterBusinessesByPrice("$")}
          navigation={navigation}
        />
        <HomeResultsList
          title="Economic"
          businessList={filterBusinessesByPrice("$$")}
          navigation={navigation}
        />
        <HomeResultsList
          title="Spender"
          businessList={filterBusinessesByPrice("$$$")}
          navigation={navigation}
        />
      </ScrollView>
    </>
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
