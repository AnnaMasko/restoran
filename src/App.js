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
import { Sale } from './components/Pages/Sale/Sale';
import { useState, useEffect, createContext, useReducer } from 'react';
import { DeliveryPage } from './components/DeliveryPage/DeliveryPage';
import { Preloader } from './common/Preloader/Preloader';
import { Product } from './components/Product/Product';
import productReducer from './reducer/productReducer';
import { initialState } from './reducer/initialState';
import { Profile } from './components/Profile/Profile';


export const CartContext = createContext();


const App = () => {
  //let { state } = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const [weather, setWeather] = useState({});
  const [totalCount, setTotalCount] =useState(0)
  const [isPreloader, setPreloader] = useState(false)
  const [state, dispatch] = useReducer(productReducer, initialState)

  useEffect(() => {
    setPreloader(true)
    setTimeout(()=>{
      fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m")
      .then(response => response.json())
      .then((data) => {
        const dataWeather = {
          city: "Minsk",
          temperature: data.current_weather.temperature,
          units: data.hourly_units.temperature_2m,
          time: data.current_weather.time,
        }
        setWeather(dataWeather);
        //console.log(dataWeather)
      })
      .finally(() => setPreloader(false))
  }, 2000)
    }
    , [])

  return (
    <CartContext.Provider value={{totalCount, setTotalCount, state, dispatch}}>
    <div className={styles.app}>
      {isPreloader ? <Preloader /> :
        <>
          <Header showMenu={showMenu} setShowMenu={setShowMenu} />
          {!state && <Banner />}
          <Navigation />
          <Routes>
            <Route path='/' element={<ColdSnacks />} />
            <Route path='/:url' element={<ColdSnacks />} />
            <Route path='/basket' element={<Basket />} />
            <Route path='/about' element={<About />} />
            <Route path='/delivery' element={<Delivery />} />
            <Route path='/refund' element={<Refund />} />
            <Route path='/sale' element={<Sale />} />
            <Route path='/order' element={<DeliveryPage />} />
            <Route path='/:url/:id' element={<Product/>}/>
            <Route path="/profile" element={<Profile/>}/>
          </Routes>
          <Footer showMenu={showMenu} setShowMenu={setShowMenu} weather={weather} />
          </>
  }
        </div>
        </CartContext.Provider>
    
  );
}

export default App;
