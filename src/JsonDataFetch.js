import React, { useEffect, useState, useCallback } from "react";
import config from "./config.json";

const JsonDataFetch = ({ onDataSet }) => {
  const [data, setData] = useState(null);
  const apiUrl = process.env.REACT_APP_API_URL;

  const o = config.apiUrl;
  const jsonPlotData = [
    //MOBILENETV18

    // "/cifar10_example/trained_models/test/mobilenetv3_small_100/plots/test_roc.json",

    // "/cifar10_example/trained_models/test/mobilenetv3_small_100/plots/test_pr_curve.json",

    o,
  ];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const dataSetCallback = useCallback(onDataSet, []);

  const fetchPlotData = async (path) => {
    try {
      const response = await fetch(path, {
        headers: {
          Accept: "application/json",
        },
      });

      const textContent = await response.text();
      console.log(`Response Text Content from ${path}:`, textContent);

      const jsonData = JSON.parse(textContent);
      return jsonData;
    } catch (error) {
      console.error(`Error loading JSON data from ${path}: ${error.message}`);
      return null;
    }
  };

  const fetchPlotEachData = async () => {
    const promises = jsonPlotData.map(fetchPlotData);
    const response = await Promise.all(promises);

    setData(response);
    dataSetCallback(response);
  };

  useEffect(() => {
    fetchPlotEachData();
  }, [dataSetCallback]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!data) {
    return <p>ok</p>;
  }

  return <div></div>;
};

export default JsonDataFetch;
