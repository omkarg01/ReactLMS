import React from 'react';
import Counter from './components/Counter';
import { Provider } from 'react-redux';
import { store } from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Counter></Counter>
    </Provider>
  )
}

export default App