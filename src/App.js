import './App.css';
import Navbar from './components/Navbar';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './page/Home';
import ShopCategory from './page/ShopCategory';
import Product from './page/Product';

function App() {
  return (
    <BrowserRouter>
       <div className="App">
     <Navbar/>
     </div> 
     <div className='routes'>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>

      <Routes>
       <Route path='/Kaftan' element={<ShopCategory category="Kaftan" />}/>
      </Routes>

      <Routes>
       <Route path='/Agbada' element={<ShopCategory category="Agbada"/>}/>
      </Routes>

      <Routes>
        <Route path="/product" element={<Product/>}/>
      </Routes>

      <Routes>
        <Route path="/product:productId" element={<Product/>}/>
      </Routes>

      <Routes>
        <Route path='/contact' element={<Contact/> }/>
      </Routes>
     </div>
       <Footer/>
    </BrowserRouter>
 
  );
}

export default App;
