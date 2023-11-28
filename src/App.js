import {Fragment} from 'react';
import { useSelector } from 'react-redux';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';


const App = (props) => {
  const showCart = useSelector(state => state.ui.showCart);
  // const closeCart = useSelector(state => state.ui.showCart);


  return (
    <Fragment>
      {!showCart && <Cart /> }
      
      {/* <Header onShowOverlay={showOverlayHandler} /> */}
      <Header/>
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
