import { Pizzas } from '../../sahteVeri';
function PizzaHeader({ selectedProduct }) {

    return (
        <>
            <div className="font-bold text-3xl py-2">
                <h1>{selectedProduct ? selectedProduct.name : Pizzas.klasik.isim}</h1>
            </div>

            <div className="flex items-center justify-between my-4">

                <p className='font-semibold text-2xl basis-3/4'>{selectedProduct ? selectedProduct.price : Pizzas.klasik.fiyat}₺</p>

                <div className="flex basis-1/4 justify-between">

                    <p className='puan'>{selectedProduct ? selectedProduct.rate : Pizzas.klasik.puan}</p>
                    <p className='yorum'>{selectedProduct ? selectedProduct.comment : Pizzas.klasik.yorum}</p>
                </div>
            </div>

            <div>

                <p className='text-gray-500'>{Pizzas.klasik.description}</p>
            </div>
        </>
    )
}

export default PizzaHeader;