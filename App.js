import React, { useState } from "react";
import styled from "styled-components";
import TreeTT from "./TreeTT";
import DisplayChart from "./DisplayChart";
const App = () => {
  const [dataselect, setDataSelect] = useState("");
  const handleSelect = (value) => {
    setDataSelect(value);
  };
  console.log("dataselect", dataselect);
  return (
    <Smain>
      <TreeTT handleSelect={handleSelect} />
      <DisplayChart dataselect={dataselect} />
    </Smain>
  );
};

export default App;
const Smain = styled.div`
  display: flex;
`;