import { useShopCartContext } from "../context"
import { ProductInCartCardWrapper } from "../styles"
import { TCartItem } from "../types"

type TCardProps = {
    item: TCartItem
}

export const ProductInCartCard:React.FC<TCardProps> = ({ item }) => {
    const { removeProduct, incrementProduct, decrementProduct } = useShopCartContext();

    return (
        <ProductInCartCardWrapper>
            <img src={item.product.photo} alt={item.product.name} />
            <h4>{item.product.name}</h4>
            <section className='qtd'>
                <button type='button' onClick={()=>decrementProduct(item.product)}>-</button>
                <h1>{item.quantity}</h1>
                <button type='button' onClick={()=>incrementProduct(item.product)}>+</button>
            </section>
            <h4>{`R$${item.product.price}`}</h4>
            <button type='button' className="rmv" onClick={()=>removeProduct(item.product)}>x</button>
        </ProductInCartCardWrapper>
    )
}