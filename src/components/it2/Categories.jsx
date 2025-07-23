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


import './Products.css'

const tumUrunler = [
    { id: 1, ad: 'Margarita', kategori: 'pizza', img: pizza, rate: 4.5, comment: "(200)", price: 12.99 },
    { id: 2, ad: 'Pepperoni', kategori: 'pizza', img: pizza2, rate: 3.9, comment: "(150)", price: 11.99 },
    { id: 10, ad: 'Pizza', kategori: 'pizza', img: pizza, rate: 4.5, comment: "(200)", price: 12.99 },
    { id: 3, ad: 'Ramen1', kategori: 'Ramen', img: ramen1, rate: 5.0, comment: "(100)", price: 10.99 },
    { id: 4, ad: 'Ramen2', kategori: 'Ramen', img: ramen2, rate: 4.8, comment: "(100)", price: 10.99 },
    { id: 5, ad: 'Burger1', kategori: 'Burger', img: burger1, rate: 4.6, comment: "(200)", price: 16.99 },
    { id: 6, ad: 'Burger2', kategori: 'Burger', img: burger2, rate: 4.3, comment: "(200)", price: 19.99 },
    { id: 11, ad: 'Burger3', kategori: 'Burger', img: burger3, rate: 4.4, comment: "(200)", price: 12.99 },
    { id: 12, ad: 'French Fries', kategori: 'French Fries', img: patates1, rate: 4.0, comment: "(300)", price: 3.99 },
    { id: 14, ad: 'French Fries2', kategori: 'French Fries', img: patates2, rate: 4.0, comment: "(200)", price: 1.99 },
    { id: 7, ad: 'Sosisli', kategori: 'Fast Food', img: sosisli, rate: 4.0, comment: "(5200)", price: 8.99 },
    { id: 13, ad: 'Tost', kategori: 'Fast Food', img: tost, rate: 4.0, comment: "(200)", price: 5.99 },
    { id: 8, ad: 'Cola', kategori: 'Soft Drink', img: cola, rate: 4.2, comment: "(3200)", price: 2.99 },
    { id: 9, ad: 'Çay', kategori: 'Soft Drink', img: cay, rate: 4.1, comment: "(260)", price: 1.99 },




];


function Categories({ selectedCategory }) {

    const urunler = tumUrunler.filter(urun => urun.kategori === selectedCategory);
    const history = useHistory();

    function clickHandler(urun) {
        history.push("/Order", { urun });
    }

    return (
        <>

            {urunler.map(urun => (
                <div className="card" key={urun.id} onClick={() => clickHandler(urun)}>
                    <img src={urun.img} alt={urun.ad} />
                    <h3>{urun.ad}</h3>
                    <div className="bottom">
                        <p>{urun.rate}</p>
                        <p>{urun.comment}</p>
                        <p>{urun.price}₺</p>
                    </div>
                </div>

            ))}



        </>
    );
}

export default Categories;