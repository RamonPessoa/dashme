import { useCallback, useMemo } from "react";

export const useLoginForm = () => {
  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>, callback?: () => void) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const email = formData.get("email");
      const password = formData.get("password");

      console.log({ email, password });

      if (callback) callback();
    },
    []
  );

  const value = useMemo(
    () => ({
      commands: {
        handleSubmit,
      },
    }),
    [handleSubmit]
  );

  return value;
};
