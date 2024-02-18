import { GrView } from "react-icons/gr";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import { FaCaretDown, FaCaretUp } from "react-icons/fa6";

export default function AdminTable() {
  return (
    <div className="table-container">
      <div className="site-container">
        {/* <div className="table-inner"> */}
        <div className="toolbar">
          <div className="top-toolbar">
            <div className="toolbar-container">
              {/* top */}
              <div className="top-toolbar">
                <div className="tc-search-bar">
                  <div className="tc-search-svg">
                    <IoSearchSharp />
                  </div>
                  <input
                    className="search-input"
                    type="text"
                    placeholder="Search..."
                  />
                </div>
              </div>
              {/* bottom */}
              <div className="bottom-toolbar">
                <div className="tc-btn-box">
                  <button className="tc-btn tc-btn-input">
                    All <span>99</span>
                  </button>
                  <select name="" id="" className="tc-btn">
                    <option>-</option>
                    <option>Delete Seleted Items</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="admin-table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
                <th>
                  <div className="th-box">
                    <span>#</span>
                    <div className="th-updown">
                      <FaCaretUp className="th-svg th-svg-gray" />
                      <FaCaretDown className="th-svg th-svg-black" />
                    </div>
                  </div>
                </th>
                <th>Title</th>
                <th>Description</th>
                <th className="tr-lastchild">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>1</td>
                <td>Category Title</td>
                <td>Lorem ipsum dolor</td>
                <td className="td-actions tr-lastchild">
                  <button
                    className="td-action-btn td-action-view"
                    type="button"
                  >
                    <GrView />
                  </button>
                  <button
                    className="td-action-btn td-action-edit"
                    type="button"
                  >
                    <CiEdit />
                  </button>
                  <button className="td-action-btn td-action-del" type="button">
                    <MdDelete />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="table-pagination">
          <div className="table-pagination-container">
            <button className="tab-pagi-btn">1</button>
            <button className="tab-pagi-btn">2</button>
            <button className="tab-pagi-btn">3</button>
            <button className="tab-pagi-btn">...</button>
            <button className="tab-pagi-btn">1</button>
            <button className="tab-pagi-btn">2</button>
            <button className="tab-pagi-btn">3</button>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}
