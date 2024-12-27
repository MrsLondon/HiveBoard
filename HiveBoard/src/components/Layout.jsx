import PropTypes from 'prop-types';
import Navbar from './Navbar'; // Adjust the path as needed
import Footer from './Footer'; // Optional footer

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired, // Define `children` as a required prop
  };
export default Layout;
