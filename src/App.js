import styles from './App.module.css';
import { Banner } from './components/Banner/Banner';
import { Header } from './components/Header/Header';
import { Navigation } from './components/Navigation/Navigation';
import { ColdSnacks } from './components/ColdSnacks/ColdSnacks';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Basket } from './components/Basket/Basket';
import { Footer } from './components/Footer/Footer';
import { About } from './components/Pages/About/About';
import { Delivery } from './components/Pages/Delivery/Delivery';
import { Refund } from './components/Pages/Refund/Refund';
import {Sale} from './components/Pages/Sale/Sale'



const App = () => {
  let { state } = useLocation();
  return (
    <div className={styles.app}>
      <Header />
      {!state && <Banner />}
      <Navigation />

      <Routes>
        <Route path='/' element={<ColdSnacks />} />
        <Route path='/:url' element={<ColdSnacks />} />
        <Route path='/basket' element={<Basket />} /> 
        <Route path='/about' element={<About />} /> 
        <Route path='/delivery' element={<Delivery/>}/>  
        <Route path='/refund' element={<Refund/>}/>   
        <Route path='/sale' element={<Sale/>}/>   
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
