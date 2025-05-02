import { useDispatch, useSelector } from 'react-redux';

import styles from "./HeaderButton.module.css";
import CartIcon from '../Cart/cartIcon';
import { uiActions } from '../../store/ui-slice';

const HeaderButton = (props) => {
    const dispatch = useDispatch();
    const totalQuantity = useSelector(state => state.cart.totalQuantity);

    const onClickHandler = () => {
        dispatch(uiActions.toggle());
    };
    //  const cartCtx = useContext(CartContext);

    //  const numberOfCartItems = cartCtx.items.reduce((curNum, item) => {
    //     return curNum + item.amount;
    //  }, 0);

    return (
        <button onClick={onClickHandler} className={styles['header-button']}>
            <span><CartIcon /></span>
            <span>Your Cart</span>
            <span className={styles.badge}>{totalQuantity}</span>
        </button>
    )
}

export default HeaderButton;