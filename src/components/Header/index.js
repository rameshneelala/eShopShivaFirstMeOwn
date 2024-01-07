import React from 'react';
import {Link} from 'react-router-dom'
import './index.css';
// import logo from './logo.svg';

import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import CartContext from '../../CartContext';


const Header = () => (
  <CartContext.Consumer>
  {value => {
    const {productList} = value

  return (
    <div className='header'>
      <Link to='/'>
      <div className="header_logo">
        <StorefrontIcon className='header_logoImage' fontSize='large' />
        <h2 className='header_logoTitle'>eShop</h2>
      </div>
      </Link>

      <div className="header_search">
        <input type='text' className='header_searchInput' />
        <SearchIcon className='header_searchIcon' />
      </div>

      <div className="header_nav">
        <Link to='/login'>        
        <div className="nav_item">
          <span className="nav_itemLineOne">Hello Guest</span>
          <span className="nav_itemLineTwo">Sign In</span>
        </div>
        </Link>

        <div className="nav_item">
          <span className="nav_itemLineOne">Your</span>
          <span className="nav_itemLineTwo">Shop</span>
        </div>
        <Link to='/Checkout'>
        <div className="nav_itemLast">
          <ShoppingBasketIcon />
          <span className="nav_itemLineOne nav_basketCount">{productList.length}</span>
        </div>
        </Link>

      </div>

    </div>
    )
  }} 
</CartContext.Consumer>
)

export default Header
