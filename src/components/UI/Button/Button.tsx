export function Button(
  props: React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
  }
) {
  return (
    <button className="bg-green-600 border-none p-2 mt-5" {...props}>
      {props.children}
    </button>
  );
}
