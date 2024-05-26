import React, { useContext, useState } from "react";
import { MyContext } from "./Parent";

const Child = ({ sendDatatoParent }) => {
  const [childInput, setChildInput] = useState("");
  const { setChildData } = useContext(MyContext);
  return (
    <div>
      <h1>Child Compoent</h1>
      <input
        type="text"
        value={childInput}
        onChange={(e) => setChildInput(e.target.value)}
      />
      <br />
      <br />
      <button onClick={() => sendDatatoParent(childInput)}>
        Child to Parent using callback
      </button>
      <br />
      <br />
      <button onClick={() => setChildData(childInput)}>
        Child to Parent using Context
      </button>
    </div>
  );
};

export default Child;
