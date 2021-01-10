import * as React from "react";
import { PartialData } from "../types/types";

export const apiStates = {
  LOADING: "LOADING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
};

export const useApi = (url: string): PartialData => {
  const [data, setData] = React.useState<PartialData>({
    state: apiStates.LOADING,
    error: "",
    data: [],
  });

  const setPartData = (partialData: PartialData) =>
    setData({ ...data, ...partialData });

  React.useEffect(() => {
    setPartData({
      state: apiStates.LOADING,
    });
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        data.map((element: PartialData) => ({ ...element, quantity: 1 }));
        setPartData({
          state: apiStates.SUCCESS,
          data,
        });
      })
      .catch(() => {
        setPartData({
          state: apiStates.ERROR,
          error: "fetch failed",
        });
      });
  }, []);

  return data;
};
