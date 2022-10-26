import { createContext, useState } from "react";
export const AuthContext = createContext();

export default function AppContextProvider({ children }) {

    //Add to cart
    const [isProduct, setIsProduct] = useState(0);
    const [cartItem, setCartItem] = useState([]);
    const toggleAddCart = (id) => {
        console.log('toggleAddCart_id:', id)
        setIsProduct(isProduct + 1);
        setCartItem(id)
        // setCartItem()
    }
    console.log('isProduct:', isProduct);
    console.log('cartItem:', cartItem)

    //AUTH
    const [isAuth, setIsAuth] = useState(false);
    const toggleAuth = () => {
        setIsAuth(!isAuth);
    }

    return (
        <AuthContext.Provider value={{ isAuth, toggleAuth, isProduct, toggleAddCart }}>
            {children}
        </AuthContext.Provider>
    )
}