import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import SearchScreen from "./src/Screens/SearchScreen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Business Search"
    }
  }
);

export default createAppContainer(navigator);

// Yelp
// Client ID
// TqwwNGPiZoSADNnl0L_4IQ

// API Key
// TLNAFL933UEj4GpZIoqAXpAIlByqSLuPSYcCgaDLUfTBrKyewNESRHwh8iQUvsXWpolSK7adS_LKTGKtjv - QybiZl7oj8n3a - pVa0SwgXtd9Aoa2i0RHqIst0qjRXXYx
