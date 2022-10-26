import { useState, useEffect } from "react";
import styles from "./Css/Chocolates.module.css";
import { NavLink } from "react-router-dom";


const getData = (url) => {
    return fetch(url).then((res) => res.json());
}
export default function Products() {

    const [chocolates, setChocolates] = useState([]);
    const [order, setOrder] = useState("");

    useEffect(() => {
        getData(`http://localhost:8668/chocolates?_sort=price&_order=${order}`).then((res) => {
            setChocolates(res)
        })
    }, [order]);
    console.log('chocolates:', chocolates);

    const handleSort = (val) => {

        if (val === "asc") {
        //   getSort(val);
          setOrder(val)
        }
        else if (val === "desc") {
            console.log('val:', val)
            setOrder(val);
        }
        else {
            console.log('val:', val)
            setOrder(val)
        }
    }

    // const 
    return (
        <div >
            <h1>Hi from Product pages</h1>
            <div>
                <button onClick={() => handleSort("")}>Reset</button>
                <button onClick={() => handleSort("desc")}>Sort Price High to Low</button>
                <button onClick={() => handleSort("asc")}>Sort Price Low to High</button>
            </div>
            <div className={styles.Chocolates}>
                {
                    chocolates.map((ele) => (
                        <NavLink to={`/chocolates/${ele.id}`} key={ele.id}>
                            <div key={ele.id} >
                                <img src={ele.image} alt="Chocolates" />
                                <p>{ele.title}</p>
                                <p>{ele.price}</p>
                            </div>
                        </NavLink>
                    ))
                }
            </div>
        </div>
    )
}