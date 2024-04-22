import { useRouteError } from "react-router-dom";
const Error=()=>{
    const err=useRouteError();
    console.log(err);
    return(
        <div className="error">
            <h1>OOPs!</h1>
            <h2>Something Went Wrong............</h2>
            <h3>{err.status} : {err.statusText} ({err.error.message})</h3>
        </div>
    )
}
export default Error;