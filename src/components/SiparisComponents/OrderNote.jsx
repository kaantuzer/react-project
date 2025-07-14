function OrderNote(props) {
    const { handleChange } = props;
    return (
        <div className="order-note">

            <h2>Sipariş Notu</h2>
            <input type="text" placeholder='Siparişine eklemek istediğin bir not var mı ?' name="orderNote" onChange={handleChange} />

        </div>
    )
}
export default OrderNote;