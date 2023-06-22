import { menu } from '../../data/menu';
import productReducer from '../../reducer/productReducer';
import { useReducer } from 'react';
import { initialState } from '../../reducer/initialState';
import styles from './Product.module.css'
import { useParams } from 'react-router-dom';
import { BasketCounterContainer } from '../ColdSnacks/BasketCounterContainer';
import { ProductTable } from './ProductTable/ProductTable';
import { useContext } from 'react';
import { CartContext } from '../../App';

export const Product = () => {
    const { url, id } = useParams()
    //const [state, dispatch] = useReducer(productReducer, initialState)
    const {state, dispatch} = useContext(CartContext)
    const {products, url:categoryUrl} = state.find(
        (category) => category.url === url
    )

    const element = products.find((data) => data.id === +id)
    return (
        <div className={styles.container}>
            <div className={styles.product}>
                <img 
                    src={element.image.src}
                    alt={element.image.alt}
                    className={styles.image}
                />
                <div className={styles.product__info}>
                    <div className={styles.title}>
                        {element.title}
                    </div>
                    <div className={styles.description}>
                        {element.description}
                    </div>
                    <div className={styles.weight}>
                        Вес: {element.weight} г.
                    </div>
                    <BasketCounterContainer
                        product={element}
                        //elementPrice={element.cartPrice}
                         dispatch={dispatch}
                        category={categoryUrl}
                        //id = {element.id}
                        //cartCount = {element.cartCount}
                        addStyles={styles.count}
                />
                    <ProductTable element={element} />
                </div>
            </div>
        </div>
    );
};