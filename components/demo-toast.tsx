"use client";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";

export default function DemoToast() {
  const { toast } = useToast();
  const handelClick = () => {
    toast({
      className:
        "fixed top-10 left-1/2 transform -translate-x-1/2 flex md:max-w-[420px]",
      variant: "default",
      title: "Uh oh! Something went wrong.",
      description: "There was a problem with your request.",
    });
  };
  return (
    // <Toast.Provider swipeDirection="right">
    <Button
      onClick={() => {
        handelClick();
      }}
    >
      Show Toast
    </Button>
    // </Toast.Provider>
  );
}
