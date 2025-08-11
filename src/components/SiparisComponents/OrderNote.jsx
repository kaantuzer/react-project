function OrderNote(props) {
    const { register } = props;
    return (
        <div className="flex flex-col gap-2 my-4">

            <h2 className="baslik py-1">Sipariş Notu</h2>
            <input className="border py-4 px-2 rounded-md w-full" type="text" placeholder='Siparişine eklemek istediğin bir not var mı ?' {...register("orderNote")} />

        </div>
    )
}
export default OrderNote;