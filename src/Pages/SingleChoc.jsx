import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Css/SingleChoc.module.css";
import { useContext } from "react";
import { AuthContext } from "../Context/AppContextProvider";

const getData = (url) => {
    return fetch(url).then((res) => res.json());
}

export default function SingleChoc() {

    const {cartItem, toggleAddCart} = useContext(AuthContext);

    const { id } = useParams();
    console.log('id:', id)

    const [singleChocolate, setSingleChocolates] = useState([]);

    useEffect(() => {
        getData(`http://localhost:8668/chocolates/${id}`).then((res) => {
            setSingleChocolates(res);
        })
    }, [])

    // console.log('singleChocolate:', singleChocolate.title)

    return (
        <div className={styles.singleChocolate}>
            {/* step7:- appending all data over here */}
            <img src={singleChocolate.image} alt="products" />
            <p>
                Name : {singleChocolate.title}
            </p>
            <p>Price : {singleChocolate.price}</p>
            <p>{singleChocolate.description}</p>
            <button onClick={()=>toggleAddCart(id)}>Add to Cart</button>
            <p>
                <Link to="/products">GO BACK</Link>
            </p>
        </div>
    );
}