import styles from './DeliveryPages.module.css'

export const DeliveryComponent = ({children, title}) =>{
    return (
        <div className={styles.formContainer}>
            <h4 className={styles.formTitle}>{title}</h4>
            {children}
        </div>
    )
}