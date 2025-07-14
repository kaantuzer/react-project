import './Siparis.css';
import { useEffect } from 'react';
import PizzaHeader from './SiparisComponents/PizzaHeader';
import Size from './SiparisComponents/SizeChoices';
import Toppings from './SiparisComponents/ToppingsChoices';
import Thickness from './SiparisComponents/ThicknessChoices';
import OrderNote from './SiparisComponents/OrderNote';
import QuantityOrder from './SiparisComponents/QuantityOrder';
import Summary from './SiparisComponents/Summary';



function Siparis({ formData, setFormData, total, setTotal, selectedTotal, setSelectedTotal, handleSubmit }) {


  const pizzaPrice = 80.50; // Pizza fiyatı


  function increase() {
    setFormData(prevState => ({
      ...prevState,
      quantity: prevState.quantity + 1
    }));
  }
  function decrease() {
    if (formData.quantity > 1) {
      setFormData(prevState => ({
        ...prevState,
        quantity: prevState.quantity - 1
      }));
    }
  }

  function handleCheckboxChange(event) {
    const { value, checked } = event.target;
    let newList = [];
    if (checked) {
      // Eğer checkbox işaretlendiyse, malzemeyi ekle
      newList = [...formData.toppings, value];
    } else {
      // Eğer checkbox işaret kaldırıldıysa, malzemeyi çıkar
      newList = formData.toppings.filter(m => m !== value);
    }

    // Her malzeme için 5 TL ekle
    setSelectedTotal(newList.length * 5);
    setFormData(prevState => ({
      ...prevState,
      toppings: newList
    }));


  }
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  // Here we are handling the total price with using useEffect, useEffect will run whenever the quantity or selectedTotal changes.
  useEffect(() => {
    // Toplam fiyatı güncelle
    const totalPrice = (pizzaPrice + selectedTotal) * formData.quantity;
    setTotal(totalPrice);
  }, [formData.quantity, selectedTotal]);





  return (
    <div className='container-siparis'>
      <PizzaHeader />

      <form onSubmit={handleSubmit}>

        <div className="choices">
          <Size handleChange={handleChange} />
          <Thickness handleChange={handleChange} />
        </div>

        <Toppings formData={formData} handleCheckboxChange={handleCheckboxChange} />
        <p style={{ color: 'red' }}>{formData.toppings.length < 4 ? 'En az 4 malzeme seçmelisiniz.' : ''}</p>
        <p style={{ color: 'red' }}>{formData.toppings.length === 10 ? 'En fazla 10 malzeme seçebilirsiniz.' : ''}</p>
        <OrderNote handleChange={handleChange} />

        <hr></hr>

        <div className="order">
          <QuantityOrder formData={formData} increase={increase} decrease={decrease} handleChange={handleChange} />

          <div className="summary-side">

            <Summary selectedTotal={selectedTotal} total={total} />
            <button className='order-button' type='submit'>Sipariş Ver</button>
            <p>{JSON.stringify(formData)}</p>

          </div>

        </div>
      </form>
    </div>
  );

}

export default Siparis;
