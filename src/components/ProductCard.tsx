import { useShopCartContext } from "../context"
import { ProductCardWrapper } from "../styles"
import { TProduct, TReactRCProps } from "../types"
import img from '../assets/shopping-bag.svg'

export type TCardProps = TReactRCProps & {
    product: TProduct
}

export const ProductCard:React.FC<TCardProps> = ({ children, product }) => {
    const { addProduct } = useShopCartContext();

    return (
        <ProductCardWrapper>
            <section className="body">
                <img src={product.photo} alt={`Foto do produto ${product.name}`} />
                <section className="info">
                    <h4>{product.name}</h4>
                    <h3>{`R$${Math.floor(product.price)}`}</h3>
                    <p>{product.description}</p>
                </section>
                {/* <p>{product.description}</p> */}
            </section>
            {children}
            <button className="buyButton" type='button' onClick={()=>addProduct(product)}>
                <img src={img} style={{width:'13px'}}></img>
                <span>COMPRAR</span>
            </button>
        </ProductCardWrapper>
    )
}