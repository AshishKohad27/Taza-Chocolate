import { useEffect, useState } from "react";

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
  const [openHam, setOpenHam] = useState(true);
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
                    <a
                      className="tchl-griditem-a"
                      href={item.link}
                      title={item.title}
                    >
                      {item.title}
                    </a>
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
                              <a
                                className="tchlgi-griditem-a"
                                href={subItem.link}
                                title={subItem.title}
                              >
                                {subItem.title}
                              </a>
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
              <a href="" className="tch-mid-logo-a">
                <img
                  className="tch-mid-logo"
                  src="../images/logo.avif"
                  alt=""
                />
              </a>
            </div>
          </div>
          {/* Right Section */}
          <div className="tch-right">3</div>
        </div>
      </div>
      {/* </div> */}
    </header>
  );
}
