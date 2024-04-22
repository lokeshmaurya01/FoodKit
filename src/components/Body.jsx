import resData from "../utils/mockData";
import RestaurantCard, { withHighestRated } from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { SWIGGY_API1 } from "../utils/constants";
import UserContext from "../utils/UserContext";
const Body=()=>{
    const [data,setdata]=useState([]);
    const status=useOnlineStatus();

    const[filterData,setFilterData]=useState([]);
    const [filterName,setFiltername]=useState("Top Rated Restaurant");

    const[searchtext,setSearchText]=useState("");

    const HighestRated= withHighestRated(RestaurantCard) //making the Component using HOC.

    useEffect(()=>{
        fetchData();
    },[])
    const fetchData=async ()=>{
        const data=await fetch(SWIGGY_API1);
        const json= await data.json();
        console.log(json);
        setdata(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setFilterData(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    }
    const copy=Object.assign({},data);
    if(!status){
        return(
            <h1>Hey!! Looks like you are Offline, Connect to get delicious  food recommendations.</h1>
        )
    }
    const {loggedInUser,setUserInfo}=useContext(UserContext);

    if(data.length===0) return(<Shimmer/>);
    return(
        <div className="body">
            <div className="filter flex justify-center gap-20">
                <div className="search m-4 p-4">
                    <input type="text" className="search-box border border-solid border-black rounded-md px-2 py-1" value={searchtext} onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}/>
                    <button className=" text-[#eeebeb] px-4 m-4 bg-[#373339] rounded-lg" onClick={()=>{
                        const filteredRestaurants=data.filter((res)=>{
                        return res.info.name.toLowerCase().includes(searchtext.toLowerCase())
                        });
                        setFilterData(filteredRestaurants);   
                    }}>
                        Search
                    </button>
                </div>
                <div className="w-52">
                    <button className="filter-btn mt-12 bg-slate-50 border border-solid border-[gray] rounded-lg items-center px-1" onClick={()=>{
                        filterName==="Top Rated Restaurant"?setFiltername("Most Popular Restaurants"):setFiltername("Top Rated Restaurant");
                        if(filterName==="Top Rated Restaurant"){
                            const resTop=data.filter((res)=>
                                res.info.avgRating>=4.3
                            );
                            setFilterData(resTop);
                        }
                        else{
                            setFilterData(data);
                        }
                        
                    }}>
                        {filterName}
                    </button>
                </div>
            </div>
            <div className="flex flex-wrap gap-10 mx-28">
                {
                    filterData.map((restaurant)=>(
                        <Link className="res-card-link " key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}> 
                        {
                            (restaurant.info.avgRating>=4.4)?(<HighestRated res={restaurant}  />):(<RestaurantCard res={restaurant}/>)
                        }
                            {/* if our restaurant card has rating >=4 write Highestrated on top(HighestRated Compenent using HOC "withHighestRated") of it other simple componenet */}
                            {/* <RestaurantCard key={restaurant.info.id} res={restaurant}/> */}
                        </Link>
                    ))
                }
            </div>

        </div>
    )
}
export default Body;
