import React from 'react';
import './App.css';
import {Provider} from 'react-redux'
import CakeContainer from './components/CakeContainer'
import CakeContainer2 from './components/CakeContainer2'
import CakeContainer3 from './components/CakeContainer3'
import CakeContainer4 from './components/CakeContainer4'
import IceCreamContainer from './components/IceCreamContainer'

import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <CakeContainer />
     <CakeContainer2 />
     <CakeContainer3 />
     <CakeContainer4 />
     <IceCreamContainer />
    </div>
    </Provider>
  );
}

export default App;
