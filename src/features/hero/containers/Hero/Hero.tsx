'use client'
import { HeroLoginButton } from "../../components/LoginButton/LoginButton";
import { HeroSlogan } from "../../components/Slogan/Slogan";
import { HeroTitle } from "../../components/Title/Title";
import { HeroContext } from "../../contexts/HeroContext";
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
Hero.LoginButton = HeroLoginButton

export { Hero };
