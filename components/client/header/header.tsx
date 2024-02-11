"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoCartSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { SignInDialog } from "@/components/sign-in-dialog";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { verifyAuth } from "@/redux/auth/auth-action";
import axios from "axios";
import { Profile } from "./profile";

interface SubListItem {
  CollectionId?: number;
  title: string;
  link: string;
}

let headerList: { title: string; link: string; subList: SubListItem[] }[] = [
  {
    title: "Buy",
    link: "#",
    subList: [
      {
        CollectionId: 7,
        title: "Gifts",
        link: "#",
      },
      {
        CollectionId: 6,
        title: "Chocolate Bars",
        link: "#",
      },
      {
        CollectionId: 1,
        title: "Chocolate Discs",
        link: "#",
      },
      {
        CollectionId: 8,
        title: "Chocolate Snacks",
        link: "#",
      },
      {
        CollectionId: 3,
        title: "NEW Smooth & Crunchy Bars",
        link: "#",
      },
      {
        CollectionId: 10,
        title: "Everything",
        link: "#",
      },
    ],
  },
  {
    title: "Learn",
    link: "#",
    subList: [
      {
        title: "About Taza",
        link: "#",
      },
      {
        title: "Our Process",
        link: "#",
      },
      {
        title: "Taza Direct Trade",
        link: "#",
      },
      {
        title: "Taza Direct Trade",
        link: "#",
      },
      {
        title: "Recipes",
        link: "#",
      },
      {
        title: "Blog",
        link: "#",
      },
      {
        title: "Wholesale",
        link: "#",
      },
    ],
  },
  {
    title: "Visit",
    link: "#",
    subList: [
      {
        title: "Our Factory Store",
        link: "#",
      },
      {
        title: "Tours & Events",
        link: "#",
      },
      {
        title: "Virtual Experiences",
        link: "#",
      },
    ],
  },
];
export default function Header() {
  const [tabPosition, setTabPosition] = useState("tab-1");
  const [openHam, setOpenHam] = useState<boolean>(false);
  const [userName, SetUserName] = useState<string>("");
  const [flag, setFlag] = useState<boolean>(false);

  const {
    successMessage,
    loading,
    error,
    isAuth,
    token,
    AuthorizedUserDetails,
  } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // if (!isAuth) {
    const payload = {
      token: axios.defaults.headers.common["Token_taza"],
    };

    dispatch(verifyAuth({ payload }));
    // }
    // console.log("flag:", flag);
  }, [isAuth, dispatch, flag]);

  useEffect(() => {
    let name =
      AuthorizedUserDetails[0]?.first_name !== undefined
        ? AuthorizedUserDetails[0].first_name
        : "";
    if (!isAuth) {
      name = "";
    }
    // console.log("name:", name);
    SetUserName(name);
  }, [tabPosition, openHam, loading, isAuth]);

  const handelFlag = () => {
    setTimeout(() => {
      setFlag(!flag);
    }, 1000);
    // console.log("flag value actived", flag);
  };
  return (
    <header className="tc-header-outer">
      <div className="site-container">
        <div className="tc-header-inner">
          {/* Left Section */}
          <div className="tch-left">
            {/* Left Grid : Desktop View*/}
            <ul className="tch-left-grid tch--desk-view">
              {headerList &&
                headerList.map((item, index) => (
                  <li className="tchl-griditem" key={index}>
                    <Link
                      className="tchl-griditem-a"
                      href={item.link}
                      title={item.title}
                    >
                      {item.title}
                    </Link>
                    {/* griditem Triangle */}
                    <div className="tchl-gi-tribox">
                      <div className="tchl-gi-tri"></div>
                    </div>
                    {/* sub item in griditem */}
                    <div className="tchl-gi-subbox">
                      <div className="site-container">
                        <ul className="tchlgi-grid">
                          {item.subList.map((subItem, subIndex) => (
                            <li className="tchlgi-griditem" key={subIndex}>
                              {item.title === "Buy" ? (
                                <Link
                                  className="tchlgi-griditem-a"
                                  // href={`/collections/${subItem.title}`}
                                  href={{
                                    pathname: `/collections/${subItem.title}`,
                                    query: {
                                      col: subItem.CollectionId,
                                    },
                                  }}
                                  title={subItem.title}
                                >
                                  {subItem.title}
                                </Link>
                              ) : (
                                <Link
                                  className="tchlgi-griditem-a"
                                  // href={`/collections/${subItem.title}`}
                                  href={{
                                    pathname: `/${subItem.title}`,
                                  }}
                                  title={subItem.title}
                                >
                                  {subItem.title}
                                </Link>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
            {/* Left Grid : Mobile View*/}
            <ul className="tch-left-grid tch--mob-view">
              <li
                className={`tchl-griditem--mob ${
                  openHam ? "isSubMenuOpen" : ""
                }`}
              >
                <a
                  className="tchl-griditem-a"
                  title="Menu"
                  onClick={() => setOpenHam(!openHam)}
                >
                  <div
                    className={`tchl-ham ${openHam ? "tchl-ham--active" : ""}`}
                  >
                    <span className="tchl-ham-bar"></span>
                    <span className="tchl-ham-bar"></span>
                    <span className="tchl-ham-bar"></span>
                  </div>
                  <span>Menu</span>
                </a>
                {/* griditem Triangle */}
                <div className="tchl-gi-tribox">
                  <div className="tchl-gi-tri"></div>
                </div>
                {/* sub item in griditem */}
                <div className="tchl-gi-subbox">
                  <div className="site-container">
                    <div className="tchlgi-mob">
                      <ul className="tabs-menu">
                        {headerList &&
                          headerList.map((item, index) => (
                            <li
                              className={`tabs-listitem ${
                                tabPosition === `tab-${index + 1}`
                                  ? "tabs-listitem--active"
                                  : ""
                              }`}
                              key={index}
                              onClick={() => setTabPosition(`tab-${index + 1}`)}
                            >
                              <a className="tabs-listitem-a" title={item.title}>
                                {item.title}
                              </a>
                            </li>
                          ))}
                      </ul>

                      <div className="tab">
                        {headerList &&
                          headerList.map((item, index) => (
                            <div
                              key={index}
                              data-tab={`tab-${index + 1}`}
                              className={`tab-content ${
                                tabPosition === `tab-${index + 1}`
                                  ? "tab-content--show"
                                  : "tab-content--hide"
                              }`}
                            >
                              <ul className="tab-content-list">
                                {item.subList.map((subItem, subIndex) => (
                                  <li
                                    className="tab-content-listitem"
                                    key={subIndex}
                                  >
                                    <a
                                      role="menuitem"
                                      className="tab-content-listitem-a"
                                      href={subItem.link}
                                    >
                                      {subItem.title}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          {/* Middle Section */}
          <div className="tch-mid">
            <div className="tch-mid-logo-box">
              <a href="/" className="tch-mid-logo-a">
                <img
                  className="tch-mid-logo"
                  src="https://raw.githubusercontent.com/AshishKohad27/Taza-Chocolate/main/public/Images/logo.avif"
                  alt=""
                />
              </a>
            </div>
          </div>
          {/* Right Section */}
          <div className="tch-right">
            {/* <h2>{userName && userName}</h2>
            <button
              onClick={() => {
                dispatch(logout());
              }}
            >
              Logout
            </button> */}
            <ul className="tchr-list">
              <li className="tchr-listitem">
                <button type="button" className="tchr-listitem-a">
                  <MdOutlineEmail className="tchr-listitem-svg" />{" "}
                  <span className="tchr-listitem-span">
                    Join Our Mailing List
                  </span>
                </button>
              </li>
              <li className="tchr-listitem">
                {/* <button className="tchr-listitem-a">
                  <RiAdminFill className="tchr-listitem-svg" />
                  <span className="tchr-listitem-span">Sign in</span>
                </button> */}
                <SignInDialog handelFlag={handelFlag} />
              </li>
              <li className="tchr-listitem">
                <a href="/search" title="Search" className="tchr-listitem-a">
                  <FaSearch className="tchr-listitem-svg" />
                </a>
              </li>
              <li className="tchr-listitem">
                <a href="/cart" title="cart-page" className="tchr-listitem-a">
                  <IoCartSharp className="tchr-listitem-svg" />
                </a>
              </li>
              <li className="tchr-listitem">
                <Profile />
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* </div> */}
    </header>
  );
}
