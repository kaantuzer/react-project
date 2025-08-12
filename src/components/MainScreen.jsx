
import Nav from './MainScreenComponents/Nav.jsx';
import Advertise from './MainScreenComponents/Advertise.jsx';
import Products from './MainScreenComponents/Products.jsx';
import reactLogo from '../assets/logo.svg';
function Main(props) {
  const { goToSiparis } = props;

  return (
    <>
      <main className="bg-[url('/home-banner.png')]  h-screen max-w-full bg-cover bg-center bg-no-repeat bg-scroll md:bg-fixed p-6 md:p-12 flex flex-col items-center justify-start text-center gap-2">

        <img src={reactLogo} className="w-60 md:w-80" alt="High logo" />

        <h1 className='text-white text-6xl md:text-7xl lg:text-8xl font-extralight p-5 '>KOD ACIKTIRIR<br />PIZZA, DOYURUR</h1>

        <button className='bg-buttonYellow cursor-pointer text-black font-light px-12 py-3 text-sm md:px-16 md:text-md lg:px-18 lg:text-lg rounded-full ' onClick={goToSiparis}>ACIKTIM</button>
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