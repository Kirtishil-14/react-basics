import React, { useContext } from 'react';
import { GlobalInfo } from './routes/Hooks'

const Child = (props) => {
  console.log(props)
  const { parentData } = useContext(GlobalInfo);
  let name = "Kirtishil Patil";
  return (
    <div>
      {parentData}
      <br />
      <button onClick={() => props.alert(name)}>Child-to-Parent</button>
    </div>
  )
}

export default Child