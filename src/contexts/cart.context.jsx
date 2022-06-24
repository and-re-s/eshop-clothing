import { createContext, useEffect, useReducer } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const isItemInCart = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (isItemInCart) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: ++cartItem.quantity }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: --cartItem.quantity }
      : cartItem
  );
};

const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

export const CartContext = createContext({
  setIsCartOpen: () => {},
  addItemToCart: () => {},
  removeItemfromCart: () => {},
  clearItemFromCart: () => {},
});

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  totalPrice: 0,
};

export const CART_ACTION_TYPES = {
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_CART_COUNT: "SET_CART_COUNT",
  SET_TOTAL_PRICE: "SET_TOTAL_PRICE",
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload,
      };
    case CART_ACTION_TYPES.SET_CART_COUNT:
      return {
        ...state,
        cartCount: payload,
      };
    case CART_ACTION_TYPES.SET_TOTAL_PRICE:
      return {
        ...state,
        totalPrice: payload,
      };
    default:
      throw new Error(`Unhandled type of ${type} in cartReducer`);
  }
};

export const CartProvider = ({ children }) => {
  // const [isCartOpen, setIsCartOpen] = useState(false);
  // const [cartItems, setCartItems] = useState([]);
  // const [cartCount, setCartCount] = useState(0);
  // const [totalPrice, setTotalPrice] = useState(0);

  const [{ isCartOpen }, dispatchCartOpen] = useReducer(
    cartReducer,
    INITIAL_STATE
  );
  const [{ cartItems }, dispatchCartItems] = useReducer(
    cartReducer,
    INITIAL_STATE
  );
  const [{ cartCount }, dispatchCartCount] = useReducer(
    cartReducer,
    INITIAL_STATE
  );
  const [{ totalPrice }, dispatchTotalPrice] = useReducer(
    cartReducer,
    INITIAL_STATE
  );

  const setIsCartOpen = (param) => {
    dispatchCartOpen({
      type: CART_ACTION_TYPES.SET_IS_CART_OPEN,
      payload: param,
    });
  };
  const setCartItems = (param) => {
    dispatchCartItems({
      type: CART_ACTION_TYPES.SET_CART_ITEMS,
      payload: param,
    });
  };
  const setCartCount = (param) => {
    dispatchCartCount({
      type: CART_ACTION_TYPES.SET_CART_COUNT,
      payload: param,
    });
  };
  const setTotalPrice = (param) => {
    dispatchTotalPrice({
      type: CART_ACTION_TYPES.SET_TOTAL_PRICE,
      payload: param,
    });
  };

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (totalSum, cartItem) => totalSum + cartItem.quantity * cartItem.price,
      0
    );
    setTotalPrice(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };

  const clearItemFromCart = (cartItemToClear) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
    removeItemFromCart,
    clearItemFromCart,
    totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
