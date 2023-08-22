import { Ui } from "@/components/UI";
import { LoginContext } from "../../contexts/LoginContext";
import { useLoginForm } from "./hooks/useLoginForm";
import S from "./LoginForm.module.sass";

interface LoginFormProps extends React.HTMLAttributes<HTMLFormElement> {
  children?: React.ReactNode;
  onSubmit?: () => void;
}

export function LoginForm({
  children = undefined,
  onSubmit = undefined,
  ...rest
}: LoginFormProps) {
  const { commands } = useLoginForm();
  return (
    <LoginContext.Provider value={null}>
      <form className={S["form"]} onSubmit={(e) => commands.handleSubmit(e, onSubmit)} {...rest}>
        <fieldset className={S["fieldset"]}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </fieldset>
        <fieldset className={S["fieldset"]}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </fieldset>
        <Ui.Button type="submit">Login</Ui.Button>
      </form>
    </LoginContext.Provider>
  );
}
