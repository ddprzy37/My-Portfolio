
import { Element } from 'react-scroll'
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App () {
  return (
    <>
      <Element />
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;

