import './HomeAlti.css';
import resim1 from '../../assets/images/cta/kart-1.png'
import resim2 from '../../assets/images/cta/kart-2.png'
import resim3 from '../../assets/images/cta/kart-3.png'
function HomeAlti() {
    return (
        <div className="bej">
            <div className="home2">
                <div className="reklams">
                    <div className="div1">

                        <img src={resim1} alt="" />
                        <div className="bilgiler">

                            <h1>Özel <br />Lezzetus</h1>
                            <p>Position: Absolute Acı Burger</p>
                            <button>Sipariş Ver</button>
                        </div>

                    </div>
                    <div className="div2">
                        <div className="div2-1"><img src={resim2} alt="" />
                            <div className="bilgiler">

                                <h2>Hackhatlon Burger Menu</h2>

                                <button>Sipariş Ver</button>
                            </div>
                        </div>
                        <div className="div2-2"><img src={resim3} alt="" />
                            <div className="bilgiler">
                                <h2> <span className='special'>Çooook hızlı </span> <br />npm gibi kurye</h2>
                                <button>Sipariş Ver</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default HomeAlti;