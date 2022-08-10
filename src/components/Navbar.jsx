import React from "react"
import Navitem from "./Navitem";

function Navbar(){
    return(

    <nav className="flex justify-between py-3 px-30 shadow-md">
       
        <h3 className="font-bold">
            Gob3Joint
        </h3>

        <ul className="flex gap-8">
            <Navitem menu= "HOME" />
            <Navitem menu= "PRODUCT" />
            <Navitem menu= "SERVICES" />
            <Navitem menu= "ABOUT" />
            <Navitem menu= "CONTACT" />
             </ul>

    </nav>
    
    )
}

export default Navbar;