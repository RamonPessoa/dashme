import { useHeroContext } from "../../contexts/HeroContext";
import S from "./Slogan.module.sass";

export function HeroSlogan() {
  const { slogan } = useHeroContext();
  return <h2 className={`${S.hero__slogan} font-medium whitespace-nowrap overflow-hidden text-start w-fit`}>{slogan}</h2>;
}
