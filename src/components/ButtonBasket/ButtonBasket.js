import { Link } from 'react-router-dom'
import styles from './ButtonBasket.module.css'
import { useContext } from 'react'
import { CartContext } from '../../App'

export const ButtonBasket = () => {
    const {totalCount} = useContext(CartContext)
    return (
        <Link to='/basket' state='true' className={styles.container}>
            <p className={styles.textButton} >Корзина</p>
            <div className={styles.containerCircle}>
                <div className={styles.circle}>{totalCount}</div>
                </div>
        </Link>
    )
}