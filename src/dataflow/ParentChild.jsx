import React from 'react'

const ChildParent = (props) => {
  const childObj = { name: 'Patil' }

  props.toChild(childObj);
  return (
    <>
      <p>{props.obj.name}</p>
    </>
  )
}

export default ChildParent