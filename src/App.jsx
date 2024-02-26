
import { useEffect, useState } from 'react';
import './App.css'
import { Nav } from './components/Nav';
import { NewArrivalSection } from './components/NewArrivalSection';
import { ShopDetail } from './components/ShoeDetail';
import { Sidebar } from './components/Sidebar';
import { SHOE_LIST } from './constant';
import { CardItem } from './components/CartItem';
import { Cart } from './components/Cart';
import { BiMoon, BiSun } from 'react-icons/bi';

export function App() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentShoe, setCurrentShoe] = useState(SHOE_LIST[1]);
  useEffect(()=>{
    const isDarkMode = localStorage.getItem("isDarkMode");
    if(isDarkMode === "true"){
      window.document.documentElement.classList.add("dark");
    }
  }, [])

  const toggleDarkMode = () => {
    window.document.documentElement.classList.toggle("dark");
    localStorage.setItem("isDarkMode", window.document.documentElement.classList.contains("dark"));
  };

  return <div className="p-10 xl:px-24 animate-fadeIn dark:bg-night">
    <Nav onClickShoppingBtn={() => setIsSidebarOpen(true)} />
    <ShopDetail shoe={currentShoe} />
    <NewArrivalSection 
      items={SHOE_LIST} 
      onClickCard={setCurrentShoe} />
    <Sidebar isOpen={isSidebarOpen} onClickClose={() => setIsSidebarOpen(false)} >
      <h2 className="mb-10 text-2xl font-bold">Cart</h2>
      <Cart cartItems={[]} />
    </Sidebar>
    <div className='fixed bottom-4 right-4 '>
      <button 
        onClick={toggleDarkMode} 
        className='bg-night-50 text-white px-4 py-2 rounded-full dark:bg-white dark:text-night shadow-lg'>
        <BiSun className='hidden dark:block' />
        <BiMoon className='dark:hidden' />
      </button>
    </div>
  </div>;
}


