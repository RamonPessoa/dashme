'use client'
import { HeroSlogan } from "./Slogan";
import { HeroTitle } from "./Title";
import { HeroContext } from "./HeroContext";
import S from "./Hero.module.sass";

interface HeroProps {
  children: React.ReactNode;
  title: string;
  slogan: string;
}

function Hero({ children, title, slogan }: HeroProps) {
  return (
    <HeroContext.Provider value={{ title, slogan }}>
      <div className={S.hero}>{children}</div>
    </HeroContext.Provider>
  );
}

Hero.Title = HeroTitle;
Hero.Slogan = HeroSlogan;

export { Hero };
