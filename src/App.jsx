import './App.css';
import MainPage from './pages/MainPage/MainPage';
import WarehouseModelsPage from './pages/WarehouseModelsPage/WarehouseModelsPage';
import ServicesPage from './pages/ServicesPage/ServicesPage';
import OrdersPage from './pages/OrdersPage/OrdersPage';
import CataloguePage from './pages/CataloguePage/CataloguePage';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

const App=() =>{ 
  return (
    <div>
      <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/warehouse' element={<WarehouseModelsPage />} />
      <Route path='/services' element={<ServicesPage />} />
      <Route path='/orders' element={<OrdersPage />} />
      <Route path='/catalogue' element={<CataloguePage />} />
    </Routes>
  </BrowserRouter>
    </div>
    
  );
}

export default App;
