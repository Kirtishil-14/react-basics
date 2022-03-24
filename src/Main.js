import React from 'react';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate('Hooks')}>Hooks</button>
    </>
  )
}

export default Main