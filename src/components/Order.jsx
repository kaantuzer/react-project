
import { useEffect } from 'react';
import PizzaHeader from './SiparisComponents/PizzaHeader';
import Toppings from './SiparisComponents/ToppingsChoices';
import Thickness from './SiparisComponents/ThicknessChoices';
import OrderNote from './SiparisComponents/OrderNote';
import Summary from './SiparisComponents/Summary';
import { useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import SizeChoices from './SiparisComponents/SizeChoices';
import { ToastContainer, toast } from 'react-toastify';




function Order({ total, setTotal, selectedTotal, setSelectedTotal, setSelectedProduct, selectedProduct, submitHandle }) {

  const location = useLocation();
  setSelectedProduct(location.state?.urun); // Get the selected product from the state passed

  const defaultValues = {
    size: 'Küçük',
    crustThickness: 'İnce',
    malzeme: [],
    orderNote: '',
    quantity: 1,
  };

  //UseForm
  const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm({ defaultValues: defaultValues, mode: 'onChange' });

  const formDataa = watch();
  const toppings = watch("malzeme")
  const quantity = watch("quantity");





  const pizzaPrice = 80.50; // Pizza fiyatı

  {/*Increase Quantity Function*/ }
  function increase() {
    setValue("quantity", quantity + 1);
  }

  {/*Decrease Quantity Function*/ }
  function decrease() {
    if (quantity > 1) setValue("quantity", quantity - 1);
  }

  setSelectedTotal(toppings.length * 5);

  // Here we are handling the total price with using useEffect, useEffect will run whenever the quantity or selectedTotal changes.

  useEffect(() => {
    // Toplam fiyatı güncelle
    const totalPrice = (pizzaPrice + selectedTotal) * quantity;
    setTotal(totalPrice);
  }, [quantity, selectedTotal]);





  return (

    <div className='max-w-[700px] mx-auto p-6 '>
      <PizzaHeader selectedProduct={selectedProduct} />

      <form onSubmit={handleSubmit(submitHandle)} className="order-form">

        <div className="flex flex-col text-center items-center py-5 mb-5 lg:py-0 lg:mb-0 lg:flex-row lg:justify-between items-start">

          <SizeChoices register={register} errors={errors} />
          <Thickness register={register} errors={errors} />
        </div>

        <Toppings register={register} errors={errors} toppings={toppings} />

        <OrderNote register={register} />

        <hr></hr>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-4 my-6">

          <div className="self-auto lg:self-start border">
            <button className='bg-projectRed p-3' type="button" onClick={decrease} >-</button>
            <span className='p-5 font-semibold'>{quantity}</span>
            <button className='bg-projectRed p-3' type="button" onClick={increase} >+</button>
          </div>

          <div className="border w-[90%] lg:w-[60%] ">

            <Summary selectedTotal={selectedTotal} total={total} />
            <button className='w-full bg-projectRed p-3 text-white font-bold rounded-lg' type='submit'>Sipariş Ver</button>


          </div>

        </div>
        <ToastContainer />
      </form>
    </div>
  );

}

export default Order;
