import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import EditProduct from './components/EditProduct';
import Header from './components/Header';
import NewProduct from './components/NewProduct';
import Products from './components/Products';



//Redux
import {Provider} from 'react-redux';

import store from './store';


function App() {
  return (
    <Router>
      <Provider store={store}>
      <Header />
      <div className='h-screen py-32'>
          <Routes>
            <Route exact path="/" element={<Products />} />

            <Route exact path="/products/new" element={<NewProduct />} />

            <Route exact path="/products/edit/:id" element={<EditProduct />} />
          </Routes>
      </div>
      </Provider>
    </Router>
  );
}

export default App;
