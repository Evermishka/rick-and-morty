import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { DataItem } from "../types";

export const useData = <T extends DataItem>(data: T[]) => {
  const { id } = useParams();
  const [dataItem, setDataItem] = useState<T | null>(null);

  useEffect(() => {
    const currentDataItem = data.find((item) => item.id.toString() === id);
    if (currentDataItem) {
      setDataItem(currentDataItem);
    }    
  }, [data, id]);

  return dataItem;
}