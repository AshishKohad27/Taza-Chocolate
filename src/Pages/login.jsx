import { AuthContext } from "../Context/AppContextProvider"
import { useContext } from "react"

export default function Login() {
    const { isAuth, toggleAuth } = useContext(AuthContext);
    return (
        <div>
            <h1>Welcome Login</h1>
            <button disabled={isAuth} onClick={toggleAuth}>Submit</button>
        </div>
    )
}