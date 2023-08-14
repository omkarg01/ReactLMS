import React from 'react';
import ChildComponent from './components/ChildComponent';

const App = () => {

  const message = "Hello from Parent Component"

  return (
    <div>
      This is App Component
      <ChildComponent greeting={message}></ChildComponent>
    </div>
  )
}

export default App