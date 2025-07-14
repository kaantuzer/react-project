import './home2.css'
import icon1 from '../../assets/images/icons/1.svg';
import icon2 from '../../assets/images/icons/2.svg';
import icon3 from '../../assets/images/icons/3.svg';
import icon4 from '../../assets/images/icons/4.svg';
import icon5 from '../../assets/images/icons/5.svg';
import icon6 from '../../assets/images/icons/6.svg';
function Home2() {
    return (
        <div className="home2">
            <nav className="nav">
                <div className="packed">
                    <img src={icon1} alt="" />
                    <p href="/">deneme</p>
                </div>
                <div className="packed">
                    <img src={icon2} alt="" />
                    <p href="/">Anasayfa</p>
                </div>
                <div className="packed">
                    <img src={icon3} alt="" />
                    <p href="/">Ürünler</p>
                </div>
                <div className="packed">
                    <img src={icon4} alt="" />
                    <p href="/">Hakkımızda</p>
                </div>
                <div className="packed">
                    <img src={icon5} alt="" />
                    <p href="/">İletişim</p>
                </div>
                <div className="packed">
                    <img src={icon6} alt="" />
                    <p href="/">Diğer</p>
                </div>

            </nav>
        </div>
    )
}

export default Home2;