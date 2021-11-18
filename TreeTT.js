import React from "react";
import { Tree } from "antd";
import data from "./listtree.json";
import styled from "styled-components";
const { DirectoryTree } = Tree;

const TreeTT = ({ handleSelect }) => {
  return (
    <Smain>
      <Slibtree
        onSelect={(e, info) => {
          handleSelect(info.node);
          // console.log("node", e, info.node);
        }}
        treeData={data}
        multiple
      />
    </Smain>
  );
};

export default TreeTT;
const Slibtree = styled(DirectoryTree)`
  font-size: 1em;
`;
const Smain = styled.div`
  margin: 50px;
  padding: 20px;
  border-style: solid;
`;