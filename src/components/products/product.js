import { sanitize } from '../../utils/miscellaneous';
import AddToCart from '../cart/add-to-cart';
import Image from '../image';
import Link from 'next/link';
import { isEmpty } from 'lodash';

const Product = ({ product }) => {
  if (isEmpty(product)) {
    return null;
  }

  const img = product?.images?.[0] ?? {};
  const productType = product?.type ?? '';

  return (
    <div key={product?.id} className="my-2 px-2 w-full overflow-hidden sm:w-1/2 md:w-1/3 xl:w-1/4">
      <Link href={product?.permalink ?? '/'}>
        <a>
          <Image sourceUrl={img?.src ?? ''} altText={img?.alt} title={product?.name ?? ''} layout="fill" containerClassNames="w-full h-80" />
          <h3 className="font-lato-bold uppercase">{product?.name ?? ''}</h3>
          <div dangerouslySetInnerHTML={{ __html: sanitize(product?.price_html ?? '') }} />
        </a>
      </Link>

      {'simple' === productType ? <AddToCart product={product} /> : null}
    </div>
  );
};

export default Product;
