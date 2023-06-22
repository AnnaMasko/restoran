import { useContext, useState } from "react";
import styles from '../ColdSnacks/BasketCounterContainer.module.css'
import buy from '../../assets/images/buy.png'
import { DECREASE_PRICE, INCREASE_PRICE } from "../../reducer/types";
import { Button } from "../../common/Button/Button";
import { CartContext } from "../../App";
import { useLocation, useParams } from "react-router-dom";
import { BasketCounterCommon } from "./BasketCounterCommon/BasketCounterCommon";
import { BasketCounterCart } from './BasketCounterCart/BasketCounterCart'

export function BasketCounterContainer({ dispatch, category, product }) {
    const { price, cartPrice, cartCount, id } = product
    //const [count, setCount] = useState(0);
    const [isShowCount, setShowCount] = useState(!!cartCount);
    //const [price, setPrice] = useState(elementPrice);
    const { totalCount, setTotalCount } = useContext(CartContext)
    const { pathname } = useLocation()
    const isCartPage = pathname === '/cart'

    const addBasket = ({ currentTarget }) => {
        //console.log(currentTarget);
        //setCount(count + 1)
        //setPrice(price+elementPrice)
        setTotalCount(totalCount + 1)
        dispatch({ type: INCREASE_PRICE, id: currentTarget.id, category: category })
        //console.log('add', cartCount)
    }

    const removeBasket = ({ currentTarget }) => {
        if (cartCount === 1) {
            setShowCount(!isShowCount)
        }
        //setCount(count - 1)
        //setPrice(price-elementPrice)
        setTotalCount(totalCount - 1)
        dispatch({ type: DECREASE_PRICE, id: currentTarget.id, category: category })
        //console.log('minus', cartCount)
    }

    function toCart({ currentTarget }) {
        setShowCount(!isShowCount)
        dispatch({ type: INCREASE_PRICE, id: currentTarget.id, category: category })
        setTotalCount(totalCount + 1)
    }

    return (
        <>
            {
                isCartPage ?
                    <BasketCounterCart /> :
                    <BasketCounterCommon
                        price={price}
                        cartPrice={cartPrice}
                        cartCount={cartCount}
                        id={id}
                        removeBasket={removeBasket}
                        addBasket={addBasket}
                        toCart={toCart}
                        isShowCount={isShowCount}
                    />
            }
        </>

    )
}
