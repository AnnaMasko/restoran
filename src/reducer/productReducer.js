import { INCREASE_PRICE } from "./types"
import { DECREASE_PRICE } from "./types"
import { DELETE_PRODUCT } from "./types"

const productReducer = (state, action ) => {
    switch (action.type) {
        case INCREASE_PRICE: {
            const { id, category } = action

            const newState = state.map(item => {
                
                if (item.url === category) {
                    const products = item.products.map(el => {
                        if (el.id === +id) {                            
                            return {
                                ...el,
                                cartPrice: el.cartPrice + el.price,
                                cartCount: el.cartCount + 1
                            }
                        }
                        return el
                    })
                    return { ...item, products: products }
                }
                return item
            })
            return newState 
        }


        case DECREASE_PRICE: {
            const { id, category } = action

            const newState = state.map(item => {
                if (item.url === category) {
                    const products = item.products.map(el => {
                        if (el.id === +id) {
                            return {
                                ...el,
                                cartPrice: el.cartPrice - el.price,
                                cartCount: el.cartCount - 1
                            }
                        }
                        return el
                    })
                    return { ...item, products: products }
                }
                return item
            })
            return newState
        }

        case DELETE_PRODUCT: {
            const { id, category } = action

            const newState = state.map(item => {
                if (item.url === category) {
                    const products = item.products.map(el => {
                        if (el.id === +id) {
                            return {
                                ...el,
                                cartPrice:  0,
                                cartCount:  0
                            }
                        }
                        return el
                    })
                    return { ...item, products: products }
                }
                return item
            })
            return newState

        }
    }
    
}

export default productReducer