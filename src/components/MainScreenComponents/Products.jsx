import ProductsButton from './ProductsButton.jsx';
import Categories from './Categories.jsx';
import { useState } from 'react';

function Products() {
    const [selectedCategory, setSelectedCategory] = useState('Pizza');

    return (
        <div className="bg-bej py-10">

            <div className="container-pizza">
                <h1 className='text-5xl text-center py-10 font-bold'>Acıktıran Kodlara Doyuran Lezzetler</h1>
                {/* Butonlar */}
                <ProductsButton setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />
                {/* Butonların Açtıkları */}
                <Categories selectedCategory={selectedCategory} />


            </div>
        </div>
    );
}
export default Products;