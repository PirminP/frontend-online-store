import React, { Component } from 'react';
import cart from '../services/cart';
import '../styles/Carrinho.css';

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
      <main className="shopping-cart-container">
        {
          !cartList.length
            ? <p data-testid="shopping-cart-empty-message"> Seu carrinho está vazio </p>
            : cartList.map((product) => (
              <div
                key={ product.id }
                className="shopping-cart-product"
              >
                <div
                  data-testid="shopping-cart-product-name"
                  className="shopping-cart-product-name"
                >
                  {product.title}
                </div>
                <p
                  data-testid="shopping-cart-product-quantity"
                  className="shopping-cart-product-quantity"
                >
                  {`Quantidade: ${product.quantity}`}
                </p>
                <p
                  className="shopping-cart-product-price"
                >
                  {`Preço: ${product.price}`}
                </p>
                <img
                  src={ product.thumbnail }
                  alt={ product.title }
                  width="120px"
                />
                <button
                  className="product-decrease-quantity"
                  type="button"
                  data-testid="product-decrease-quantity"
                  onClick={ () => this.removeItem(product.id) }
                >
                  -
                </button>
                <button
                  className="product-increase-quantity"
                  type="button"
                  data-testid="product-increase-quantity"
                  onClick={ () => this.addItem(product) }
                >
                  +
                </button>
              </div>
            ))
        }
      </main>
    );
  }
}
