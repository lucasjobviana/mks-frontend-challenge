import { ShopMenuWrapper } from '../styles';
import { useShopCartContext } from '../context';
import { ProductInCartCard } from '.';

export const ShopMenu = () => {
  const { shopCart, toggleMenu, display } = useShopCartContext();
  const total = shopCart.reduce((acc, item) => acc + (item.product.price * item.quantity), 0).toFixed(2)
   
    return (
        <ShopMenuWrapper style={{display}}>
          <section className='head'>
            <h1>Carrinho de Compras</h1>
            <button type='button' onClick={()=>toggleMenu()} style={{color:'white'}}>
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
<circle cx="19" cy="19" r="19" fill="black"/>
</svg> */}x
            </button>
          </section>

          <section className='products'>
            { 
              shopCart && 
              shopCart.map((item) => (
                <ProductInCartCard key={`cartItem-${item.product.id}`} item={item} />
              ))
            }
          </section>

          <section className='price'>
            <h1>Total</h1>
            <h1>{total}</h1>
          </section>

          <button type='button' className='finally'>Finalizar Compra</button>  
        </ShopMenuWrapper>
    )
}