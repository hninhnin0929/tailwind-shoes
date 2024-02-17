
import { useState } from 'react';
import './App.css'
import { Nav } from './components/Nav';
import { NewArrivalSection } from './components/NewArrivalSection';
import { ShopDetail } from './components/ShoeDetail';
import { Sidebar } from './components/Sidebar';
import { SHOE_LIST } from './constant';

export function App() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return <div className="p-10 xl:px-24 animate-fadeIn">
    <Nav onClickShoppingBtn={() => setIsSidebarOpen(true)} />
    <ShopDetail />
    <NewArrivalSection items={SHOE_LIST} />
    <Sidebar isOpen={isSidebarOpen} onClickClose={() => setIsSidebarOpen(false)} >
      Hi
    </Sidebar>
  </div>;
}


