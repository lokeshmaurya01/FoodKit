import { CDN_URL } from "../utils/constants";

const ItemList = ({items}) => {
  return (
    <div>
      {items.map((item)=>
      <div key={item.card.info.id} className="p-2 m-2 border-b-2 border-[#b9b4b4] text-left" >
          <div className="py-2 flex justify-between "> 
              
            <div className="w-9/12">
              <div className="py-2">
                <span className="text-lg">{item.card.info.name}</span> - <span className="font-bold">₹{item.card.info.price/100 ||item.card.info.defaultPrice/100}</span>
              </div>
              <p className="text-sm">{item.card.info.description}</p>
            </div>
            
            {(item.card.info.imageId) && 
            (<div className="w-3/12 rounded-md">
              <div className="absolute">
                <button className="p-1 font-bold mx-15 rounded-md bg-white shadow-lg m-auto">Add +</button> 
              </div>
              <img src={CDN_URL+item.card.info.imageId} alt="Food Image" className="w-full" /> 
            </div>)}
                  
          </div>
      </div>)}
    </div>
  )
}

export default ItemList;