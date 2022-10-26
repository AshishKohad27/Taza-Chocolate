import React ,{ useContext } from "react";
import { AuthContext } from "../Context/AppContextProvider";

export default function Home() {
    const {isAuth, toggleAuth} = useContext(AuthContext);
    return (
        <div>
            <h1>Hi from Home pages</h1>
            <button disabled={!isAuth} onClick={toggleAuth}>Log Out</button>
        </div>
    )
}