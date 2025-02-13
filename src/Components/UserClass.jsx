import React from "react";

class UserClass extends React.Component{

    constructor(props){
        // have to use the keyword super
        super(props);

        this.state = {
            userInfo:{
                name: "dummyName",
                location: "default",
            }
          
        };

        console.log("Child constructor");

    }


    async componentDidMount(){

        const data = await fetch("https://api.github.com/users/aayambhatt");
        const json = await data.json();

        this.setState({
            userInfo: json,
        })

    }

    // render method that returns a JSX
    render(){

        const {name, location} = this.state.userInfo;



        return (
            <div className="userCard">
               <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>GitHub: aayambhatt</h4>
            </div>
            
            );
    }
}

export default UserClass;