
import { Element } from 'react-scroll'
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';

function App () {
  return (
    <>
      <Element />
      <Nav />
      <Outlet />
    </>
  );
};

export default App;

