import React, { useState, useEffect } from 'react';

export const AppContext = React.createContext([{}, () => {}]);

export const AppProvider = props => {
  const [cart, setCart] = useState(null);

  /**
   * This will be called once on initial load (component mount).
   *
   * Sets the cart data from localStorage to 'cart' in the context.
   */
  useEffect(() => {
    if (process.browser) {
      let cartData = localStorage.getItem('next-cart');
      cartData = null !== cartData ? JSON.parse(cartData) : '';
      console.log('cartData', cartData);
      setCart(cartData);
    }
  }, []);

  /**
   *
   * 1. When setCart() is called taht changes the value of 'cart',
   *    this will set the new data in the localStorage
   *
   * 2. The 'cart' will anyway have the new data, as setCart()
   *    would have set that
   *
   */
  useEffect(() => {
    if (process.browser) {
      localStorage.setItem('next-cart', JSON.stringify(cart));
    }
  }, [cart]);

  return <AppContext.Provider value={[cart, setCart]}>{props.children}</AppContext.Provider>;
};
