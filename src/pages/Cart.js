import { useTitle } from "../hooks/useTitle";
import { CartCard } from "../components";

const products = [
  {id: 1, "name": "Sony Wh-Ch510 Bluetooth Wireless", "price": 149, "image": "/assets/images/1001.png",}, 
  {id: 2, "name": "boAt Rockerz 450", "price": 49, "image": "/assets/images/1002.png",}, 
]

export const Cart = () => {
useTitle("Cart");
  return (
    <main>
    <section className='cart'>
      <h1>Cart Items: {products.length}</h1>
      {products.map((product) => (
        <CartCard key={product.id} product={product} />
      ))}
    </section>
  </main>
  )
}
