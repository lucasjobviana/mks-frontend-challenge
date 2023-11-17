import { ProductCard } from '.';
import { useProductContext } from '../context';
import { MainWrapper } from '../styles';
import { TProduct } from '../types/Product.type';

export const Main = () => {
    const { products, isLoading } = useProductContext();

    return (
        <MainWrapper>
          {
            isLoading && <h1>Loading...</h1>
          }
          {
            !isLoading && products.map((product: TProduct) => (
                <ProductCard key={product.id} product={product} />
            ) )
          }       
        </MainWrapper>
    )
}