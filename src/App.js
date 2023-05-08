import styles from './App.module.css';
import { Banner } from './components/Banner/Banner';
import { Header } from './components/Header/Header';
import { Navigation } from './components/Navigation/Navigation';
import { ColdSnacks } from './components/ColdSnacks/ColdSnacks';
import { Route, Routes } from 'react-router-dom';
import { MeatDishes } from './components/MeatDishes/MeatDishes';
import {Soup} from './components/Soup/Soup'
import { FishDishes } from './components/FishDishes/FishDishes';
import { GrillMenu } from './components/GrillMenu/GrillMenu';
import { Drinks } from './components/Drinks/Drinks';
import { Specialties } from './components/Specialties/Specialties';
import { HotSnacks } from './components/HotSnacks/HotSnacks';

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Banner />
      <Navigation />

      <Routes>
        <Route path='/ColdSnacks' element={<ColdSnacks />} />
        <Route path='/HotSnacks' element={<HotSnacks />} />
        <Route path='/MeatDishes' element={<MeatDishes/>} />
        <Route path='/Soup' element={<Soup/>} />
        <Route path='/FishDishes' element={<FishDishes />} />        
        <Route path='/GrillMenu' element={<GrillMenu />} />
        <Route path='/Specialties' element={<Specialties />} />
        <Route path='/Drinks' element={<Drinks />} />
      </Routes>

    </div>
  );
}

export default App;
