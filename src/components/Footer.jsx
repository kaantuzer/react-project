import './Footer.css';
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
        <div className="footer">

            <div className="home2">

                <footer>
                    <div className="footer1-2">
                        <div className="footer1">
                            <img src={logo} alt="logo" />
                            <div className="location">
                                <img src={icon1} alt="icon1" />
                                <p>123 Pizza Street, Food City</p>
                            </div>
                            <div className="email">
                                <img src={icon2} alt="icon2" />
                                <p>info@pizzashop.com</p>
                            </div>
                            <div className="telephone">
                                <img src={icon3} alt="icon3" />
                                <p>(123) 456-7890</p>
                            </div>
                        </div>
                        <div className="footer2">
                            <div className="title-footer2">
                                <h2>Sıcacık Menüler</h2>
                            </div>
                            <div className="content-footer2">

                                <p>Terminal Pizza</p>
                                <p>5 Kişilik Hackhatlon Pizza</p>
                                <p>UseEffect Tavuklu Pizza</p>
                                <p>Beyaz Console Pizza</p>
                                <p>Testler Geçti Mutlu Burger</p>
                                <p>Position Absolute Acı Burger</p>
                            </div>
                        </div>
                    </div>
                    <div className="footer3">
                        <h2>Instagram</h2>
                        <div className="fotolar">
                            <img src={insta1} alt="Instagram 1" />
                            <img src={insta2} alt="Instagram 2" />
                            <img src={insta3} alt="Instagram 3" />
                            <img src={insta4} alt="Instagram 4" />
                            <img src={insta5} alt="Instagram 5" />
                            <img src={insta6} alt="Instagram 6" />
                        </div>
                    </div>

                </footer>

                <hr style={{ marginTop: '3rem', height: '2px', backgroundColor: '#ccc', border: 'none' }} />

                <div className="footer-bottom">
                    <p className='footer-rights'>© 2023 Pizza Shop. All rights reserved.</p>
                    <img src={icon} alt="icon" />
                </div>

            </div>



        </div>
    );
}

export default Footer;