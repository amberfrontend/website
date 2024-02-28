import React, { useEffect } from "react";
import { siteName } from "../../assets/strings"
import Block from "../../components/Block/Block";
import "./Home.css";

export default function Home() {
  const pageName = "Home";
  const today = new Date();
  const year = today.getFullYear();
  const yearsSoftware = year - 2016;
  const yearsWeb = year - 1999 - 4;

  useEffect(() => {
    document.title = `${siteName}${pageName}`;
  }, []);

  return (
    <>
      <h1 className="Home">Hi, I'm Amber</h1>
      <Block>
        <p>
          I'm a <strong className="Opt">Frontend Developer</strong> based in{" "}
          <strong className="Opt">Canada</strong>, with {`${yearsSoftware}`}{" "}
          years of experience in software development and {`${yearsWeb}`} years
          in the web industry.
        </p>
        <p>I specialize in digital accessibility and design systems.</p>
      </Block>
    </>
  );
}
