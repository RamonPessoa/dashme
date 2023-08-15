"use client";
import { Hero } from "@/features/hero/containers/Hero/Hero";

export default function Home() {
  return (
    <Hero title="Dashme" slogan="Sua vida em suas mãos">
      <Hero.Title />
      <Hero.Slogan />
      <Hero.LoginButton />
    </Hero>
  );
}
