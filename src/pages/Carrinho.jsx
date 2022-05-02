import React, { Component } from 'react';
import { Link } from 'react-router-dom';
/* import CartItem from '../components/CartItemCard'; */
import cart from '../services/cart';

export default class Carrinho extends Component {
  constructor() {
    super();
    this.state = {
      cartList: [],
    };
  }

  componentDidMount() {
    this.getItems();
  }

  getItems() {
    const cartList = cart.getItems();
    this.setState({ cartList });
  }

  addItem(product) {
    cart.addItem(product);
    this.getItems();
  }

  removeItem(id) {
    cart.removeItem(id);
    this.getItems();
  }

  render() {
    const { cartList } = this.state;
    return (
      <div>
        {
          !cartList.length
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
                  {`Quantidade: ${product.quantity}`}
                </p>

                <p>
                  {`Preço: ${product.price}`}
                </p>

                <img
                  src={ product.thumbnail }
                  alt={ product.title }
                />

                <button
                  type="button"
                  data-testid="product-decrease-quantity"
                  onClick={ () => this.removeItem(product.id) }
                >
                  -
                </button>

                <button
                  type="button"
                  data-testid="product-increase-quantity"
                  onClick={ () => this.addItem(product) }
                >
                  +
                </button>

              </div>
            ))
        }
        <Link to="/">Início</Link>
      </div>
    );
  }
}
