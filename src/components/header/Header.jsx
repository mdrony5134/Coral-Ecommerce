import { FaBars, FaSearch, FaShoppingBag, FaTimes, FaUser } from "react-icons/fa";
import logo from '/logo.svg'
import { Link } from "react-router-dom";
import { useState } from "react";
const Header = () => {
    const [isMenuOpen, setIsMenuOpen]= useState(false)
    const navItem = [
        {title:"Jewelry & Accessories", path:"/"},
        {title:"Clothing & Shoes", path:"/"},
        {title:"Home & Living", path:"/"},
        {title:"Wedding & Party", path:"/"},
        {title:"Toy & Entertainments", path:"/"},
        {title:"Art & Collectibles", path:"/"},
        {title:"Craft Supplies & Tools", path:"/"},
    ]

    const toggleMenu = () =>{
        setIsMenuOpen(!isMenuOpen)
    }
    
  return (
    <header className="max-w-screen-2xl-2xl xl:px-28 px-4 absolute top-0 left-0 right-0">
       <nav className="flex items-center justify-between container md:py-4 pt-6 pb-3">
       <FaSearch className="text-Black w-5 h-5 cursor-pointer hidden md:block"/>
        <Link to={"/"}><img src={logo} alt="" /></Link>
        <div className="text-Black sm:flex items-center gap-4 hidden">
          <span className="flex items-center gap-1 cursor-pointer">  <FaUser /> Account</span>
          <span className="flex items-center gap-1 cursor-pointer"> <FaShoppingBag /> Shopping</span>
        </div>
    {/* menu icon */}

       <div className="sm:hidden">
       <button onClick={toggleMenu}>
         {isMenuOpen ? <FaTimes className="w-5 h-5 text-Black"/> : <FaBars className="w-5 h-5 text-Black"/>}
       </button>
       </div>
       </nav>

       <hr />
       {/* nav item */}
       <div className="pt-4">
            <ul className="lg:flex justify-between items-center text-Black hidden">
                {navItem.map(({title, path})=>(
                    <li key={title} className="hover:text-orange-500">
                        <Link to={path}>{title}</Link>
                    </li>
                ))}
            </ul>
       </div>

       {/* mobile screen */}
       <div>
            <ul className={`bg-Black text-white rounded py-2 px-4 ${isMenuOpen? "" : "hidden"}`}>
                {navItem.map(({title, path})=>(
                    <li key={title} className="hover:text-orange-500 my-2">
                        <Link to={path}>{title}</Link>
                    </li>
                ))}
            </ul>
       </div>

    </header>
  )
}

export default Header