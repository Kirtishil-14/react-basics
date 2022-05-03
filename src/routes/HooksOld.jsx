import React, {
  useState,
  useEffect,
  useReducer,
  createContext,
  useContext,
} from "react";

const UserContext = createContext();

const reducer = (state, action) => {
  if (action.type === "Add") {
    state = state + 1;
  } else if (state > 0 && action.type === "Sub") {
    state = state - 1;
  }
  return state;
};

const Hooks = () => {
  const [count, setCount] = useState(0);

  const [state, dispatch] = useReducer(reducer, 10);

  useEffect(() => {
    console.log(`you clicked ${count} times`);
  });

  return (
    <>
      <p>{state}</p>
      <button
        type="button"
        className="btn btn-primary m-1"
        onClick={() => dispatch({ type: "Add" })}
      >
        Reducer Add
      </button>
      <button
        type="button"
        className="btn btn-primary m-1"
        onClick={() => dispatch({ type: "Sub" })}
      >
        Reducer Sub
      </button>
      <UserContext.Provider value={count}>
        <p>{count}</p>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setCount(count + 1)}
        >
          Add
        </button>
        <ChildComponent count={count} />
      </UserContext.Provider>
    </>
  );
};

const ChildComponent = () => {
  const count = useContext(UserContext);
  return <p>{count}</p>;
};

export default Hooks;
