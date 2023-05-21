import { useState } from "react";
import styles from '../ColdSnacks/Order.module.css'
import buy from '../../assets/images/buy.png'
import { DECREASE_PRICE, INCREASE_PRICE } from "../../reducer/types";

export function Order({elementPrice, dispatch, category, id, cartCount}) {
    //const [count, setCount] = useState(0);
    const [isShowCount, setShowCount] = useState(false);
    //const [price, setPrice] = useState(elementPrice);

    const addBasket = ({currentTarget}) => {
        //console.log(currentTarget);
        //setCount(count + 1)
        //setPrice(price+elementPrice)
        dispatch({type: INCREASE_PRICE, id: currentTarget.id, category: category })
    }

    const removeBasket = ({currentTarget}) => {
        if (cartCount === 1) {
            setShowCount(!isShowCount)
        }
        //setCount(count - 1)
        //setPrice(price-elementPrice)
        dispatch({type: DECREASE_PRICE, id: currentTarget.id, category: category })
    }

    const toCart = () => {
        setShowCount(!isShowCount)
    }

    if (isShowCount) {
        return (
            <>
                <span className={styles.count}>{cartCount}</span>
                <button 
                className={styles.buttonCount} 
                onClick={removeBasket}
                id = {id}
                >
                    -
                </button>
                <p className={styles.cardPrice}>{elementPrice}</p>
                <button 
                className={styles.buttonCount} 
                onClick={addBasket}
                id = {id}
                >
                    +
                </button>
            </>
        )
    }
    return (
        <>
            <p className={styles.cardPrice}>{elementPrice}</p>
            <button className={styles.cartButton} onClick={toCart}>
                В корзину
                <img src={buy}/>
            </button>
        </>

    )
}

