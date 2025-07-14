import { extraToppings } from '../../sahteVeri';
import CheckBox from '../Checkbox';

function Toppings(props) {
    const { formData, handleCheckboxChange } = props
    return (
        <div className="toppings-side">

            <h2>Ek Malzemeler</h2>
            <p>En fazla 10 malzeme seçebilirsiniz. 5tl </p>

            <div className="topping">
                {extraToppings.map((topping) => (
                    <div className="addingTopping" key={topping.id}>
                        <CheckBox id={topping.id} value={topping.isim} onChange={handleCheckboxChange} name="malzeme" formData={formData} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Toppings;