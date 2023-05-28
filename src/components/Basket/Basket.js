import { Link } from 'react-router-dom'
import styles from './Basket.module.css'

export const Basket = () => {
    return (
        <div className={styles.container}>
            <span>Basket</span>
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