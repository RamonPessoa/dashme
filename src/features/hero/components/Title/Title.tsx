import { useHeroContext } from "../../contexts/HeroContext";
import S from "./Title.module.sass";

export function HeroTitle() {
  const { title } = useHeroContext();
  return <h1 className={S.hero__title}>{title}</h1>;
}
