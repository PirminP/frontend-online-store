import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Carrinho extends Component {
  render() {
    return (
      <div data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio

        <Link
          to="/"
        >
          Início
        </Link>
      </div>
    );
  }
}
