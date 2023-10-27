import { useEffect } from "react";

export const useGlobalEffects = (sumTotal, sumQuantity) => {
  useEffect(() => {
    sumTotal();
    sumQuantity();
  }, [sumTotal, sumQuantity]);
};
