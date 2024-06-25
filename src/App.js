import './App.css';
import Navbar from './components/Navbar';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
       <div className="App">
     <Navbar/>
     </div> 
     <div className='routes'>
      <Routes>
        <Route path='/' element={ <Hero/>}/>
      </Routes>
      <Routes>
        <Route path='/h' element={<Contact/> }/>
      </Routes>
      
     </div>
       {/* <Footer/> */}
    </BrowserRouter>
 
  );
}

export default App;
