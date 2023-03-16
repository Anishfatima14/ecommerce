
import './App.css';
import Header from './common/header/Header';
import Footer from './common/footer/Footer';
import Product from './common/components/Product';

import {
  BrowserRouter as Router,
  
} from "react-router-dom";

function App() {
  return (
    <>
   
    <Router>
      <Header/>
      <Product/> 
      <Footer/>
      
    </Router>
    
    </>
  )
}

export default App;
