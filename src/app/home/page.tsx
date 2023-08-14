import S from "./style.module.sass";

export default function Home() {
  return (
    <main className={S["hero"]}>
      <div className={S["text"]}>
        <h1 className={S["main-title"]}>Dashme</h1>
        <h3 className={S["slogan"]}>Sua vida em suas mãos.</h3>
      </div>
    </main>
  );
}
