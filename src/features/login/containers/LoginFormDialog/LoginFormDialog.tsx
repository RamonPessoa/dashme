import { Dialog } from "@radix-ui/themes";
import { LoginForm } from "../LoginForm/LoginForm";

interface LoginFormDialogProps {
  open?: boolean;
  handleClose?: () => void;
}

export function LoginFormDialog({
  open = false,
  handleClose,
}: LoginFormDialogProps) {
  return (
    <Dialog.Root open={open}>
      <Dialog.Content>
        <Dialog.Title>Entre</Dialog.Title>
        <LoginForm onSubmit={handleClose} />
      </Dialog.Content>
    </Dialog.Root>
  );
}
