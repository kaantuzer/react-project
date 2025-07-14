import { Pizzas } from '../../sahteVeri';
function PizzaHeader() {

    return (
        <>
            <div className="pizza-header">
                <h1>{Pizzas.klasik.isim}</h1>
            </div>

            <div className="pizza-things">

                <p className='price'>{Pizzas.klasik.fiyat}₺</p>

                <div className="others">

                    <p className='puan'>{Pizzas.klasik.puan}</p>
                    <p className='yorum'>{Pizzas.klasik.yorum}</p>
                </div>
            </div>

            <div className="desc-pizza">

                <p>{Pizzas.klasik.description}</p>
            </div>
        </>
    )
}

export default PizzaHeader;