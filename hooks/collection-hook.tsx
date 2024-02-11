import { useEffect, useState } from "react";
import collection from "@/json/collections.json";
interface CollectionHookProps {
  CollectionId: number;
}

const useCollectionHook = ({ CollectionId }: CollectionHookProps) => {
  const [title, setTitle] = useState("Taza Chocolate");

  useEffect(() => {
    const fetchData = async () => {
      try {
        let filterCollection = collection.filter(
          (item) => item.id === CollectionId
        );
        console.log("filterCollection:", filterCollection);

        if (filterCollection.length > 0) {
          setTitle(filterCollection[0].title);
        } else {
          setTitle("Taza Chocolate");
        }
      } catch (error) {
        // Handle error if needed
        console.error("Error fetching collection:", error);
      }
    };

    fetchData();
  }, [CollectionId]);

  return { title };
};

export default useCollectionHook;
