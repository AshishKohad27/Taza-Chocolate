import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { CiEdit } from "react-icons/ci";
import { useEffect, useState } from "react";
import {
  GetByIdCategoryAction,
  UpdateCategoryAction,
} from "@/redux/category/category-action";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { PayloadCategory } from "@/constant/client/category";
import CategoryFormSkeleton from "@/components/client/skeleton/category-form";

type CategoryEditFormProps = {
  categoryId: string | undefined;
};

const initialState: PayloadCategory = {
  title: "",
  image_url: "",
};

export default function Category_Form_Edit({
  categoryId,
}: CategoryEditFormProps) {
  const [formData, setFormData] = useState<PayloadCategory>(initialState);
  const { singleData, loading } = useAppSelector((state) => state.category);
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleClick = (event: any) => {
    console.log("CategoryId Edit Form:", categoryId);
    if (categoryId) {
      dispatch(GetByIdCategoryAction({ categoryId }));
    }
  };

  useEffect(() => {
    if (singleData.length > 0) {
      setFormData({
        ...formData,
        title: singleData[0].title,
        image_url: singleData[0].image_url,
      });
    }
  }, [singleData]);

  // useEffect(() => {
  //   console.log(singleData);
  // }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // console.log("Category Added!!!", formData);
    const payload = formData;
    console.log({ categoryId, ...formData });
    // dispatch(AddCategoryAction({ payload }));
    // setFormData(initialState);
    // setOpen(false);
    if (categoryId) {
      dispatch(UpdateCategoryAction({ categoryId, ...formData }));
    }
  };

  const { title, image_url } = formData;

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button
          className="td-action-btn td-action-edit"
          onClick={(event) => handleClick(event)}
          type="button"
        >
          <CiEdit />
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            {loading ? (
              <CategoryFormSkeleton />
            ) : (
              <form onSubmit={handleSubmit} className="tm-form">
                <div className="tm-formcontrol">
                  <label className="tm-fc-label" htmlFor="tm-fc-title">
                    Title
                  </label>
                  <input
                    className="tm-fc-input tm-fc-title"
                    name="title"
                    value={title}
                    onChange={handleChange}
                    id="tm-fc-title"
                    placeholder="Title..."
                    required
                  />
                </div>
                <div className="tm-formcontrol">
                  <label className="tm-fc-label" htmlFor="">
                    Image URL
                  </label>
                  <div className="tm-fc-img-box">
                    <img className="tm-fc-img" src={image_url} alt={title} />
                  </div>
                  <input
                    className="tm-fc-input tm-fc-title"
                    name="image_url"
                    value={image_url}
                    onChange={handleChange}
                    placeholder="Image URL..."
                    required
                  />
                </div>
                <div className="tm-formcontrol">
                  <AlertDialogCancel>
                    <input
                      className="tm-fc-input tm-fc-submit"
                      type="submit"
                      value="SUBMIT"
                    />
                  </AlertDialogCancel>
                </div>
              </form>
            )}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
