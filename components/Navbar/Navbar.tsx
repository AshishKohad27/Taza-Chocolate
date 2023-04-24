import Link from "next/link";
import style from "./Navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect } from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { getDetailsFromToken } from "@/redux/auth/auth.action";

const NavBarLinks = {
  Buy: [
    { title: "Gifts", path: "/collections/Gifts" },
    { title: "Chocolate Bars", path: "/collections/Chocolate_Bars" },
    { title: "Chocolate Discs", path: "/collections/Chocolate_Discs" },
    { title: "Chocolate Snacks", path: "/collections/Chocolate_Snacks" },
    { title: "Everythings", path: "/collections/Everythings" },
  ],
  Learn: [
    { title: "Gifts", path: "/collections/Gifts" },
    { title: "Chocolate Bars", path: "/collections/Chocolate_Bars" },
    { title: "Chocolate Discs", path: "/collections/Chocolate_Discs" },
    { title: "Chocolate Snacks", path: "/collections/Chocolate_Snacks" },
    { title: "Everythings", path: "/collections/Everythings" },
  ],
  Visit: [
    { title: "Gifts", path: "/collections/Gifts" },
    { title: "Chocolate Bars", path: "/collections/Chocolate_Bars" },
    { title: "Chocolate Discs", path: "/collections/Chocolate_Discs" },
    { title: "Chocolate Snacks", path: "/collections/Chocolate_Snacks" },
    { title: "Everythings", path: "/collections/Everythings" },
  ],
};

export default function Navbar() {
  const dispatch: Dispatch<any> = useDispatch();
  const { isAuth, tokenDetails } = useSelector((store: any) => store.auth);

  console.log("tokenDetails:", tokenDetails);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const SendToken = {
        access_token: localStorage.getItem("access_token"),
      };
      console.log("SendToken:", SendToken);
      dispatch(getDetailsFromToken(SendToken));
    }
  }, [isAuth, dispatch]);

  return (
    <div>
      <div className={style.container}>
        <div className={style.mediaLeft}>
          <MediaButton  />
        </div>
        <div className={style.left}>
          <div className={style.leftContent}>
            <div className={style.buy_Container}>
              <h1 className={style.buy_h1}>
                <Link href="/collections">Buy</Link>
              </h1>
              <div className={style.subLeftBuy}>
                <div>
                  {NavBarLinks &&
                    NavBarLinks.Buy.map((item, index) => (
                      <h1 key={index} className={style.hoversub}>
                        <Link href={`${item.path}`}>{item.title}</Link>
                      </h1>
                    ))}
                </div>
              </div>
            </div>

            <div className={style.learn_Container}>
              <h1 className={style.learn_h1}>
                <Link href="/collections">Learn</Link>
              </h1>
              <div className={style.subLeftLearn}>
                <div>
                  {NavBarLinks &&
                    NavBarLinks.Learn.map((item, index) => (
                      <h1 key={index} className={style.hoversub}>
                        <Link href={`${item.path}`}>{item.title}</Link>
                      </h1>
                    ))}
                </div>
              </div>
            </div>

            <div className={style.visit_Container}>
              <h1 className={style.visit_h1}>
                <Link href="/collections">Visit</Link>
              </h1>
              <div className={style.subLeftVisit}>
                <div>
                  {NavBarLinks &&
                    NavBarLinks.Learn.map((item, index) => (
                      <h1 key={index} className={style.hoversub}>
                        <Link href={`${item.path}`}>{item.title}</Link>
                      </h1>
                    ))}
                </div>
              </div>
            </div>

            {/* <div className={style.visit_Container}>
              <h1 className={style.visit_h1}>
                <Link href="/login">Login</Link>
              </h1>
            </div> */}
           
          </div>
        </div>
        <div className={style.mid}>
          <Link href="/">
            <img src="/Images/Navbar/logo.png" alt="" />
          </Link>
        </div>
        <div className={style.right}>
          
        </div>
      </div>
    </div>
  );
}

function MediaButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  return (
    <>
      <GiHamburgerMenu onClick={onOpen}  />

    </>
  );
}
