import { render, screen } from "@testing-library/react";
import { Hero } from "./Hero";

const mockedData = {
  title: "title",
  slogan: "slogan",
};

describe("Hero", () => {
  it("showld render Hero with title and slogan", () => {
    render(
      <Hero title={mockedData.title} slogan={mockedData.slogan}>
        <Hero.Title />
        <Hero.Slogan />
      </Hero>
    );
    const title = screen.getByText(mockedData.title);
    const slogan = screen.getByText(mockedData.slogan);

    expect(title).toBeInTheDocument();
    expect(slogan).toBeInTheDocument();
  });

  it("shouldn't render Title if not parsed as children", () => {
    render(<Hero title={mockedData.title} slogan={mockedData.slogan} >
      <Hero.Slogan />
    </Hero>);
    const title = screen.queryByText(mockedData.title);

    expect(title).not.toBeInTheDocument();
  });

  it("Shouldn't render Slogan if not parsed as children", () => {
    render(<Hero title={mockedData.title} slogan={mockedData.slogan} >
      <Hero.Title />
    </Hero>);
    const slogan = screen.queryByText(mockedData.slogan);

    expect(slogan).not.toBeInTheDocument();
  });
});
