function OrderNote(props) {
    const { register } = props;
    return (
        <div className="order-note">

            <h2>Sipariş Notu</h2>
            <input type="text" placeholder='Siparişine eklemek istediğin bir not var mı ?' {...register("orderNote")} />

        </div>
    )
}
export default OrderNote;