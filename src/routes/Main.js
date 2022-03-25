import React from 'react';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate('HooksOld')}>Hooks 1</button>
      <button onClick={() => navigate('Hooks')}>Hooks 2</button>
      <button onClick={() => navigate('Todo')}>Todo</button>
      <button onClick={() => navigate('Menu')}>Menu</button>
      <button onClick={() => navigate('Form')}>Form</button>
    </>
  )
}

export default Main