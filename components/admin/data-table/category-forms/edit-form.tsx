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
import { CiEdit } from "react-icons/ci";

type AdmimEditFormProps = {
  CategoryId: string | undefined;
};

export default function Category_Form_Edit({ CategoryId }: AdmimEditFormProps) {
  const handleClick = (event: any) => {
    console.log("Enter!!!");
    console.log("CategoryId Edit Form:", CategoryId);
  };

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
          <AlertDialogDescription>{/* <input /> */}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
