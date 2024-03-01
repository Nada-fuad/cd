import React from "react";
import "./App.css";
import LineChart from "./LineChart";
import JsonParentData from "./JsonParentData";

function App() {
  return (
    <div className="App">
      <h1> CI/CD update</h1>
      <LineChart />

      <JsonParentData />
    </div>
  );
}

export default App;
