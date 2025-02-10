import { useRouteError } from "react-router-dom";


const Error = () => {
    const err = useRouteError();
    console.log(err);
  return (
    <div className="error-container">
      <h1>Oops!!!</h1>
      <h2>Something went wrong!!!</h2>
      <img 
        src="https://i.imgur.com/Ym7DRnL.jpeg" 
        alt="Error Kitty" 
        className="error-image"
      />
    </div>
  );
}

export default Error;
