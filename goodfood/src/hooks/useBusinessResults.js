import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
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
    searchAPI("pasta");
  }, []);

  return [searchAPI, results, errMsg];
};
