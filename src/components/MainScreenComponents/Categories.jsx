import { useHistory } from 'react-router-dom';
import pizza from '../../assets/images/pictures/food-1.png'
import pizza2 from '../../assets/images/pictures/food-2.png'
import hamburger from '../../assets/images/pictures/food-3.png'
import ramen1 from '../../assets/images/pictures/Ramen1.jpg'
import ramen2 from '../../assets/images/pictures/Ramen2.jpeg'
import burger1 from '../../assets/images/pictures/burger1.webp'
import burger2 from '../../assets/images/pictures/burger2.jpeg'
import burger3 from '../../assets/images/pictures/burger3.webp'
import patates1 from '../../assets/images/pictures/patates1.png'
import patates2 from '../../assets/images/pictures/patates2.jpeg'
import sosisli from '../../assets/images/pictures/sosisli.jpeg'
import tost from '../../assets/images/pictures/tost.jpeg'
import cola from '../../assets/images/pictures/cola.jpeg'
import cay from '../../assets/images/pictures/çay.jpg'


// import './Products.css'

const tumUrunler = [
    { id: 1, name: 'Margarita', kategori: 'Pizza', img: pizza, rate: 4.5, comment: "(200)", price: 180.99 },
    { id: 2, name: 'Pepperoni', kategori: 'Pizza', img: pizza2, rate: 3.9, comment: "(150)", price: 199.99 },
    { id: 10, name: 'Pizza', kategori: 'Pizza', img: pizza, rate: 4.5, comment: "(200)", price: 200.99 },
    { id: 15, name: 'Pizza', kategori: 'Pizza', img: pizza, rate: 4.5, comment: "(200)", price: 200.99 },

    { id: 3, name: 'Ramen1', kategori: 'Ramen', img: ramen1, rate: 5.0, comment: "(100)", price: 100.99 },
    { id: 4, name: 'Ramen2', kategori: 'Ramen', img: ramen2, rate: 4.8, comment: "(100)", price: 120.99 },
    { id: 5, name: 'Burger1', kategori: 'Burger', img: burger1, rate: 4.6, comment: "(200)", price: 169.99 },
    { id: 6, name: 'Burger2', kategori: 'Burger', img: burger2, rate: 4.3, comment: "(200)", price: 199.99 },
    { id: 11, name: 'Burger3', kategori: 'Burger', img: burger3, rate: 4.4, comment: "(200)", price: 129.99 },
    { id: 12, name: 'French Fries', kategori: 'Kızartmalar', img: patates1, rate: 4.0, comment: "(300)", price: 39.99 },
    { id: 14, name: 'French Fries2', kategori: 'Kızartmalar', img: patates2, rate: 4.0, comment: "(200)", price: 50.99 },
    { id: 7, name: 'Sosisli', kategori: 'Fast food', img: sosisli, rate: 4.0, comment: "(5200)", price: 80.99 },
    { id: 13, name: 'Tost', kategori: 'Fast food', img: tost, rate: 4.0, comment: "(200)", price: 59.99 },
    { id: 8, name: 'Cola', kategori: 'Gazlı İçecek', img: cola, rate: 4.2, comment: "(3200)", price: 25.99 },
    { id: 9, name: 'Çay', kategori: 'Gazlı İçecek', img: cay, rate: 4.1, comment: "(260)", price: 15.99 },


];


function Categories({ selectedCategory }) {

    const urunler = tumUrunler.filter(urun => urun.kategori === selectedCategory);
    const history = useHistory();

    function clickHandler(urun) {
        history.push("/Order", { urun });
    }

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-10">

            {urunler.map(urun => (
                <div className="flex flex-col justify-between max-w-full rounded-xl p-4 bg-white min-w-[100px] min-h-[100px]" key={urun.id} onClick={() => clickHandler(urun)}>
                    <img src={urun.img} alt={urun.name} />
                    <h3 className='text-sm md:text-base font-bold mt-1'>{urun.name}</h3>
                    <div className="flex justify-between items-center mt-2">
                        <p className='text-xs md:text-base font-bold'>{urun.rate}</p>
                        <p className='text-xs md:text-base text-gray-500'>{urun.comment}</p>
                        <p className='text-xs md:text-base font-bold'>{urun.price}₺</p>
                    </div>
                </div>

            ))}



        </div>
    );
}

export default Categories;