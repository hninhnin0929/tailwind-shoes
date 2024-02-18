
import { useState } from 'react';
import './App.css'
import { Nav } from './components/Nav';
import { NewArrivalSection } from './components/NewArrivalSection';
import { ShopDetail } from './components/ShoeDetail';
import { Sidebar } from './components/Sidebar';
import { SHOE_LIST } from './constant';
import { CardItem } from './components/CartItem';

export function App() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return <div className="p-10 xl:px-24 animate-fadeIn">
    <Nav onClickShoppingBtn={() => setIsSidebarOpen(true)} />
    <ShopDetail />
    <NewArrivalSection items={SHOE_LIST} />
    <Sidebar isOpen={isSidebarOpen} onClickClose={() => setIsSidebarOpen(false)} >
      <h2 className="mb-10 text-2xl font-bold">Cart</h2>
      <CardItem item={SHOE_LIST[0]}/>
      <CardItem item={SHOE_LIST[1]}/>
      <CardItem item={SHOE_LIST[2]}/>
    </Sidebar>
  </div>;
}


