/**
 * Internal Dependencies
 */
import { GET_PRODUCTS_ENDPOINT, HEADER_FOOTER_ENDPOINT } from '../src/utils/constants/endpoints';
import Products from '../src/components/products';
import Layout from '../src/components/layout';
import { getProductsData } from '../src/utils/products';

/**
 * External Dependencies
 */
import axios from 'axios';

export default function Home({ headerFooter, products }) {
  return (
    <Layout headerFooter={headerFooter}>
      <Products products={products} />
    </Layout>
  );
}

export async function getStaticProps() {
  const { data: headerFooterData } = await axios.get(HEADER_FOOTER_ENDPOINT);
  const { data: products } = await getProductsData();

  return {
    props: {
      headerFooter: headerFooterData?.data ?? {},
      products: products ?? {},
    },

    /**
     *  Revalidate means that if a new request comes to server, then every 1 sec it
     *  will check if the data is change,m if it is change then it will update the
     *  static file inside .next folder with the new data, so that any 'SUBSEQUENT'
     *  request should have updated data.
     */
    revalidate: 1,
  };
}
