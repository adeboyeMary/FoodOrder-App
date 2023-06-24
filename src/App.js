import React, {useState} from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';


const App = (props) => {
  const [itsShowing, setItsShowing] = useState(false);

  const showOverlayHandler = () => {
    setItsShowing(true);
  }

  const hideOverlayHandler = () => {
    setItsShowing(false);
  }

  return (
    <div className="App">
      { itsShowing && <Cart onHideOverlay={hideOverlayHandler} /> }
      <Header onShowOverlay={showOverlayHandler} />
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
