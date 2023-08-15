import S from "./Button.module.sass";

export function Button(
  props: React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
  }
) {
  return (
    <button className={S.ui__button} {...props}>
      {props.children}
    </button>
  );
}
