import './Success.css'
import { addMinutes, format, formatDistance, formatRelative, subDays } from 'date-fns'


function Success(props) {
  const { total, selectedTotal, responseData, selectedProduct } = props;
  const currentDate = new Date();
  const estimatedTime1 = addMinutes(currentDate, 20);
  const estimatedTime2 = addMinutes(currentDate, 40);
  return (
    <div className="success maine">
      <p className='success-message-up'>Lezzetin Yolda</p>
      <p className='success-message'>Sipariş Alındı</p>
      <hr className='hr' />
      {/* <Summary formData={formData} total={total} selectedTotal={selectedTotal} /> */}
      <h2>{selectedProduct.ad ? <span style={{ color: '#fff' }}>{selectedProduct.ad}</span> : "Ürün"} sipariş verildi!</h2>

      <div className="summary-order">

        <p>Boyut: {responseData.size}</p>
        <p>Hamur: {responseData.crustThickness}</p>
        <p>Ek Malzemeler: {responseData.malzeme.join(', ')}</p>
        <p>Not: {responseData.orderNote}</p>
        <p>Adet: {responseData.quantity}</p>
        <p className='middle'>Seçilen Toplam: <br /> {selectedTotal}</p>
        <p className='middle'>Toplam: <br /> {total}</p>
        <p>Tahmini Teslim Saati: <br /> <span style={{ color: '#fff' }}>{format(estimatedTime1, 'HH:mm')} - {format(estimatedTime2, 'HH:mm')}</span></p>

      </div>

    </div >
  );
}
export default Success;