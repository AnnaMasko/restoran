import { useState } from "react";
import styles from '../ColdSnacks/Order.module.css'
import buy from '../../assets/images/buy.png'

export function Order({elementPrice}) {
    const [count, setCount] = useState(0);
    const [isShowCount, setShowCount] = useState(false);
    const [price, setPrice] = useState(elementPrice);

    const addBasket = () => {
        setCount(count + 1)
        setPrice(price+elementPrice)
    }

    const removeBasket = () => {
        if (count === 1) {
            setShowCount(!isShowCount)
        }
        setCount(count - 1)
        setPrice(price-elementPrice)
    }

    const toCart = () => {
        setShowCount(!isShowCount)
    }

    if (isShowCount) {
        return (
            <>
                <span className={styles.count}>{count}</span>
                <button className={styles.buttonCount} onClick={removeBasket}>
                    -
                </button>
                <p className={styles.cardPrice}>{price}</p>
                <button className={styles.buttonCount} onClick={addBasket}>
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

