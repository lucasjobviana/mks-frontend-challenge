import { useContext } from "react"
import { ShopCartContext } from "../shop-cart"

export const useShopCartContext = () => {
    return useContext(ShopCartContext)
}