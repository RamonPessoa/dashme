import { useHeroContext } from "./HeroContext";
import S from "./Hero.module.sass";

export function HeroSlogan() {
  const { slogan } = useHeroContext();
  return <h2 className={`${S.hero__slogan} font-medium whitespace-nowrap overflow-hidden text-start w-fit`}>{slogan}</h2>;
}
