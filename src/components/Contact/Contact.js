import calling from '../../assets/images/calling.png'
import styles from './Contact.module.css'

export const Contact = () =>{
    return (
        <div className={styles.container} >
            <div className={styles.circle}>
        <img className={styles.calling} src={calling} alt='calling'/>
        </div>
        <div className={styles.containerContact} >
        <span className={styles.contact} >Контакты: </span>
        <span className={styles.phone} >+7 (917) 510-57-59</span>
        </div>
        </div>
    )
}