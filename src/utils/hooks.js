import { useState } from "react";

export const useOpen = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleOpenStatus = () => {
    if (isOpen) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  return { isOpen, toggleOpenStatus };
};
