import './App.css';
import MainPage from './pages/MainPage/MainPage';
import WarehouseModelsPage from './pages/WarehouseModelsPage/WarehouseModelsPage';
import ServicesPage from './pages/ServicesPage/ServicesPage';
import OrderActionsPage from './pages/OrdersPage/OrderCreatePage';
import CataloguePage from './pages/CataloguePage/CataloguePage';
import AddServicePage from './pages/ServicesPage/AddServicePage';
import ServiceDetailsPage from './pages/ServicesPage/ServiceDetailsPage';
import SignInPage from './pages/Authorization/SignInPage';
import RegisterPage from './pages/Authorization/RegisterPage';
import UserProfilePage from './pages/UserPage/UserProfilePage';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import ServiceTransactionsPage from './pages/ServicesPage/ServiceTransactionsPage';
import OrdersIncomingPage from './pages/OrdersPage/OrdersIncomingPage';
import OrdersOutcomingPage from './pages/OrdersPage/OrdersOutcoming';
import OrdersRequestsPage from './pages/OrdersPage/OrdersRequestsPage';

const App=() =>{ 
  return (
    <div>
      <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/warehouse' element={<WarehouseModelsPage />} />
      <Route path='/services' element={<ServicesPage />} />
      <Route path='/orders/create' element={<OrderActionsPage />} />
      <Route path='/orders/incoming' element={<OrdersIncomingPage />} />
      <Route path='/orders/outcoming' element={<OrdersOutcomingPage />} />
      <Route path='/orders/requests' element={<OrdersRequestsPage />} />
      <Route path='/catalogue' element={<CataloguePage />} />
      <Route path='/services/add' element={<AddServicePage />} />
      <Route path='/services/details' element={<ServiceDetailsPage />} />
      <Route path='/signin' element={<SignInPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/profile' element={<UserProfilePage />} />
      <Route path='/transactions' element={<ServiceTransactionsPage />} />

    </Routes>
  </BrowserRouter>
    </div>
    
  );
}

export default App;
