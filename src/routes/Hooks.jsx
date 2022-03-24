import React, { useState, useEffect, useReducer, createContext } from 'react';
import Child from '../Child';

export const GlobalInfo = createContext();

const reducer = (state, action) => {
  if (action.type === 'add') {
    return state + 1;
  } else if (action.type === 'sub') {
    return state - 1;
  }
  return state;
}

const Hooks = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState('Kirtishil');

  useEffect(() => {
    console.log(`count is : ${count}`);
  });

  const [state, dispatch] = useReducer(reducer, 0);

  function parentAlert(data) {
    alert(data);
  }

  return (
    <>
      <div>
        {count}
        <button onClick={() => setCount(count + 1)}>add</button>
        <button onClick={() => setCount(count - 1)}>sub</button>
      </div>
      <div>
        {state}
        <button onClick={() => dispatch({ type: 'add' })}> add</button>
        <button onClick={() => dispatch({ type: 'sub' })}> sub</button>
      </div>
      <GlobalInfo.Provider value={{ parentData: data }}>
        <Child alert={parentAlert} />
      </GlobalInfo.Provider>
    </>
  )
}

export default Hooks