import { TbShoppingCart } from "react-icons/tb"; 
import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const ROUTES = [
    "Home",
    "About",
    "Services",
    "Pricing",
    "Contact",
];

export function Nav({onClickShoppingBtn}) {
    const [ isMobileMenuShown, setMobileMenuShown ] = useState(false);
  return (
    <nav className="relative z-10 flex flex-wrap items-center justify-between">
        {/* Logo */}
        <a href="#">
            <NikeLogo className="h-20 w-20 dark:fill-white" />
        </a>

        {/* Burger button */}
        <button 
            onClick={()=> setMobileMenuShown(!isMobileMenuShown)} 
            className="dark:text-gray-400 dark:hover:bg-gray-700 lg:hidden rounded-lg p-2 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200">
            <RxHamburgerMenu size={25}/>
        </button>

        {/* Menu List */}
        <div className={`${!isMobileMenuShown && "hidden" } w-full lg:block lg:w-auto`}>
            <ul className="lg:space-x-8 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 text-lg lg:flex-row lg:border-none lg:bg-transparent lg:dark:text-white"> 
                {
                    ROUTES.map((route, i) => {
                        return (
                            <li className={`cursor-pointer rounded py-2 px-3 lg:hover:text-blue-500 lg:hover:bg-transparent ${i === 0 
                                ? "bg-blue-500 text-white lg:bg-transparent lg:text-blue-500" 
                                : "hover:bg-gray-100"
                            } ${(i==3 || i==4) && "lg:text-white"}`}
                            key={route}>
                                {route}
                            </li>
                        );
                    })
                }
            </ul>
        </div>

        {/* Cart Button */}
        <div onClick={onClickShoppingBtn} className="fixed bottom-4 left-4 lg:static lg:mr-8">
            <div className="flex items-center justify-center h-12 w-12 cursor-pointer rounded-full bg-white shadow-md">
                <TbShoppingCart />
            </div>       
        </div>   
    </nav>
  );
}


