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

export function Nav() {
    const [ isMobileMenuShown, setMobileMenuShown ] = useState(false);
  return (
    <nav className="flex flex-wrap items-center justify-between">
        {/* Logo */}
        <a href="#">
            <NikeLogo className="h-20 w-20" />
        </a>

        {/* Burger button */}
        <button onClick={()=> setMobileMenuShown(!isMobileMenuShown)} className="lg:hidden rounded-lg p-2 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200">
            <RxHamburgerMenu size={25}/>
        </button>

        {/* Menu List */}
        <div className={`${!isMobileMenuShown && "hidden" } w-full lg:block lg:w-auto`}>
            <ul className="lg:space-x-8 flex flex-col lg:flex-row rounded-lg text-lg border border-gray-100 bg-gray-50 p-4 text-lg lg:flex-row lg:border-none lg:bg-transparent"> 
                {
                    ROUTES.map((route, i) => {
                        return (
                            <li className={`py-2 px-3 ${i === 0 
                                ? "bg-blue-500 text-white lg:bg-transparent lg:text-blue-500" 
                                : "hover:bg-gray-100"}`}
                            key={route}>
                                {route}
                            </li>
                        );
                    })
                }
            </ul>
        </div>

        {/* Cart Button */}
        <div className="fixed bottom-4 left-4 lg:static">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-white shadow-md">
                <TbShoppingCart />
            </div>       
        </div>   
    </nav>
  );
}


