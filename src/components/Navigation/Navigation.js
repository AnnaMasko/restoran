import {Link} from "react-router-dom"
import styles from './Navigation.module.css'
import { menu } from "../../data/menu"

export const Navigation = () =>{
    return(
        <nav className={styles.container}>

            {
                menu.map(element => <Link key= {element.id} className={styles.item} to ={element.url}>{element.title}</Link>)
            }


        </nav>
    )
}