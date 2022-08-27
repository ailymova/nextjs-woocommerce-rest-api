/**
 * Internal Dependencies
 */
import { HEADER_FOOTER_ENDPOINT } from '../src/utils/constants/endpoints';
import Footer from '../src/components/layouts/footer';
import Header from '../src/components/layouts/header';

/**
 * External Dependencies
 */
import axios from 'axios';

export default function Home({ data }) {
  const { header, footer } = data;

  return (
    <div>
      <Header header={header} />

      <main>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <p className="text-green-600">This is a red text</p>
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const { data } = await axios.get(HEADER_FOOTER_ENDPOINT);

  return {
    props: data || {},

    /**
     *  Revalidate means that if a new request comes to server, then every 1 sec it
     *  will check if the data is change,m if it is change then it will update the
     *  static file inside .next folder with the new data, so that any 'SUBSEQUENT'
     *  request should have updated data.
     */
    revalidate: 1,
  };
}
