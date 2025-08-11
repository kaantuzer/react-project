function Summary(props) {
    const { selectedTotal, total } = props;
    return (
        <div className="flex flex-col gap-4 p-10">

            <h3 className="font-semibold">Sipariş Toplamı</h3>

            <div className="flex justify-between">
                <h4 className="font-bold">Seçimler</h4>
                <p className="font-bold">{selectedTotal} TL</p>
            </div>

            <div className="flex justify-between">
                <h4 className="font-bold text-projectRed">Toplam</h4>
                <p className="font-bold text-projectRed">{total} TL</p>
            </div>
        </div>
    )
}
export default Summary;