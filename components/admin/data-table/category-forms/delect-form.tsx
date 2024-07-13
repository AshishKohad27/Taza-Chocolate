import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { MdDelete } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

import { useEffect } from "react";
import {
  GetByIdCategoryAction,
  DeleteCategoryAction,
} from "@/redux/category/category-action";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import CategoryFormSkeleton from "@/components/client/skeleton/category-form";

type CategoryDeleteFormProps = {
  categoryId: string | undefined;
};

export default function Category_Form_Delete({
  categoryId,
}: CategoryDeleteFormProps) {
  const { singleData, loading } = useAppSelector((state) => state.category);
  const dispatch = useAppDispatch();

  const handleClick = (event: any) => {
    console.log("CategoryId Edit Form:", categoryId);
    if (categoryId) {
      dispatch(GetByIdCategoryAction({ categoryId }));
    }
  };

  useEffect(() => {}, [singleData]);

  const handelDelete = () => {
    if (categoryId) {
      dispatch(DeleteCategoryAction({ categoryId }));
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button
          className="td-action-btn td-action-del"
          onClick={(event) => handleClick(event)}
          type="button"
        >
          <MdDelete />
        </button>
      </AlertDialogTrigger>

      <AlertDialogContent className="modal-content">
        <AlertDialogHeader>
          {/* <AlertDialogCancel className="modal-cross">
            <RxCross2 />
          </AlertDialogCancel> */}
          <AlertDialogTitle>
            <div className="modal-header">
              <p> Are you sure?</p>
              <AlertDialogCancel className="modal-cross">
                <RxCross2 />
              </AlertDialogCancel>
            </div>
          </AlertDialogTitle>
          <AlertDialogDescription>
            {/* <input /> */}
            {loading ? (
              <CategoryFormSkeleton />
            ) : (
              <form className="tm-form">
                <div className="tm-formcontrol">
                  <label className="tm-fc-label" htmlFor="tm-fc-title">
                    {singleData[0] && singleData[0].title}
                  </label>
                </div>
                <div className="tm-formcontrol">
                  <div className="tm-fc-img-box">
                    <img
                      className="tm-fc-img"
                      src={singleData[0] && singleData[0].image_url}
                      alt={singleData[0] && singleData[0].title}
                    />
                  </div>
                </div>
                <div className="tm-formcontrol">
                  <AlertDialogCancel>
                    <input
                      onClick={() => handelDelete()}
                      className="tm-fc-input tm-fc-submit"
                      type="submit"
                      value="DELETE"
                    />
                  </AlertDialogCancel>
                </div>
              </form>
            )}
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
}
