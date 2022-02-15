import React from 'react';
import { Provider } from 'react-redux';

import { store } from './store';
import Info from './components/Ip';
import User from './components/User';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Info />
        <User />
      </div>
    </Provider>
  );
}

export default App;
