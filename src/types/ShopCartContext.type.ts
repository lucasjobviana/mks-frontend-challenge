import { TProduct, TReactRCProps } from "."
import { TCartItem } from "./CartItem.type"

export type TShopCartContext = TReactRCProps & {
    shopCart: TCartItem[],
    addProduct: (product: TProduct) => void
    removeProduct: (product: TProduct) => void
    incrementProduct: (product: TProduct) => void
    decrementProduct: (product: TProduct) => void
    display: 'none' | 'block'
    toggleMenu: () => void
}