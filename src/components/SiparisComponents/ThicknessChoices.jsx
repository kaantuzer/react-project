import { CrustThickness } from "../../sahteVeri";
function Thickness(props) {
    const { register, errors } = props;
    return (
        <div>
            <h2 className="baslik pt-0">Hamur<span className="text-red-500 pl-1">*</span></h2>
            <select className="bg-bej w-[300px] py-4 px-2 rounded-md" {...register("crustThickness", { required: "Hamur kalınlığı seçmelisiniz." })} id="crustThickness">
                {CrustThickness.map((item) => {
                    return <option key={item.value} value={item.value}>{item.value}</option>;
                })}
            </select>
            {errors.crustThickness && <p className="text-red-500">{errors.crustThickness.message}</p>}
        </div>
    )
}

export default Thickness;