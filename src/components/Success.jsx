import './Success.css'
import Summary from './SiparisComponents/Summary';
import { Pizzas } from '../sahteVeri';

function Success(props) {
  const { total, selectedTotal, responseData } = props;
  return (
    <div className="success maine">
      <p className='success-message-up'>Lezzetin Yolda</p>
      <p className='success-message'>Sipariş Alındı</p>
      <hr className='hr' />
      {/* <Summary formData={formData} total={total} selectedTotal={selectedTotal} /> */}
      <h2>{Pizzas.klasik.isim}</h2>

      <div className="summary-order">

        <p>Boyut: {responseData.size}</p>
        <p>Hamur: {responseData.crustThickness}</p>
        <p>Ek Malzemeler: {responseData.toppings.join(', ')}</p>
        <p>Not: {responseData.orderNote}</p>
        <p>Adet: {responseData.quantity}</p>
        <p className='middle'>Seçilen Toplam: <br /> {selectedTotal}</p>
        <p className='middle'>Toplam: <br /> {total}</p>

      </div>

    </div>
  );
}
export default Success;