import { Link } from 'react-router-dom'
import styles from './Basket.module.css'
import { Title } from '../../common/Title/Title'
import { useState, useEffect, useContext } from 'react'
import { CartContext } from '../../App'
import { BasketCounterContainer } from '../ColdSnacks/BasketCounterContainer'
import { Button } from '../../common/Button/Button'
import { DELETE_PRODUCT } from '../../reducer/types'


export const Basket = ({ cartCount }) => {
    const [basket, setBasket] = useState([])
    const { state, dispatch } = useContext(CartContext)



    useEffect(() => {
        const basketState = [];

        state.forEach((category) => {
            category.products.forEach((product) => {
                if (product.cartCount > 0) {
                    product = { ...product, url: category.url };
                    basketState.push(product);
                }
            });
        });
        setBasket(basketState);
    }, [state]);

    const removeProduct = (id, url, cartCount) => {
        const newBasket = basket.filter((product) => product.id !== id)
        setBasket(newBasket)
        dispatch({
            type: DELETE_PRODUCT,
            id: id,
            category: url
        })
    }

    return (
        <div className={styles.container}>
            <Title title="Корзина" />
            <div className={styles.order}>
                {basket.map((product) => (
                    <div className={styles.product} key={product.id}>
                        <div className={styles.aboutProduct}>
                            <Link to={`/${product.url}/${product.id}`} state={true}>
                                <img className={styles.productImage} src={product.image.src} alt={product.image.alt} />
                            </Link>
                        </div>
                        <div>
                            <span className={styles.productTitle}>{product.title}</span>
                            <p className={styles.productDescription}>{product.description}</p>
                        </div>
                        <BasketCounterContainer
                            product={product}
                            dispatch={dispatch}
                            category={product.url}
                        />
                        <Button
                            addStyles={styles.addStylesButton}
                            title='X'
                            onClick={() => removeProduct(product.id, product.url)}
                            category={product.url}
                        />
                    </div>
                ))}

            </div>



            <div className={styles.orderContainer}>
                <div className={styles.price}>
                    <p className={styles.totalPrice}>ИТОГО</p>
                    <p className={styles.deliveryPrice}>До бесплатной доставки не хватает</p>
                    <p className={styles.minPrice}>Минимальная сумма заказа 1500 ₽</p>
                </div>
                <Link to='/order' className={styles.checkout}>Оформить заказ</Link>

            </div>
        </div>
    )
}