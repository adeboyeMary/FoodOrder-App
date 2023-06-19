import React from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';


const App = (props) => {
  return (
    <div className="App">
      <Header />
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
