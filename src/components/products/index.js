import { isArray, isEmpty } from 'lodash';
import Product from './product';

const Products = ({ products }) => {
  if (isEmpty(products) || !isArray(products)) {
    return null;
  }

  return (
    <div className="flex flex-wrap -mx-2 overflow-hidden">
      {products.length
        ? products.map(product => {
            return <Product product={product} key={product?.id} />;
          })
        : null}
    </div>
  );
};

export default Products;
