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
  return (
    <header className="tc-header-outer">
      <div className="site-container">
        <div className="tc-header-inner">
          {/* Desktop View */}
          {/* <div className="tch--desk-grid"> */}
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
                              <li className="tchlgi-griditem">
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
                <li className="tchl-griditem">
                  <a className="tchl-griditem-a" title="Menu">
                    Menu
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
                                className="tabs-listitem tabs-listitem--active"
                                key={index}
                              >
                                <a
                                  className="tabs-listitem-a"
                                  title={item.title}
                                >
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
                                className="tab-content"
                              >
                                <ul className="tab-content-list">
                                  {item.subList.map((subItem, subIndex) => (
                                    <li className="tab-content-listitem">
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
            <div className="tch-mid">2</div>
            {/* Right Section */}
            <div className="tch-right">3</div>
          </div>
        </div>
      {/* </div> */}
    </header>
  );
}
