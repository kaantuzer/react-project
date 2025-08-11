import { useState } from 'react'
import Main from './components/MainScreen'
import Order from './components/Order.jsx'
import axios from 'axios'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from 'react-router-dom';
import Success from './components/Success';
import './index.css'
import OrderHeader from './components/SiparisComponents/OrderHeader.jsx';
import Footer from './components/Footer.jsx';
import { ToastContainer, toast } from 'react-toastify';




function App() {

  const history = useHistory();

  const [total, setTotal] = useState(0);
  const [selectedTotal, setSelectedTotal] = useState(0);
  const [responseData, setResponseData] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState("Pizza");

  function goToSiparis() {
    history.push('/Order');
  }
  function goToSuccess() {
    history.push('/success');
  }

  function submitHandle(data) {
    toast.success("Siparişiniz başarıyla alındı!");
    axios.post('https://6870d6a67ca4d06b34b846e8.mockapi.io/api/v1/pizzaOrders', data)
      .then(response => {
        console.log('Sipariş başarıyla gönderildi:', response.data);
        setResponseData(response.data);
        // Yönlendirme ya da kullanıcıya mesaj gösterimi yapılabilir

        setTimeout(goToSuccess, 2000);
      })
      .catch(error => {
        if (!error.response) {
          // response yoksa internet bağlantısı yok demektir
          toast.error('İnternet bağlantısı yok. Lütfen bağlantınızı kontrol edin.');
        } else {
          toast.error('Sipariş gönderilirken bir hata oluştu.');
        }
      });

  }





  return (
    <>
      <Switch>
        {/* Route 1 */}
        <Route path="/" exact>
          <Main goToSiparis={goToSiparis} />

        </Route>

        {/* Route 2 */}
        <Route path="/Order" >
          <OrderHeader />
          <Order total={total} setTotal={setTotal} selectedTotal={selectedTotal} setSelectedTotal={setSelectedTotal} setSelectedProduct={setSelectedProduct} selectedProduct={selectedProduct} submitHandle={submitHandle} goToSuccess={goToSuccess} />

        </Route>

        {/* Route 3 */}
        <Route path="/success" >
          <Success total={total} selectedTotal={selectedTotal} responseData={responseData} selectedProduct={selectedProduct} />
        </Route>


      </Switch>
      <Footer />
    </>

  )
}

export default App
