import { GlobalStyles } from "./Globals";
import styled from "styled-components";
import bgMobileImg from "/images/bg-pattern-mobile.svg";
import bgDesktopImg from "/images/bg-pattern-desktop.svg";
import bgMobileIllustration from "/images/illustration-woman-online-mobile.svg";
import bgWomanDesktop from "/images/illustration-woman-online-desktop.svg";
import IllustrationBox from "/images/illustration-box-desktop.svg";
import QuestionSection from "./components/QuestionSection";
import { useState } from "react";

function App() {
  const [active, setActive] = useState(null);
  return (
    <>
      <GlobalStyles />
      <Main>
        <ImgsContainer>
          <img
            className="bgMobileIllustration"
            src={bgMobileIllustration}
            alt="img"
          />
          <img className="bgMobileImg" src={bgMobileImg} alt="img" />
          <img
            className="IllustrationBox"
            src={IllustrationBox}
            alt="illustration-box"
          />
        </ImgsContainer>

        <Title>FAQ</Title>
        <QuestionSection
          questionIndex={0}
          active={active}
          setActive={setActive}
        />
        <QuestionSection
          questionIndex={1}
          active={active}
          setActive={setActive}
        />
        <QuestionSection
          questionIndex={2}
          active={active}
          setActive={setActive}
        />
        <QuestionSection
          questionIndex={3}
          active={active}
          setActive={setActive}
        />
        <QuestionSection
          questionIndex={4}
          active={active}
          setActive={setActive}
        />
      </Main>
    </>
  );
}

export default App;

const Main = styled.main`
  width: 32.7rem;
  padding: 13.2rem 2.4rem 4.8rem;
  background-color: #fff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 3.8rem;
  align-items: center;
  @media only screen and (min-width: 90rem) {
    width: 92rem;
    padding: 6.5rem 9.5rem 8.3rem 47.5rem;
    align-items: flex-start;
    background-image: url(${bgWomanDesktop}), url(${bgDesktopImg});
    background-repeat: no-repeat;
    background-position: top 10rem left -8rem, top -28rem left -57.5rem;
  }
`;

const Title = styled.h1`
  font-size: 3.2rem;
  font-weight: 700;
  color: #1e1f36;
`;
const ImgsContainer = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  position: relative;
  .IllustrationBox {
    display: none;
    @media only screen and (min-width: 90rem) {
      display: block;

      position: absolute;
      top: 17rem;
      left: -56.8rem;
    }
  }
  @media only screen and (min-width: 90rem) {
    width: 38.8rem;
  }
  .bgMobileIllustration {
    width: 25.7rem;
    position: absolute;
    top: -25rem;
    @media only screen and (min-width: 90rem) {
      display: none;
    }
  }
  .bgMobileImg {
    width: 25.7rem;
    position: absolute;
    top: -14rem;
    @media only screen and (min-width: 90rem) {
      display: none;
    }
  }
`;
