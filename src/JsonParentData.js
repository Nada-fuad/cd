import React, { useState } from "react";

import JsonDataFetch from "./JsonDataFetch";
import ConfusionMatrixPlot from "./ConfusionMatrixPlot";

const JsonParentData = () => {
  const [dataSet, setDataSet] = useState(null);

  const handleDataSet = (data) => {
    setDataSet(data);
  };

  return (
    <div>
      <JsonDataFetch onDataSet={handleDataSet} />
      {dataSet && console.log("Loaded Data:", dataSet)}

      {/* {dataSet && dataSet.length >= 1 && <RocPlot data={dataSet[0]} />} */}
      {/* {dataSet && dataSet.length >= 1 && <CurvePlot data={dataSet[1]} />}*/}

      {dataSet && dataSet.length >= 1 && (
        <ConfusionMatrixPlot
          data={dataSet[0].data}
          categories={dataSet[0].categories}
        />
      )}
      {/* {dataSet && dataSet.length >= 1 && (
        <ConfusionMatrixPlot
          data={dataSet[3].data}
          categories={dataSet[3].categories}
        />
      )} */}

      {/* {dataSet && dataSet.length >= 1 && (
         <ConfusionMatrixPlot
          data={dataSet[2].data}
          categories={dataSet[2].categories}
        />
      )} */}

      {/* {dataSet && dataSet.length >= 1 && <Dashboard1 data={dataSet[0]} />} */}
    </div>
  );
};

export default JsonParentData;