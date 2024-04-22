import React from "react";
class UserClass extends React.Component{  // Making class componenets by extending it with React.Component Class
    constructor(props){
        super(props)        // Accepting Props
        this.state={
            userInfo:{
                name: "dummy",
                location: "dummy",
            }
        }
    }

    async componentDidMount(){
        const data=await fetch("https://api.github.com/users/lokeshmaurya01")
        const json=await data.json();
        this.setState(this.state.userInfo=json);
    }
    render(){               // render  function is a must for every component in react.
        const {name1}=this.props; // Destructuring props
        const {count1,count2} =this.state;
        const {name,location}=this.state.userInfo;   //Destructuring state
        return(
            <div className="user-card">
                {/* <h2>Count:{count1} </h2>
                <button onClick={()=>{
                    this.setState({
                        count1:this.state.count1+1, 
                    })
                }}>
                    Increase Count
                </button> */}
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact:Lokesh01@</h4>
            </div>
        )
    }
}
export  default UserClass;