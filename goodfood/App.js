import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import SearchScreen from "./src/Screens/SearchScreen";
import BusinessDetailScreen from "./src/Screens/BusinessDetailScreen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    BusinessScreen: BusinessDetailScreen
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Restaurant Search"
    }
  }
);

export default createAppContainer(navigator);
