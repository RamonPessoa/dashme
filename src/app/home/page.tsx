"use client";
import { Hero } from "@/app/home/_components/Hero/Hero";
import { useHome } from "./_hooks/useHome";
import { LoginFormDialog } from "@/features/login/containers/LoginFormDialog/LoginFormDialog";
import { Ui } from "@/components/UI";

export default function Home() {
  const { states, commands } = useHome();
  return (
    <main>
      <Hero title="Dashme" slogan="Sua vida em suas mãos">
        <Hero.Title />
        <Hero.Slogan />
        <Ui.Button onClick={commands.handleLoginModalState}>Entrar</Ui.Button>
      </Hero>
      <LoginFormDialog
        open={states.isLoginModalOpen}
        handleClose={commands.handleLoginModalState}
      />
    </main>
  );
}
