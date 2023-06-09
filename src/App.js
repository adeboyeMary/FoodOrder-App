import React from 'react';

import Header from './components/Header/Header';
import Meals from './components/Meals/Meals';



const App = () => {
  return (
    <div className="App">
      {/* <h1>it's working!!!!</h1> */}
      <Header />
      <Meals />
    </div>
  );
}

export default App;
