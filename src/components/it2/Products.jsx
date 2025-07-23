import './Products.css';
import ProductsButton from './ProductsButton.jsx';
import Categories from './Categories.jsx';
import { useState } from 'react';

function Products() {
    const [selectedCategory, setSelectedCategory] = useState('pizza');

    return (
        <div className="OnemliContainer bej">

            <div className="home2">
                <h1>Acıktıran Kodlara Doyuran Lezzetler</h1>
                <div className="onemli">
                    <ProductsButton setSelectedCategory={setSelectedCategory} />
                </div>
                <div className="category">
                    <Categories selectedCategory={selectedCategory} />
                </div>

            </div>
        </div>
    );
}
export default Products;