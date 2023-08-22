import { useMemo, useState } from "react";

export const useHome = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleLoginModalState = () => {
    setIsLoginModalOpen((prev) => !prev);
  };

  const value = useMemo(
    () => ({
      states: {
        isLoginModalOpen,
      },
      commands: {
        handleLoginModalState,
      },
    }),
    [isLoginModalOpen]
  );

  return value;
};
