/* eslint-disable react/jsx-max-depth */
/* eslint-disable max-len */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import {
  getCategories,
  getProductsFromCategory,
  getProductsFromQuery } from '../services/api';
import cart from '../services/cart';
import '../App.css';
import '../styles/Search.css';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      categoriesState: [],
      inputValue: '',
      fetchProducts: [],
    };
  }

  async componentDidMount() {
    const categories = await getCategories();
    this.setState({
      categoriesState: categories,
    });
    this.handleCategoryClick({ target: { id: categories[0].id } });
    // const auxVar = await getProductsFromCategory(categories[0].id);
    /* this.setState({
      fetchProducts: auxVar,
    }); */
    /* const fetchLocalStorage = localStorage.getItem('cart');
    const cartList = JSON.parse(fetchLocalStorage);
    if (cartList) {
      this.setState({
        cartStorage: id,
      });
    } */
    // localStorage.setItem('cart', []);
  }

  handleChange = ({ target: { name, value } }) => {
    // const { name, value } = target;
    this.setState(({ [name]: value }));
  }

  handleSearchProducts = async () => {
    const { inputValue } = this.state;
    const { results } = await getProductsFromQuery(inputValue);
    this.setState({ fetchProducts: results });
  }

  handleCategoryClick = async ({ target: { id } }) => {
    const { results } = await getProductsFromCategory(id);
    this.setState({ fetchProducts: results });
  }

  addToCart = ({ target: { id } }) => {
    const { fetchProducts } = this.state;
    const getProduct = fetchProducts.find((product) => product.id === id);
    cart.addItem(getProduct);
  }

  render() {
    const {
      categoriesState,
      inputValue,
      fetchProducts,
    } = this.state;
    return (
      <div className="home-container">
        <aside className="home-aside-content">
          <h3>
            Categorias:
          </h3>
          <section className="section-aside-content">
            {
              categoriesState.map((category) => (
                <ul
                  key={ category.id }
                  data-testid="category"
                >
                  <button
                    type="button"
                    id={ category.id }
                    onClick={ this.handleCategoryClick }
                  >
                    { category.name }
                  </button>
                </ul>
              ))
            }
          </section>
        </aside>
        <div className="home-content">
          <p
            data-testid="home-initial-message"
            className="home-initial-message"
          >
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          <div className="home-header-content">
            <label htmlFor="query-input">
              <input
                className="home-input-text"
                type="text"
                value={ inputValue }
                name="inputValue"
                data-testid="query-input"
                onChange={ this.handleChange }
              />
              <button
                className="home-input-button"
                type="button"
                data-testid="query-button"
                onClick={ this.handleSearchProducts }
              >
                Pesquisar
              </button>
            </label>
            <Link
              className="shopping-cart-button"
              to="/carrinho"
              data-testid="shopping-cart-button"
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                <path d="M14.35 43.95Q12.85 43.95 11.8 42.9Q10.75 41.85 10.75 40.35Q10.75 38.85 11.8 37.8Q12.85 36.75 14.35 36.75Q15.8 36.75 16.875 37.8Q17.95 38.85 17.95 40.35Q17.95 41.85 16.9 42.9Q15.85 43.95 14.35 43.95ZM34.35 43.95Q32.85 43.95 31.8 42.9Q30.75 41.85 30.75 40.35Q30.75 38.85 31.8 37.8Q32.85 36.75 34.35 36.75Q35.8 36.75 36.875 37.8Q37.95 38.85 37.95 40.35Q37.95 41.85 36.9 42.9Q35.85 43.95 34.35 43.95ZM11.75 10.95 17.25 22.35H31.65Q31.65 22.35 31.65 22.35Q31.65 22.35 31.65 22.35L37.9 10.95Q37.9 10.95 37.9 10.95Q37.9 10.95 37.9 10.95ZM10.25 7.95H39.7Q41.3 7.95 41.725 8.925Q42.15 9.9 41.45 11.1L34.7 23.25Q34.2 24.1 33.3 24.725Q32.4 25.35 31.35 25.35H16.2L13.4 30.55Q13.4 30.55 13.4 30.55Q13.4 30.55 13.4 30.55H37.95V33.55H13.85Q11.75 33.55 10.825 32.15Q9.9 30.75 10.85 29L14.05 23.1L6.45 7H2.55V4H8.4ZM17.25 22.35H31.65Q31.65 22.35 31.65 22.35Q31.65 22.35 31.65 22.35Z" />
              </svg>
            </Link>
          </div>
          <div className="home-container-product-list">
            {
              fetchProducts
            && fetchProducts.map((product) => (
              <div
                className="home-product-list"
                key={ product.id }
              >
                <Link
                  data-testid="product-detail-link"
                  key={ product.id }
                  to={ `/product-details/${product.id}` }
                >
                  <ProductCard
                    productName={ product.title }
                    productImage={ product.thumbnail }
                    productPrice={ product.price }
                  />
                </Link>
                <button
                  className="card-product-button"
                  data-testid="product-add-to-cart"
                  id={ product.id }
                  onClick={ this.addToCart }
                  type="button"
                >
                  Adicionar ao Carrinho
                </button>
              </div>
            ))
            }
          </div>
        </div>
      </div>
    );
  }
}
