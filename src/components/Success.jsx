
import { addMinutes, format, formatDistance, formatRelative, subDays } from 'date-fns'


function Success(props) {
  const { total, selectedTotal, responseData, selectedProduct } = props;
  const currentDate = new Date();
  const estimatedTime1 = addMinutes(currentDate, 20);
  const estimatedTime2 = addMinutes(currentDate, 40);

  return (
    <div className="bg-projectRed h-screen text-center p-6 text-white flex flex-col justify-center items-center">
      <p className='text-buttonYellow text-3xl font-light'>Lezzetin Yolda</p>
      <p className='text-6xl font-extralight'>Sipariş Alındı</p>
      <hr className='w-[80%] md:w-[35%] mx-auto mb-8 mt-6 border-gray-200' />
      {/* <Summary formData={formData} total={total} selectedTotal={selectedTotal} /> */}
      <h2 className='text-2xl'>{selectedProduct.name}</h2>

      <div className="font-semibold text-white border p-10 text-left w-full lg:w-[700px] mx-auto mt-5 rounded-lg">

        <p>Boyut: {responseData.size}</p>
        <p>Hamur: {responseData.crustThickness}</p>
        <p>Ek Malzemeler: {responseData.malzeme.join(', ')}</p>
        <p>Not: {responseData.orderNote}</p>
        <p>Adet: {responseData.quantity}</p>
        <p className=''>Seçilen Toplam:  <span className='font-bold'>{selectedTotal}₺</span></p>
        <p className=''>Toplam:  <span className='font-bold'>{total}₺</span></p>
        <p className='text-right mt-6 md:mt-0'>Tahmini Teslim Saati: <br /> <span className='font-bold'>{format(estimatedTime1, 'HH:mm')} - {format(estimatedTime2, 'HH:mm')}</span></p>

      </div>

    </div >
  );
}
export default Success;