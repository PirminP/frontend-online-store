import React, { Component } from 'react';
import { Link } from 'react-router-dom';
/* import CartItem from '../components/CartItemCard'; */

export default class Carrinho extends Component {
  render() {
    const getCartList = localStorage.getItem('cart');
    const cartList = JSON.parse(getCartList);
    const getQuantity = (id) => cartList.filter((product) => product.id === id).length;

    return (
      <div>
        {!cartList
          ? <p data-testid="shopping-cart-empty-message"> Seu carrinho está vazio </p>
          : cartList.map((product) => (
            <div
              key={ product.id }
            >
              <div
                data-testid="shopping-cart-product-name"
              >
                {product.title}
              </div>

              <p
                data-testid="shopping-cart-product-quantity"
              >
                {`Quantidade: ${getQuantity(product.id)}`}
              </p>

              <p>
                {`Preço: ${product.price}`}
              </p>

              <img
                src={ product.thumbnail }
                alt={ product.title }
              />

            </div>

            /* <CartItem
              key={ product.id }
              cartItemName={ product.title }
              cartItemPrice={ product.price }
              cartItemImage={ product.thumbnail }
              cartItemQuantity={ product.available_quantity }
            /> */
          ))}
        <Link
          to="/"
        >
          Início
        </Link>
      </div>
    );
  }
}
