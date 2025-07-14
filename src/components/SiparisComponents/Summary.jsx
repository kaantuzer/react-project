function Summary(props) {
    const { selectedTotal, total } = props;
    return (
        <div className="summary">

            <h3>Sipariş Toplamı</h3>

            <div className="choices-end">
                <h4>Seçimler</h4>
                <p>{selectedTotal} TL</p>
            </div>

            <div className="total-price">
                <h4 >Toplam</h4>
                <p >{total} TL</p>
            </div>
        </div>
    )
}
export default Summary;