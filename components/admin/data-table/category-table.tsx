import { useEffect, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { FaCaretDown, FaCaretUp } from "react-icons/fa6";
import ItemLimit from "@/components/admin/data-table/item-limit";
import Category_Form_Edit from "@/components/admin/data-table/category-forms/edit-form";
import Category_Form_Delect from "@/components/admin/data-table/category-forms/delect-form";
import Category_Form_Create from "@/components/admin/data-table/category-forms/create-form";
import { CategoryData } from "@/constant/client/category";
import { pageProps } from "@/constant/client/client-global";
import { TbRefresh } from "react-icons/tb";
import { useAppDispatch } from "@/redux/hooks";
import { GetCategoryAction } from "@/redux/category/category-action";
import TableRowBody from "@/components/client/skeleton/table-row-body";
import TableRowHead from "@/components/client/skeleton/table-row-head";

interface CategoryTableProps {
  data: CategoryData[];
  handleRefresh: Function;
  loading: boolean;
}

let intialState: pageProps = {
  search: "",
  page: 1,
  limit: 10,
  orderBy: "",
  order: "",
};

export default function CategoryTable({
  data,
  handleRefresh,
  loading,
}: CategoryTableProps) {
  console.log({ data });
  const [flag, setFlag] = useState<boolean>(false);
  const [formData, setFormData] = useState<pageProps>(intialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(GetCategoryAction(formData));
  }, [dispatch, formData]);

  const tableRefresh = () => {
    console.log("Table Refresh!!!");
    handleRefresh();
  };

  const orderByCategoryTitle = (value: any) => {
    console.log({ value });

    if (flag) {
      // intialState = {
      //   ...intialState,
      //   orderBy: value,
      //   order: "asc",
      // };

      setFormData({
        ...formData,
        orderBy: value,
        order: "asc",
      });
      dispatch(GetCategoryAction(formData));
    } else {
      // intialState = {
      //   ...intialState,
      //   orderBy: value,
      //   order: "desc",
      // };
      setFormData({
        ...formData,
        orderBy: value,
        order: "desc",
      });
      dispatch(GetCategoryAction(formData));
    }

    console.log({ intialState });

    setFlag(!flag);
  };

  const handleLimits = (value: any) => {
    console.log({ value });
    setFormData({
      ...formData,
      limit: value,
    });
  };

  const { search, page, limit } = formData;

  return (
    <div className="table-container">
      <div className="site-container">
        {/* <div className="table-inner"> */}
        <div className="toolbar">
          <div className="top-toolbar">
            <div className="toolbar-container">
              {/* top */}
              <div className="top-toolbar">
                <div className="create-form">
                  <Category_Form_Create />
                </div>
                <div className="tc-search-bar">
                  <div className="tc-search-svg">
                    <IoSearchSharp />
                  </div>
                  <input
                    className="search-input"
                    name="search"
                    value={search}
                    onChange={handleChange}
                    type="text"
                    placeholder="Search..."
                  />
                </div>
              </div>
              {/* bottom */}
              <div className="bottom-toolbar">
                <div className="tc-btn-box">
                  <button className="tc-btn tc-btn-input">
                    All <span>{data && data.length}</span>
                  </button>
                  {/* <select name="" id="" className="tc-btn">
                    <option>-</option>
                    <option>Delete Seleted Items</option>
                  </select> */}
                  <ItemLimit handleLimits={handleLimits} />
                </div>
                <div>
                  <button
                    className={`tc-btn tc-btn-input ${
                      loading ? "tc-btn-refresh" : ""
                    }`}
                    onClick={() => tableRefresh()}
                  >
                    <span>Refresh</span>
                    <span>
                      <TbRefresh />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="admin-table-container">
          <table className="admin-table">
            {loading && loading ? (
              <TableRowHead />
            ) : (
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
                  <th>
                    <div className="th-box">
                      <span>Title</span>
                      <div
                        className="th-updown"
                        onClick={() => orderByCategoryTitle("title")}
                      >
                        <FaCaretUp
                          className={`th-svg ${
                            flag ? "th-svg-gray" : "th-svg-black"
                          }`}
                        />
                        <FaCaretDown
                          className={`th-svg ${
                            flag ? "th-svg-black" : "th-svg-gray"
                          }`}
                        />
                      </div>
                    </div>
                  </th>
                  <th>Images</th>
                  <th className="tr-lastchild">Actions</th>
                </tr>
              </thead>
            )}

            {loading && loading ? (
              <TableRowBody />
            ) : (
              <tbody>
                {data &&
                  data.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td>{index + 1}</td>
                      <td>{item.title}</td>
                      <td>
                        <div className="at-img-box">
                          <img
                            className="at-img at-img-cat"
                            src={item.image_url}
                            alt={item.title}
                          />
                        </div>
                      </td>
                      <td className="td-actions tr-lastchild">
                        <Category_Form_Edit CategoryId={item._id} />
                        <Category_Form_Delect CategoryId={item._id} />
                      </td>
                    </tr>
                  ))}
              </tbody>
            )}
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
