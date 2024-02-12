
import './App.css'
import { Nav } from './components/Nav';
import { ShopDetail } from './components/ShoeDetail';

export function App() {
  return <div className="p-10 xl:px-24">
    <Nav />
    <ShopDetail />
  </div>;
}


