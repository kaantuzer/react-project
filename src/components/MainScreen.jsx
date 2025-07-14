import './MainScreen.css';
import Home2 from './it2/home2';
import reactLogo from '../assets/logo.svg';
import Logo from './Logo.jsx';
import HomeAlti from './it2/HomeAlti';
import Onemli from './it2/Onemli.jsx';
function Main(props) {
  const { goToSiparis } = props;

  return (
    <>
      <main className="main">
        <Logo />
        <h1 className='title'>KOD ACIKTIRIR<br />PIZZA, DOYURUR</h1>
        <button className='aciktimButton' onClick={goToSiparis}>ACIKTIM</button>
      </main>
      <Home2 />
      <HomeAlti />
      <Onemli />
    </>

  );
}

export default Main;

// label class ve onclick genelde gönderilebilir.
//button comp yapıalbilier.