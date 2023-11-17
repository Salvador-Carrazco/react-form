import {useState} from 'react';

const SignUpForm = ({setToken}) => {

    const [username, setUserName] = useState(``);
    const [password, setPassword] = useState(``);  
    const [error, setError] = useState(null);

    async function handleSubmit(e) {
    e.preventDefault();
    try{   
        const response = await fetch(`https://fsa-jwt-practice.herokuapp.com/signup`, {
            method: `POST`,
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        const data = await response.json();
        setToken(data.token) 
        console.log(data.token)
    }catch(error){
        setError(error.message)
    }
    //console.log (`is anybody out there?`);
}

return (
    <>
    <h2>Sign Up!</h2>
    {error && <p>{error}</p>}
    <form onSubmit={handleSubmit}>
        <label>
            User:<input value = {username} onChange={(e) => setUserName(e.target.value)} />
        </label>
        <label>
            Password:<input value = {password}  onChange={(e) => setPassword(e.target.value)} />
        </label>
        <input type="submit" />
    </form>
    </>
    )

} 

export default SignUpForm;