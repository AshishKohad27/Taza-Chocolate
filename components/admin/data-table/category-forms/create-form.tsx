import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { RxCross2 } from "react-icons/rx";
import { MdAdd } from "react-icons/md";
import { PayloadCategory } from "@/constant/client/category";
import { useState } from "react";
import { AddCategoryAction } from "@/redux/category/category-action";
import { useAppDispatch } from "@/redux/hooks";

const initialState: PayloadCategory = {
  title: "",
  image_url: "",
};

export default function Category_Form_Create() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState<PayloadCategory>(initialState);
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleClick = (event: any) => {
    console.log("Enter!!!");
    console.log("CategoryId Edit Form:");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Category Added!!!", formData);
    const payload = formData;
    console.log({ payload });
    dispatch(AddCategoryAction({ payload }));
    setFormData(initialState);
    setOpen(false);
  };

  const { title, image_url } = formData;
  return (
    <AlertDialog >
      <AlertDialogTrigger asChild>
        <button
          onClick={(event) => handleClick(event)}
          type="button"
          className="form-add-btn"
        >
          <span>Add Category</span>
          <MdAdd />
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
                />
              </div>
              <div className="tm-formcontrol">
                <label className="tm-fc-label" htmlFor="">
                  Image URL
                </label>
                <input
                  className="tm-fc-input tm-fc-title"
                  name="image_url"
                  value={image_url}
                  onChange={handleChange}
                  placeholder="Image URL..."
                />
              </div>
              <div className="tm-formcontrol">
                <input
                  className="tm-fc-input tm-fc-submit"
                  type="submit"
                  value="SUBMIT"
                />
              </div>
            </form>
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
}
