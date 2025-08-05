import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Categories, CategoryKey, CategoryMap } from "../types";

export const useData = <T extends Categories>(data: T) => {
  const { id } = useParams();
  const [dataItem, setDataItem] = useState<CategoryMap[CategoryKey<T>] | null>(null);

  useEffect(() => {
    const currentDataItem = data.find((item) => item.id.toString() === id) as CategoryMap[CategoryKey<T>];
    if (currentDataItem) {
      setDataItem(currentDataItem);
    }    
  }, [data, id]);

  return dataItem;
}