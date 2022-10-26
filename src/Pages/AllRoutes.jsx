import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import FAQs from "./FAQs";
import Products from "./Products";
import Cart from "./Cart";
import PagesNotFound from "./PagesNotFound";
import SingleChoc from "./SingleChoc";
import Login from "./login";
import Signup from "./Signup";
import PrivatesRoutes from "./PrivatesRoutes";

export default function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/products" element={
                <PrivatesRoutes>
                    <Products />
                </PrivatesRoutes>
            }></Route>
            <Route path="/contact" element={
                <PrivatesRoutes>
                    <Contact />
                </PrivatesRoutes>
            }></Route>
            <Route path="/faqs" element={<FAQs />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/cart" element={
                <PrivatesRoutes>
                    <Cart />
                </PrivatesRoutes>
            }></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/singup" element={<Signup />}></Route>
            <Route path="/chocolates/:id" element={
                <PrivatesRoutes>
                    <SingleChoc />
                </PrivatesRoutes>
            }></Route>
            <Route path="*" element={< PagesNotFound />}></Route>
        </Routes>
    )
}