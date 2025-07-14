import { Sizes } from '../../sahteVeri'
function Size(props) {
    const { handleChange } = props;
    return (
        <div className="size">

            <h2>Pizza Boyutu</h2>

            {Sizes.map(item => {
                return (<label key={item.id} htmlFor={item.id}><input key={item.id} type="radio" id={item.id} name="size" onChange={handleChange} value={item.value} />{item.value}</label>)
            })}
        </div>
    )
}

export default Size;

