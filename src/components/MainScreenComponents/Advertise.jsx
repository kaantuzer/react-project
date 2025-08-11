import resim1 from '../../assets/images/cta/kart-1.png';
import resim2 from '../../assets/images/cta/kart-2.png';
import resim3 from '../../assets/images/cta/kart-3.png';

function Advertise() {
    return (
        <div className="bg-bej py-10 md:py-20">
            <div className="container-pizza mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">

                {/* Sol: 2 kolon kaplayan büyük kart */}
                <div className="relative w-full lg:col-span-1">
                    <img className="w-full rounded-xl" src={resim1} alt="" />
                    <div className="absolute top-5 left-5 md:top-10 md:left-10 flex flex-col items-start gap-3">
                        <h1 className="text-xl lg:text-7xl text-white">Özel <br />Lezzetus</h1>
                        <p className="text-white text-sm lg:text-xl font-bold">Position: Absolute Acı Burger</p>
                        <button className="bg-white text-projectRed font-bold mt-2 py-3 px-5 rounded-full text-xs lg:text-base">Sipariş Ver</button>
                    </div>
                </div>

                {/* Sağ: 1 kolon kaplayan 2 küçük kart (üst üste) */}
                <div className="flex flex-col gap-6">

                    <div className="relative">
                        <img className="w-full rounded-xl" src={resim2} alt="" />
                        <div className="absolute top-5 left-5 md:top-10 md:left-10 flex flex-col items-start gap-3">
                            <h2 className="text-sm lg:text-2xl lg:text-3xl text-white font-bold">Hackhatlon <br /> Burger Menu</h2>
                            <button className="bg-white text-projectRed font-bold mt-2 py-3 px-5 rounded-full text-xs lg:text-base">Sipariş Ver</button>
                        </div>
                    </div>

                    <div className="relative">
                        <img className="w-full rounded-xl" src={resim3} alt="" />
                        <div className="absolute top-5 left-5 md:top-10 md:left-10 flex flex-col items-start gap-3">
                            <h2 className="text-sm lg:text-2xl text-black font-bold">
                                <span className="text-[#ce2829] p-0">Çooook hızlı</span><br />
                                npm gibi kurye
                            </h2>
                            <button className="bg-white text-projectRed font-bold mt-2 py-3 px-5 rounded-full text-xs lg:text-base">Sipariş Ver</button>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Advertise;
