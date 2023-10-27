import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { answerQuestion } from "../Redux/QuizSlice";
import { useNavigate } from "react-router-dom";
import { SetLoader } from "../Redux/LoaderSlice";
import styled from './question.module.css';

const Question = () => {
  const question = useSelector((state) => state?.quiz?.questions);
  const [currentIndex, setcurrentIndex] = useState(0);
  const [selectedanswer, setselectedanswer] = useState([]);
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  let optionse = [
    ...question[currentIndex]?.incorrect_answers,
    question[currentIndex]?.correct_answer,
  ];
  
  const handlesubmit = () => {
    dispatch(SetLoader(true));
    dispatch(answerQuestion(selectedanswer));
    setTimeout(() => {
      dispatch(SetLoader(false));
      Navigate('/score');
    },3000)
  };
 
  const handlenextQuestion = () => {
    if (currentIndex === question.length - 1) {
    } else {
      setcurrentIndex(currentIndex + 1);
    }
  };

  const handleprevQuestion = () => {
    setcurrentIndex(currentIndex - 1);
  };

  return (
    <div>
      <h1 className={styled.question}>{question[currentIndex].question}</h1>
      {optionse?.map((item, index) => (
        <p
         className={styled.option}
          key={index}
          onClick={() =>
            setselectedanswer((prevanswer) => ({
              ...prevanswer,
              [currentIndex]: item,
            }))
          }
          style={
            selectedanswer[currentIndex] === item
              ? { border: "1px solid blue", backgroundColor: "blue", color: "white" }
              : {}
           }
        >
          {item}
        </p>
      ))}

      <div className={styled.btn}>
      <button
        onClick={handleprevQuestion}
        disabled={currentIndex === 0 ? true : false}
      >
        prev
      </button>
      <button
        onClick={handlenextQuestion}
        disabled={currentIndex === question.length - 1 ? true : false}
      >
        next
      </button>

      <button
        onClick={handlesubmit}
      >
         submit
      </button>
      </div>
    </div>
  );
};

export default Question;
