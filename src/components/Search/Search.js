import location from '../../assets/images/location.svg'
import search from '../../assets/images/search.svg'
import styles from './Search.module.css'

export const Search = () => {
    return (
        <div className={styles.container} >
            <img className={styles.location} src={location} alt='location' />
            <input className={styles.input} placeholder="Введите адрес доставки" type="text" size="40" name="message"></input>
            <img className={styles.search} src={search} alt='search' />
        </div>
    )
}