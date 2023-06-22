import styles from '../BasketCounterContainer.module.css'
import { Button } from '../../../common/Button/Button'
import buy from '../../../assets/images/buy.png'

export const BasketCounterCommon = (
    {
        price,
        cartPrice,
        cartCount,
        id,
        removeBasket,
        addBasket,
        toCart,
        isShowCount
    }
) => {
    if (isShowCount) {
        return (
            <>
                <span className={styles.count}>{cartCount}</span>
                <Button
                    addStyles={styles.buttonCount}
                    handleClick={removeBasket}
                    id={id}
                    title='-'
                />

                <p className={styles.cardPrice}>{cartPrice}</p>
                <Button
                    addStyles={styles.buttonCount}
                    handleClick={addBasket}
                    id={id}
                    title='+'
                />
            </>
        )
    }
    return (
        <>
            <p className={styles.cardPrice}>{price} ₽</p>
            <Button
                addStyles={styles.cartButton}
                handleClick={toCart}
                title='В корзину'
                image={buy}
            />
        </>

    )
}
