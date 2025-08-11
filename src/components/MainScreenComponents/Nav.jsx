import icon1 from '../../assets/images/icons/1.svg';
import icon2 from '../../assets/images/icons/2.svg';
import icon3 from '../../assets/images/icons/3.svg';
import icon4 from '../../assets/images/icons/4.svg';
import icon5 from '../../assets/images/icons/5.svg';
import icon6 from '../../assets/images/icons/6.svg';

const icons = [
    { src: icon1, label: 'YENİ! Kore' },
    { src: icon2, label: 'Pizza' },
    { src: icon3, label: 'Burger' },
    { src: icon4, label: 'Kızartmalar' },
    { src: icon5, label: 'Fast food' },
    { src: icon6, label: 'Gazlı İçecek', isBold: true },
]
function Nav() {
    return (
        <div className="container-pizza text-center">
            <nav className="flex mx-auto gap-4 justify-around  w-full p-8 lg:justify-between items-center flex-wrap md:flex-nowrap">
                {
                    icons.map((icon, index) => (
                        <div key={index} className="flex flex-col xl:flex-row items-center gap-3 text-lg font-semibold w-[40%] md:w-auto">
                            <img className='h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10' src={icon.src} alt={icon.label} />
                            <p className={`text-xs md:text-sm lg:text-lg ${icon.isBold ? 'font-bold' : 'font-semibold'}`}>{icon.label}</p>
                        </div>
                    ))
                }


            </nav>
        </div>
    )
}

export default Nav;