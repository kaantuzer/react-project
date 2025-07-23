import { Pizzas } from '../../sahteVeri';
function PizzaHeader({ selectedProduct }) {

    return (
        <>
            <div className="pizza-header">
                <h1>{selectedProduct ? selectedProduct.ad : Pizzas.klasik.isim}</h1>
            </div>

            <div className="pizza-things">

                <p className='price'>{selectedProduct ? selectedProduct.price : Pizzas.klasik.fiyat}₺</p>

                <div className="others">

                    <p className='puan'>{selectedProduct ? selectedProduct.rate : Pizzas.klasik.puan}</p>
                    <p className='yorum'>{selectedProduct ? selectedProduct.comment : Pizzas.klasik.yorum}</p>
                </div>
            </div>

            <div className="desc-pizza">

                <p>{Pizzas.klasik.description}</p>
            </div>
        </>
    )
}

export default PizzaHeader;