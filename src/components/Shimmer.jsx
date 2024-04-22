const Shimmer=()=>{
    const arr=[1,2,3,4,5,6,7,8,9,10,11,12]
    return(
        <div className=" ml-10 flex justify-start flex-wrap">
            {
                arr.map((val,index)=>{
                    return <div key={index} className=" animate-pulse res-card m-2 p-2 w-[258px] h-[408px]  bg-[#c4c4c4] rounded-xl shadow-xl shadow-slate-200 hover:bg-[#e8e8e8]"></div>
                })     
            }
               
        </div>
    )
}
export default Shimmer;