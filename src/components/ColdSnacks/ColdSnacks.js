import { Link, useParams } from "react-router-dom"
import { menu } from "../../data/menu"
import styles from '../ColdSnacks/ColdSnacks.module.css'
import {BasketCounterContainer} from './BasketCounterContainer'
import { useContext, useReducer } from "react"
import productReducer from "../../reducer/productReducer"
import { initialState } from "../../reducer/initialState"
import { CartContext } from "../../App"

export const ColdSnacks = () =>{
    const {state, dispatch} = useContext(CartContext)

    const {url} = useParams()
    const {title, products, url: categoryUrl} = state.find( element => {
        if (url === undefined) {
            return element.url ==='ColdSnacks'
        }
       return element.url === url
    }) 

    return (
        <div className={styles.container} key={categoryUrl}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.cards}>
            {
            products.map (element => <div key={element.id} className={styles.card}>
                <Link to = {`/${categoryUrl}/${element.id}`} state = 'true'>
                <img                 
                src={element.image.src} 
                alt={element.image.alt}>
                </img>
                </Link>
                
                <h3 className={styles.cartTitle} >{element.title}</h3>
                <span className={styles.cardDescription}>{element.description}</span>
                <div className={styles.priceContainer}> 
                                
                <BasketCounterContainer
                product={element}
                //elementPrice={element.cartPrice}
                dispatch={dispatch}
                category={categoryUrl}
                //id = {element.id}
                //cartCount = {element.cartCount}
                />
                </div>
                </div>
                )
        }
        </div>
        </div>
    )
}