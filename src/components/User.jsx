import { useState } from "react";

const User=()=>{
    const [count]=useState(0);
    return(
        <div className="user-card">
            <h2>Count:{count}</h2>
            <h2>Name: Lokesh</h2>
            <h3>Location: Chandigarh</h3>
            <h4>Contact:Lokesh01@</h4>
        </div>
    )
}
export default User;