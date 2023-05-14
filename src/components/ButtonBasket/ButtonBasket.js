import { Link } from 'react-router-dom'
import styles from './ButtonBasket.module.css'

export const ButtonBasket = () => {
    return (
        <Link to='/basket' state='true' className={styles.container}>
            <p className={styles.textButton} >Корзина</p>
            <div className={styles.containerCircle}>
                <div className={styles.circle}>4</div>
                </div>
        </Link>
    )
}