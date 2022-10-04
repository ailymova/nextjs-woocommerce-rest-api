import { AppProvider } from '../context';
import Footer from '../layout/footer';
import Header from '../layout/header';

const Layout = ({ children, headerFooter }) => {
  const { header, footer } = headerFooter || {};
  return (
    <AppProvider>
      <div>
        <Header header={header} />

        <main className="container mx-auto py-4">{children}</main>

        <Footer footer={footer} />
      </div>
    </AppProvider>
  );
};

export default Layout;
