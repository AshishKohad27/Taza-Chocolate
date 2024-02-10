"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoCartSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { SignInDialog } from "@/components/sign-in-dialog";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logout } from "@/redux/auth/auth-slice";

let headerList = [
  {
    title: "Buy",
    link: "#",
    subList: [
      {
        title: "Gifts",
        link: "#",
      },
      {
        title: "Chocolate Bars",
        link: "#",
      },
      {
        title: "Chocolate Discs",
        link: "#",
      },
      {
        title: "Chocolate Snacks",
        link: "#",
      },
      {
        title: "NEW Smooth & Crunchy Bars",
        link: "#",
      },
      {
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
  const [openHam, setOpenHam] = useState(false);

  const { successMessage, loading, error, isAuth } = useAppSelector(
    (state) => state.auth
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    // console.log({ successMessage, loading, error, isAuth });
  }, [isAuth]);

  useEffect(() => {
    // console.log("tabPosition:", tabPosition);
    // console.log("openHam:", openHam);
  }, [tabPosition, openHam]);

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
                              <Link
                                className="tchlgi-griditem-a"
                                href={`/collections/${subItem.title}`}
                                title={subItem.title}
                              >
                                {subItem.title}
                              </Link>
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
            {isAuth ? "Ashish Kohad" : ""}
            <button
              onClick={() => {
                dispatch(logout());
              }}
            >
              Logout
            </button>
            <ul className="tchr-list">
              <li>
                <a href="" title="Join Our Mailing List">
                  <MdOutlineEmail /> Join Our Mailing List
                </a>
              </li>
              <li>
                <a title="Sign In">
                  <SignInDialog />
                </a>
              </li>
              <li>
                <a href="" title="Search">
                  <FaSearch />
                </a>
              </li>
              <li>
                <a href="" title="cart-page">
                  <IoCartSharp />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* </div> */}
    </header>
  );
}