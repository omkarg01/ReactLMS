import React from 'react'

const ChildComponent = (props) => {
    console.log(props);
  return (
    <div>{props.greeting}</div>
  )
}

export default ChildComponent