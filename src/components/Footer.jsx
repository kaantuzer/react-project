import logo from '../assets/images/footer/logo-footer.svg';
import icon1 from '../assets/images/footer/icons/icon-1.png';
import icon2 from '../assets/images/footer/icons/icon-2.png';
import icon3 from '../assets/images/footer/icons/icon-3.png';
import insta1 from '../assets/images/footer/insta/li-0.png'
import insta2 from '../assets/images/footer/insta/li-1.png'
import insta3 from '../assets/images/footer/insta/li-2.png'
import insta4 from '../assets/images/footer/insta/li-3.png'
import insta5 from '../assets/images/footer/insta/li-4.png'
import insta6 from '../assets/images/footer/insta/li-5.png'
import icon from '../assets/images/footer/icons/icon-1.png';
function Footer() {
    return (
        <div className="bg-darkGray flex flex-col lg:flex-row justify-between p-10 pt-20 ">

            <div className="container-pizza">

                <footer className='flex flex-col lg:flex-row justify-between '>
                    <div className="flex flex-col items-center lg:flex-row justify-between items-start lg:w-[45%] gap-6">
                        <div className="flex flex-col gap-10 ">
                            <img src={logo} alt="logo" />
                            <div className="flex gap-3 items-center">
                                <img src={icon1} alt="icon1" />
                                <p className='text-white font-semibold'>123 Pizza Street, Food City</p>
                            </div>
                            <div className="flex gap-3 items-center">
                                <img src={icon2} alt="icon2" />
                                <p className='text-white font-semibold'>info@pizzashop.com</p>
                            </div>
                            <div className="flex gap-3 items-center">
                                <img src={icon3} alt="icon3" />
                                <p className='text-white font-semibold'>(123) 456-7890</p>
                            </div>
                        </div>
                        <div className="p-5">
                            <div className="">
                                <h2 className='text-white text-4xl font-semibold mb-8'>Sıcacık Menüler</h2>
                            </div>
                            <div className="flex flex-col gap-3">

                                <p className='text-white font-normal text-xl'>Terminal Pizza</p>
                                <p className='text-white font-normal text-xl'>5 Kişilik Hackhatlon Pizza</p>
                                <p className='text-white font-normal text-xl'>UseEffect Tavuklu Pizza</p>
                                <p className='text-white font-normal text-xl'>Beyaz Console Pizza</p>
                                <p className='text-white font-normal text-xl'>Testler Geçti Mutlu Burger</p>
                                <p className='text-white font-normal text-xl'>Position Absolute Acı Burger</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-3">
                        <h2 className="text-white text-3xl font-bold mb-4">Instagram</h2>
                        <div className="grid grid-cols-3 gap-4">
                            <img src={insta1} alt="Instagram 1" />
                            <img src={insta2} alt="Instagram 2" />
                            <img src={insta3} alt="Instagram 3" />
                            <img src={insta4} alt="Instagram 4" />
                            <img src={insta5} alt="Instagram 5" />
                            <img src={insta6} alt="Instagram 6" />
                        </div>
                    </div>

                </footer>

                <hr className='my-5 mt-10' />

                <div className="flex justify-between">
                    <p className='text-white'>© 2023 Pizza Shop. All rights reserved.</p>
                    <img className='w-10 h-10 lg:w-auto lg:h-auto' src={icon} alt="icon" />
                </div>

            </div>



        </div>
    );
}

export default Footer;