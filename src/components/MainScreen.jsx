import './MainScreen.css';
import Nav from './it2/Nav.jsx';
import Advertise from './it2/Advertise.jsx';
import Products from './it2/Products.jsx';
import reactLogo from '../assets/logo.svg';
function Main(props) {
  const { goToSiparis } = props;

  return (
    <>
      <main className="main">
        <img src={reactLogo} className="logo" alt="High logo" />
        <h1 className='title'>KOD ACIKTIRIR<br />PIZZA, DOYURUR</h1>
        <button className='aciktimButton' onClick={goToSiparis}>ACIKTIM</button>
      </main>
      <Nav />
      <Advertise />
      <Products />
    </>

  );
}

export default Main;

// label class ve onclick genelde gönderilebilir.
//button comp yapıalbilier.