import { CrustThickness } from "../../sahteVeri";
function Thickness(props) {
    const { register, errors } = props;
    return (
        <div className="thickness">
            <h2>Hamur Seç</h2>
            <select {...register("crustThickness", { required: "Hamur kalınlığı seçmelisiniz." })} id="crustThickness">
                {CrustThickness.map((item) => {
                    return <option key={item.value} value={item.value}>{item.value}</option>;
                })}
            </select>
            {errors.crustThickness && <p style={{ color: 'red' }}>{errors.crustThickness.message}</p>}
        </div>
    )
}

export default Thickness;