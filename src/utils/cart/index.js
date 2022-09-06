import axios from 'axios';
import { isEmpty } from 'lodash';
import { CART_ENDPOINT } from '../constants/endpoints';
import { getAddOrViewCartConfig } from './api';
import { getSession, storeSession } from './session';

/**
 * Add To Cart Request Handler.
 *
 * @param {int} productId Product Id.
 * @param {int} qty Product Quantity.
 * @param {Function} setCart
 * @param {Function} setIsAddedToCart
 * @param {Function} setLoading
 */

export const addToCart = (productId, qty = 1, setCart, setIsAddedToCart, setLoading) => {
  const storedSession = getSession();
  const addOrViewCartConfig = getAddOrViewCartConfig();

  setLoading(true);

  axios
    .post(
      CART_ENDPOINT,
      {
        product_id: productId,
        quantity: qty,
      },
      addOrViewCartConfig
    )
    .then(res => {
      if (isEmpty(storedSession)) {
        storeSession(res?.headers?.['x-wc-session']);
      }
      setIsAddedToCart(true);
      setLoading(false);
      viewCart(setCart);
    })
    .catch(err => {
      setLoading(false);
      console.log('err', err);
    });
};

/**
 * View Cart Request Handler
 */
export const viewCart = setCart => {
  const addOrViewCartConfig = getAddOrViewCartConfig();

  axios
    .get(CART_ENDPOINT, addOrViewCartConfig)
    .then(res => {
      console.log('res', res);
    })
    .catch(err => {
      console.log('err', err);
    });
};
