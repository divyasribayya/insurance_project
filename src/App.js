import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Car from './components/car';
import Life from './components/Life';
import Health from './components/Health';
import Bike from './components/Bike';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/car' element={<Car />}></Route>
          <Route path='/life' element={<Life />}></Route>
          <Route path='/health' element={<Health />}></Route>
          <Route path='/bike' element={<Bike/>}></Route>
        </Routes>
        
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
