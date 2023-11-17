import { createContext, useCallback, useState } from "react";
import { TShopCartContext } from "../../types/ShopCartContext.type";
import { TShopCartProviderProps } from "../../types";
import { TCartItem } from "../../types/CartItem.type";
import { TProduct } from "../../types/Product.type";
 
export const ShopCartContext = createContext({} as TShopCartContext)

export const ShopCartProvider:React.FC<TShopCartProviderProps> = ({children}) => {
    const [shopCart, setShopCart] = useState<TCartItem[]>([])
    const [display, setDisplay] = useState<'none' | 'block'>('none')

    const addProduct = useCallback((product: TProduct) => {
        const productIndex = shopCart.findIndex((item) => item.product.id === product.id)
        productIndex === -1 && setShopCart([...shopCart, {product, quantity: 1}])
    },[shopCart])

    const removeProduct = useCallback((product: TProduct) => {
        const productIndex = shopCart.findIndex((item) => item.product.id === product.id)
        productIndex !== -1 && setShopCart(shopCart.filter((item) => item.product.id !== product.id)) 
    },[shopCart])

    const incrementProduct = useCallback((product: TProduct) => {
        const productIndex = shopCart.findIndex((item) => item.product.id === product.id)
        productIndex !== -1 && setShopCart(shopCart.map((item) => {
            if(item.product.id === product.id) {
                item.quantity = item.quantity + 1
            }
            return item
        }))
    },[shopCart])

    const decrementProduct = useCallback((product: TProduct) => {
        const productIndex = shopCart.findIndex((item) => item.product.id === product.id)
        productIndex !== -1 && shopCart[productIndex].quantity > 1 && setShopCart(shopCart.filter((item) => { 
            if(item.product.id === product.id) {
                item.quantity = item.quantity - 1
            }
            return item
        }))
    },[shopCart])

    const toggleMenu = () => {
        setDisplay(display === 'none' ? 'block' : 'none')
    }

    
    return (
        <ShopCartContext.Provider value={{shopCart, addProduct, removeProduct, incrementProduct, decrementProduct, toggleMenu, display}}>
            {children}
        </ShopCartContext.Provider>
    )
}