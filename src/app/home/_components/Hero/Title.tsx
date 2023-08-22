import { useHeroContext } from "./HeroContext";
import S from "./Hero.module.sass";

export function HeroTitle() {
  const { title } = useHeroContext();
  return <h1 className="text-9xl font-bold">{title}</h1>;
}
