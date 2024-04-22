import { CDN_URL } from "../utils/constants"; /*named import*/

const RestaurantCard=(props)=>{
    const{res}=props;
    const{cloudinaryImageId,
        name,
        costForTwo,
        cuisines,
        avgRating,
        sla
    }=res?.info;
    return(
        <div className="res-card m-2 p-2 w-[258px] h-[408px]  bg-[#ffffff] rounded-xl shadow-xl shadow-slate-200 hover:bg-[#e8e8e8]" >
            <img className="res-logo w-[245] h-[200] object-fill rounded-md my-1 " src={CDN_URL+cloudinaryImageId}/>
            <h3 className="font-bold my-2 text-xl">{name}</h3> {/*Props in React*/}
            <h4 className="my-1">{costForTwo}</h4>
            <h4 className=" w-full overflow-hidden whitespace-nowrap text-ellipsis my-1 ">{cuisines.join(",")}</h4>
        <h5 className="font-bold my-1">{avgRating}⭐</h5>
            <h5 className="delTime my-1">{sla.deliveryTime} min</h5>
        </div>
    )
}

export const withHighestRated=(RestaurantCard)=>{
    return(props)=>{ //receiving props
        return(
            <div>
                <label className="absolute bg-[#1f211f] text-white ml-2 p-1 rounded-lg">Highest Rated</label>
                <RestaurantCard {...props}/>{ /*passing recieved props to Actual Component*/}
            </div>
        )
    }
}
export default RestaurantCard;