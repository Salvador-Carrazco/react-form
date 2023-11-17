import { useState } from "react";

const Authenticate = ({token}) => {
   const [error, setError] = useState(null);
    async function handleClick(){
      try{

      }catch(error){
      setError(error.message)
      
        console.log(`it fires off`)
    }


    return (
    <>
    
        <h2>Authenticate!</h2>
        {error && <p>{error}</p>}
        <button onClick={handleClick}>Authenticate</button>
    </>
)
}

export default Authenticate;
