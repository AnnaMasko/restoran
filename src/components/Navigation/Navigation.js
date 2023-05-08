import {Link} from "react-router-dom"
import styles from './Navigation.module.css'

export const Navigation = () =>{
    return(
        <nav className={styles.container}>
            <Link className={styles.item} to ='/ColdSnacks'>Холодные закуски</Link>
            <Link className={styles.item} to ='/HotSnacks'>Горячие закуски</Link>
            <Link className={styles.item} to ='/MeatDishes'>Мясные блюда</Link>
            <Link className={styles.item} to ='/Soup'>Супы</Link>
            <Link className={styles.item} to ='/FishDishes'>Рыбныеблюда</Link>
            <Link className={styles.item} to ='/GrillMenu'>Гриль меню</Link>
            <Link className={styles.item} to ='/Specialties'>Фирменные блюда</Link>
            <Link className={styles.item} to ='/Drinks'>Напитки</Link>

        </nav>
    )
}