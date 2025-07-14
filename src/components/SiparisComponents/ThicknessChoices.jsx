import { CrustThickness } from "../../sahteVeri";
function Thickness(props) {
    const { handleChange } = props;
    return (
        <div className="thickness">
            <h2>Hamur Seç</h2>
            <select name="crustThickness" id="crustThickness" onChange={handleChange}>
                {CrustThickness.map((item) => {
                    return <option key={item.value} value={item.id}>{item.value}</option>;
                })}
            </select>
        </div>
    )
}

export default Thickness;