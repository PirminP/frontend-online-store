import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Search extends Component {
  render() {
    return (
      <div data-testid="home-initial-message">
        <input
          type="text"
          name="search"
        />

        <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
        <Link
          to="/carrinho"
        >
          <input type="button" data-testid="shopping-cart-button" />
        </Link>
      </div>
    );
  }
}
