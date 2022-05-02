let ITEMS;

const setItems = (newCartStorage) => {
  ITEMS = newCartStorage;
  localStorage.setItem('cart', JSON.stringify(newCartStorage));
};

const getItems = () => {
  if (!ITEMS) {
    const getCartList = localStorage.getItem('cart');
    ITEMS = getCartList ? JSON.parse(getCartList) : [];
  }
  return ITEMS;
};

const addItem = (item) => {
  const items = getItems();
  let newItem = items.find((element) => element.id === item.id);
  if (!newItem) {
    newItem = item;
    items.push(newItem);
  }
  if (newItem.quantity) {
    newItem.quantity += 1;
  } else {
    newItem.quantity = 1;
  }
  setItems(items);
};

const removeItem = (id) => {
  let items = getItems();
  const newItem = items.find((item) => item.id === id);
  if (newItem.quantity === 1) {
    items = items.filter((item) => item.id !== id);
  } else {
    newItem.quantity -= 1;
  }
  setItems(items);
};

export default {
  getItems,
  addItem,
  removeItem,
};
