import { extraToppings } from '../../sahteVeri';


function Toppings(props) {
    const { register, errors, toppings } = props
    const isValid = toppings.length < 10;
    return (
        <div className="toppings-side">

            <h2>Ek Malzemeler</h2>
            <p>En fazla 10 malzeme seçebilirsiniz. 5tl </p>

            <div className="topping">
                {extraToppings.map((topping) => (
                    <div className="addingTopping" key={topping.id}>
                        <label htmlFor={topping.id}>
                            <input type="checkbox" id={topping.id} value={topping.name} {...register("malzeme", { required: false, validate: (value) => value.length < 10 || "En fazla 10 malzeme seçebilirsiniz.", validate: (value) => value.length >= 3 || "En az 3 malzeme seçmelisiniz." })} disabled={toppings.length >= 10 && !toppings.includes(topping.name)} />
                            {topping.name}
                        </label>
                    </div>
                ))}
            </div>
            {errors.malzeme && <p style={{ color: 'red' }}>{errors.malzeme.message}</p>}
        </div>
    )
}

export default Toppings;