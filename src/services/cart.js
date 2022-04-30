const setItems = (newCartStorage) => {
  localStorage.setItem('cart', JSON.stringify(newCartStorage));
};

const getItems = () => {
  const getCartList = localStorage.getItem('cart');
  const cartList = getCartList ? JSON.parse(getCartList) : [];
  return cartList;
};

const addItem = (item) => {
  const items = getItems().concat(item);
  setItems(items);
};

export default {
  getItems,
  setItems,
  addItem,
};
