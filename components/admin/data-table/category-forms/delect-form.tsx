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
import { Button } from "@/components/ui/button";
import { MdDelete } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

type AdmimEditFormProps = {
  CategoryId: string | undefined;
};

export default function Category_Form_Delete({
  CategoryId,
}: AdmimEditFormProps) {
  const handleClick = (event: any) => {
    console.log("Enter!!!");
    console.log("CategoryId Edit Form:", CategoryId);
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
            <form className="tm-form">
              <div className="tm-formcontrol">
                <label className="tm-fc-label" htmlFor="tm-fc-title">
                  Title
                </label>
                <input
                  className="tm-fc-input tm-fc-title"
                  id="tm-fc-title"
                  placeholder="Title..."
                />
              </div>
              <div className="tm-formcontrol">
                <label className="tm-fc-label" htmlFor="">
                  Title
                </label>
                <input
                  className="tm-fc-input tm-fc-title"
                  placeholder="Title..."
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
