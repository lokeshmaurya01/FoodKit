import React, { Suspense, lazy ,useState,useEffect} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"; /*default import*/
import Body from "./components/Body";
import {Outlet, RouterProvider, createBrowserRouter} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const Grocery=lazy(()=>import("./components/Grocery"));

const AppLayout=()=>{

    const [userInfo,setUserInfo]=useState("Lokesh");
    useEffect(()=>{
        const data={
            name:"Lokesh Maurya",
        }
        setUserInfo(data.name);
    },[])
    return(
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser: userInfo,setUserInfo}}> 
                <div className="app">
                    <Header />
                    <div className="p-8">
                        <Outlet/>
                    </div>
                    
                </div>
            </UserContext.Provider>
        </Provider>
    )
}

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<h1>LOADING .........</h1> }><Grocery/></Suspense>
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu/>
            }
        ],
        errorElement:<Error/>
    },
    
])

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>)