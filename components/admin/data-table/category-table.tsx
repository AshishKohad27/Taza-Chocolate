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
  total: number;
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
  total,
}: CategoryTableProps) {
  const [flag, setFlag] = useState<boolean>(false);
  const [refresh, setRefresh] = useState<boolean>(false);
  const [noOfPages, setNoOfPages] = useState<number>(0);

  const [formData, setFormData] = useState<pageProps>(intialState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(GetCategoryAction(formData));
    console.log(formData);
  }, [dispatch, formData]);

  useEffect(() => {
    handlePageButtons(total);
    // console.log({ limit });
  }, [total, formData, refresh]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const tableRefresh = () => {
    handleRefresh();
    setFormData(intialState);
  };

  const orderByCategoryTitle = (value: any) => {
    if (flag) {
      setFormData({
        ...formData,
        orderBy: value,
        order: "asc",
      });
      dispatch(GetCategoryAction(formData));
    } else {
      setFormData({
        ...formData,
        orderBy: value,
        order: "desc",
      });
      dispatch(GetCategoryAction(formData));
    }

    setFlag(!flag);
  };

  const handleLimits = (value: any) => {
    setFormData({
      ...formData,
      limit: value,
    });
  };

  const handlePage = (value: number) => {
    // console.log({ value });
    setFormData({
      ...formData,
      page: value,
    });
    setRefresh(!refresh);
  };

  const handlePageButtons = (total: number) => {
    // console.log({ limit, length: total });
    let pageBtn = Math.ceil(total / Number(limit));
    console.log({ pageBtn });
    setNoOfPages(pageBtn);
  };

  const { search, page, limit } = formData;

  return (
    <div className="table-container">
      <div className="site-container">
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
                    value={search || ""}
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
                    All <span>{data && total}</span>
                  </button>
                  {/* <select name="" id="" className="tc-btn">
                    <option>-</option>
                    <option>Delete Seleted Items</option>
                  </select> */}
                  <ItemLimit handleLimits={handleLimits} limit={limit} />
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

            {false ? (
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
                        {/* <Category_Form_Edit categoryId={item._id} />
                        <Category_Form_Delect categoryId={item._id} /> */}
                      </td>
                    </tr>
                  ))}
              </tbody>
            )}
          </table>
        </div>
        <div className="table-pagination">
          <div className="table-pagination-container">
            {noOfPages > 0
              ? Array.from({ length: noOfPages }).map((_, index) => (
                  <button
                    key={index}
                    className={`tab-pagi-btn ${
                      page === index + 1 ? "tab-pagi-btn--active" : ""
                    }`}
                    onClick={() => handlePage(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))
              : ""}
            {/* <button className="tab-pagi-btn" onClick={() => handlePage(1)}>
              1
            </button>
            <button className="tab-pagi-btn">2</button>
            <button className="tab-pagi-btn">3</button>
            <button className="tab-pagi-btn">...</button>
            <button className="tab-pagi-btn">1</button>
            <button className="tab-pagi-btn">2</button>
            <button className="tab-pagi-btn">3</button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
