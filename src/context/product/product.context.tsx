import axios from "axios"
import { useQuery } from "react-query";
import { TProductProviderProps } from "../../types/ProductProviderProps.type";
import { createContext } from "react";
import { TProductContext } from "../../types";
 
const fetchProducts = async () => {
    const { data } = await axios.get("https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC")
    console.log('acabou o fetch', data)
    return data
}

export const ProductContext = createContext({} as TProductContext)

export const ProductProvider:React.FC<TProductProviderProps> = ({children}) => {
    const { data, isLoading } = useQuery("products", fetchProducts);
    const products = isLoading ? [] : data.products 
    
    return (
        <ProductContext.Provider value={{products, isLoading}}>
            {children}
        </ProductContext.Provider>
    )
}