import { useState } from "react";

const Authenticate = ({ token }) => {
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    async function handleClick() {
        try {
            const response = await fetch(`https://fsa-jwt-practice.herokuapp.com/authenticate`, {
                method: `GET`, headers: {
                    "Content-type": "application/json", Authorization: `Bearer ${token}`,
                }
            });
            const data = await response.json();
            setSuccessMessage(data.message);
        } catch (error) {
            setError(error.message)
           // console.log(`it fires off`)
        }}


        return (
            <>

                <h2>Authenticate!</h2>
                {error && <p>{error}</p>}
                {successMessage && <p>{successMessage}</p>}
                <button onClick={handleClick}>Authenticate</button>
            </>
        )
    }

    export default Authenticate;
