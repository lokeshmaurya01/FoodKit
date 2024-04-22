import { json, useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_MENU } from "../utils/constants";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu=()=>{
    const [resInfo,setResInfo]=useState(null);
    const {resId}=useParams();
    const [showIndex,setShowIndex]=useState(null);
    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData=async ()=>{
        const data=await fetch(SWIGGY_MENU+resId);
        const json=await data.json();
        setResInfo(json)
    }
    // .cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info
    if(resInfo===null) return <Shimmer/>;

    const {name,cuisines,costForTwo}=resInfo?.data?.cards[2]?.card?.card?.info;
    const menu=(resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards)||(resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card?.itemCards);
    const categories=(resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=> c.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"))
    
    console.log(categories);
    return (
        <div className="text-center">
            <h1 className="font-bold text-3xl text-zinc-700">{name}</h1>
            <p3 className="font-bold text-lg my-8">{cuisines.join(", ")} - {costForTwo/100} Rs/. for Two</p3>

            {/* categories CONTROLLED COMPONENt*/}
            {categories.map((category,index)=> <RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card} showItems={index==showIndex ?true:false} setShowIndex={()=>setShowIndex(index)}/>)}
            
        </div>
    )
}
export default  RestaurantMenu; 