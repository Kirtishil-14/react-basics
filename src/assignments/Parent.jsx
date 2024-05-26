import React, { useState, createContext } from "react";
import Child from "./Child";

export const MyContext = createContext();

const Parent = () => {
  const [childData, setChildData] = useState("");

  const handleChildData = (data) => {
    setChildData(data);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <h1>Data from child := {childData}</h1>

      <MyContext.Provider value={{ childData, setChildData }}>
        <Child sendDatatoParent={handleChildData} />
      </MyContext.Provider>
    </div>
  );
};

export default Parent;
