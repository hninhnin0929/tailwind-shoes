
import './App.css'
import { Nav } from './components/Nav';
import { NewArrivalSection } from './components/NewArrivalSection';
import { ShopDetail } from './components/ShoeDetail';
import { SHOE_LIST } from './constant';

export function App() {
  return <div className="p-10 xl:px-24 animate-fadeIn">
    <Nav />
    <ShopDetail />
    <NewArrivalSection items={SHOE_LIST} />
  </div>;
}


