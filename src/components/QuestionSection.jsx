import styled from "styled-components";
import Arrow from "/images/icon-arrow-down.svg";
import data from "../data.json";

export default function QuestionSection({ questionIndex, active, setActive }) {
  const question = data[questionIndex].question;
  const answer = data[questionIndex].answer;

  return (
    <QuestionContainer
      onClick={() => {
        if (active === questionIndex) {
          setActive(null);
        } else {
          setActive(questionIndex);
        }
      }}
      active={active}
      questionindex={questionIndex}
    >
      <div>
        <QuestionP active={active} questionindex={questionIndex}>
          {question}
        </QuestionP>
        <img src={Arrow} alt="arrow icon" />
      </div>
      {active === questionIndex && <Answer>{answer}</Answer>}
    </QuestionContainer>
  );
}

const QuestionContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  border-bottom: 1px solid #e8e8ea;
  padding-bottom: 1.8rem;
  cursor: pointer;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > img {
      transition: 0.1s;
      transform: ${(props) =>
        props.active === props.questionindex
          ? "rotate(180deg)"
          : "rotate(0deg)"};
    }
  }
`;

const QuestionP = styled.h2`
  font-size: 1.3rem;
  font-weight: ${(props) =>
    props.questionindex === props.active ? "700" : "400"};
  color: #1e1f36;
  transition: 0.1s;
  &:hover {
    color: #f47b56;
  }
`;
const Answer = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  text-align: left;
  color: #787887;
`;
