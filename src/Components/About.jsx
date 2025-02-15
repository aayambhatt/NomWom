import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";


class About extends Component {

    constructor(props) {
        super(props);

        console.log("Parent constructor");

    };

    componentDidMount(){
        console.log("Parent component did mount");
    }

    render(){
        console.log("Parent render");
        return (
            <div>
                <h1>About</h1>
                <h2>This is my project</h2>
               <UserClass name={"Aayam(Class)"}/>
            </div>
        )
        
    }
}




// const About = () => {

    // return (
    //     <div>
    //         <h1>About</h1>
    //         <h2>This is my project</h2>
    //        <UserClass name={"Aayam(Class)"}/>
    //     </div>
    // )
// }

export default About;