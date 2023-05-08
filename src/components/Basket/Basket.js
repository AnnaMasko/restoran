import styles from './Basket.module.css'

export const Basket = () => {
    return (
        <div className={styles.container}>
            <p className={styles.textButton} >Корзина</p>
            <div className={styles.containerCircle}>
                <div className={styles.circle}>4</div>
                </div>
        </div>
    )
}