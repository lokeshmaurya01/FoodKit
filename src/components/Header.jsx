import { useState,useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header=()=>{
    const [btnName,setBtnName]=useState("Login");
    const status=useOnlineStatus();
    const data=useContext(UserContext)

    //  Subscribing to the store using the selector(useselector() hook)
    const cartItems=useSelector((store)=>store.cart.items);
    console.log(cartItems); 
    return(
        <div className="flex justify-between bg-green-100 shadow-lg px-6 py-3  ">
            <div className="logo-container">
            <img className="logo w-20" src={LOGO_URL}/>
            </div>
            <div className="flex items-center">
                <ul className="flex gap-8 m-4">
                    <li id="toggle" className="text-green-500 font-bold">{status?"ONLINE ":"OFFLINE "}🟢</li>
                    <li><Link className="px-4 font-bold text-lg text-[#07460ccd]" to="/">Home</Link></li>
                    <li><Link className="px-4 font-bold text-lg text-[#07460ccd]" to="/grocery">Grocery</Link></li>
                    <li><Link className="px-4 font-bold text-lg text-[#07460ccd]" to="/contact">Contact Us</Link></li>
                    <li><Link className="px-4 font-bold text-lg text-[#07460ccd]" to="/about">About us</Link></li>
                    <li><Link className="px-4 font-bold text-lg text-[#07460ccd]" to="/cart">Cart <span className="text-red-400">({cartItems.length} Items)</span></Link></li>
                    <li><button className=" px-3 w-20 border border-solid border-slate-600 bg-slate-500 rounded-3xl text-white" onClick={()=>{
                    btnName==="Login"?setBtnName("Logout"):setBtnName("Login");
                    }}>{btnName}</button></li>
                    {/* <li><Link className="px-4 font-extrabold text-xl" to="/cart">{data.loggedInUser}</Link></li> */}
                    
                </ul>
            </div>
        </div>
    );
};
export default Header;