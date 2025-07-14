import { useState } from 'react'
import Main from './components/MainScreen'
import Siparis from './components/Siparis'
import axios from 'axios'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from 'react-router-dom';
import Success from './components/Success';
import './components/Siparis.css'
import './index.css'
import Header from './components/HeaderOrder.jsx';




function App() {

  const history = useHistory();
  const [formData, setFormData] = useState({
    size: '',
    crustThickness: '',
    toppings: [],
    orderNote: '',
    quantity: 1
  });

  const [total, setTotal] = useState(0);
  const [selectedTotal, setSelectedTotal] = useState(0);
  const [responseData, setResponseData] = useState(null);

  function goToSiparis() {
    history.push('/siparis');
  }
  function goToSuccess() {
    history.push('/success');
  }
  function handleSubmit(event) {
    event.preventDefault();

    // Form verilerini kontrol et
    if (!formData.size || !formData.crustThickness) {
      alert('Lütfen boyut ve hamur kalınlığını seçin.');
      return;

    } else if (formData.toppings.length > 10) {
      alert('En fazla 10 malzeme seçebilirsiniz.');
      return;

    } else if (formData.quantity < 1) {
      alert('Lütfen en az 1 adet pizza sipariş edin.');
      return;

    } else if (formData.toppings.length < 4) {
      alert('Lütfen en az 4 malzeme seçin.');
      return;

    }
    axios.post('https://6870d6a67ca4d06b34b846e8.mockapi.io/api/v1/pizzaOrders', formData)
      .then(response => {
        console.log('Sipariş başarıyla gönderildi:', response.data);
        setResponseData(response.data);
        // Yönlendirme ya da kullanıcıya mesaj gösterimi yapılabilir
        goToSuccess();
      })
      .catch(error => {
        if (!errror.response) {
          // response yoksa internet bağlantısı yok demektir
          setError('İnternet bağlantısı yok. Lütfen bağlantınızı kontrol edin.');
        } else {
          setError('Sipariş gönderilirken bir hata oluştu.');
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
        <Route path="/siparis" >
          <Header />
          <Siparis formData={formData} setFormData={setFormData} total={total} setTotal={setTotal} selectedTotal={selectedTotal} setSelectedTotal={setSelectedTotal} handleSubmit={handleSubmit} />
        </Route>
        {/* Route 3 */}
        <Route path="/success" >
          <Success formData={formData} total={total} selectedTotal={selectedTotal} responseData={responseData} />
        </Route>


      </Switch>
    </>

  )
}

export default App
