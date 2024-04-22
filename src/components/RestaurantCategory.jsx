import ItemList from "./ItemList";
import { useState } from "react";
const RestaurantCategory=({data,showItems,setShowIndex})=>{
    const handleClick=()=>{
        setShowIndex(); 
    }
    return(
        <div>
            {/*Header*/}
            <div className="w-6/12 mx-auto my-4 bg-slate-200 shadow-lg p-4 ">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-xl">{data.title} ({data.itemCards.length})</span>
                    <span>🔻</span>
                </div>
                
                {showItems && <ItemList items={data.itemCards}/>}
            </div>
            {/*Accordian Body*/}
            
        </div>
    )
}
export default RestaurantCategory;