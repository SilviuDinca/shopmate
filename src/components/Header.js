import './Header.css'
import { Link, NavLink } from 'react-router-dom'
import Logo from "../assets/logo.png"
import { CartContext, useCart } from "../context/CardContext";

export const Header = () => {
  const {cartList} = useCart(CartContext)
  return (
    <header>
      <Link to="/" className='logo'>
        <img src={Logo} alt='Logo' />
        <span>Shopping Cart</span>
      </Link>
      <nav className='navigation'>
        <NavLink to="/" className="link" end >Home</NavLink>
        <NavLink to="/cart" className="link" end >Cart</NavLink>
      </nav>
      <Link to="/cart" className='items'>
        <span>Cart: {cartList.length}</span>
      </Link>
    </header>
  )
}
