
import icon1 from '../../assets/images/icons/1.svg';
import icon2 from '../../assets/images/icons/2.svg';
import icon3 from '../../assets/images/icons/3.svg';
import icon4 from '../../assets/images/icons/4.svg';
import icon5 from '../../assets/images/icons/5.svg';
import icon6 from '../../assets/images/icons/6.svg';


const icons = [
    { src: icon1, label: 'Ramen' },
    { src: icon2, label: 'Pizza' },
    { src: icon3, label: 'Burger' },
    { src: icon4, label: 'Kızartmalar' },
    { src: icon5, label: 'Fast food' },
    { src: icon6, label: 'Gazlı İçecek' },
]

export const buttons = [
    { id: 'ramen', value: 'Ramen' },
    { id: 'pizza', value: 'Pizza' },
    { id: 'burger', value: 'Burger' },
    { id: 'french-fries', value: 'French Fries' },
    { id: 'fast-food', value: 'Fast Food' },
    { id: 'soft-drink', value: 'Soft Drink' },
];


function ProductsButton({ setSelectedCategory, selectedCategory }) {



    return (
        <div className='grid grid-cols-3 gap-3 lg:flex lg:justify-center lg:gap-10 pb-16'>
            {icons.map(icon => {
                const isSelected = selectedCategory === icon.label;

                return (
                    <div key={icon.label}>
                        <button
                            onClick={() => setSelectedCategory(icon.label)}
                            className={`px-6 py-4  text-xs md:text-base flex flex-col lg:flex-row items-center gap-4 rounded-full lg:px-12 lg:py-6 font-semibold transition 
                ${isSelected ? 'bg-black text-white' : 'bg-white text-black'} min-w-[120px]`}
                        >
                            <img src={icon.src} alt={icon.label} className="w-6 w-6 lg:w-auto lg:h-auto" />
                            {icon.label}
                        </button>
                    </div>
                );
            })}
        </div>
    );
}
export default ProductsButton;