import styles from '../BasketCounterContainer.module.css'
import { Button } from '../../../common/Button/Button'

export const BasketCounterCart = (
    {
        cartPrice,
        cartCount,
        id,
        removeBasket,
        addBasket
    }
) => {

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

