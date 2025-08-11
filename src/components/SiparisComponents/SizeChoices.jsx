import { Sizes } from '../../sahteVeri'


function SizeChoices(props) {
    const { register, errors } = props;
    return (
        <div className="size">

            <h2>Pizza Boyutu</h2>

            {Sizes.map(item => {
                return (<label key={item.id} htmlFor={item.value}><input key={item.id} type="radio" id={item.value}
                    value={item.value} {...register("size", { required: "Pizza boyutu seçmelisiniz." })} />{item.value}</label>)
            })}
            {errors.size && <p style={{ color: 'red' }}>{errors.size.message}</p>}
        </div>
    )
}

export default SizeChoices;

