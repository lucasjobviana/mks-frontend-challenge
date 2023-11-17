import { useContext } from "react"
import { ProductContext } from "."

 
export const useProductContext = () => {
    return useContext(ProductContext)
}