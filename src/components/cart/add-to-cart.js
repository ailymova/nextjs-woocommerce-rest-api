import { isEmpty } from 'lodash';
import { useContext, useState } from 'react';
import { addToCart } from '../../utils/cart';
import { AppContext } from '../context';
import cx from 'classnames';
import Link from 'next/link';

const AddToCart = ({ product }) => {
  const [cart, setCart] = useContext(AppContext);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [loading, setLoading] = useState(false);
  const addToCartBtnClasses = cx('text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow', {
    'bg-whit hover:br-gray-100': !loading,
    'bg-gray-200': loading,
  });

  if (isEmpty(product)) {
    return null;
  }

  return (
    <>
      <button
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        onClick={() => addToCart(product?.id ?? 0, 1, setCart, setIsAddedToCart, setLoading)}
        disabled={loading}>
        {loading ? 'Adding...' : 'Add to cart'}
      </button>
      {isAddedToCart && !loading ? (
        <Link href="/cart">
          <span className="bg-white hover:bg-gray-100 text-gray-800 font-semibold ml-4 py-11px px-4 border border-gray-400 rounded shadow">View cart</span>
        </Link>
      ) : (
        ''
      )}
    </>
  );
};

export default AddToCart;
