import { useEffect, useState } from "react";

const User = (props)=>{

    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    useEffect(()=>{
        //API calls

    },[])


return (
<div className="userCard">
    <h1>Count = {count}</h1>
    <h1>Count2 = {count2}</h1>
    <h2>Name:{props.name}</h2>
    <h3>Location: Kota, Rajasthan</h3>
    <h4>GitHub: aayambhatt</h4>
    <button onClick={() => setCount(count + 1)}>Increase Count</button>
</div>

);

};

export default User;
