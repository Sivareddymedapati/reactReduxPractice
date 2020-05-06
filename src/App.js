import React from 'react';
import './App.css';
import {Provider} from 'react-redux'
import CakeContainer from './components/CakeContainer'
import CakeContainer2 from './components/CakeContainer2'
import CakeContainer3 from './components/CakeContainer3'
import CakeContainer4 from './components/CakeContainer4'
import IceCreamContainer from './components/IceCreamContainer'
import UserContainer from './components/UserContainer'

import store from './redux/store'
import NewCakeContainer from './components/NewCakeContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      {/* <UserContainer /> */}

     <CakeContainer />
     <CakeContainer2 />
     <CakeContainer3 />
     <CakeContainer4 />
     <IceCreamContainer />
     <NewCakeContainer />
    </div>
    </Provider>
  );
}

export default App;
