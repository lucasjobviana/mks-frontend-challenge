import { ProductCard } from '.';
import { useProductContext } from '../context';
import { MainWrapper } from '../styles';
import { J_Skeleton } from '../tools/J_Skeleton';
import { TProduct } from '../types/Product.type';

export const Main = () => {
    const { products, isLoading } = useProductContext();
    const nullProduct = { id: 0, name: '', price: 0, image: '', description: ''}
    const nullProducts = Array(8).fill(nullProduct);

    return (
        <MainWrapper>
          {
             isLoading && nullProducts.map((product: TProduct) => (
              <J_Skeleton isLoading={isLoading} >
              <ProductCard key={product.id} product={product} />
              </J_Skeleton>
            
          ) )
          }
          {
             !isLoading && products.map((product: TProduct) => (
              
                <ProductCard key={product.id} product={product} />
              
            ) )
          }       
        </MainWrapper>
    )
}