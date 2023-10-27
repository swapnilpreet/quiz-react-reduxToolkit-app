import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SetScore } from "../Redux/QuizSlice";

const Result = () => {
  const answer = useSelector((state) => state?.quiz?.answers);
  const question = useSelector((state) => state?.quiz?.questions);
  const score = useSelector((state) => state?.quiz?.score);
  const attemptquestions = Object.keys(answer);
  const dispatch = useDispatch();

  useEffect(() => {
    for (let i = 0; i < attemptquestions.length; i++) {
      if (
        answer[attemptquestions[i]] ===
        question[attemptquestions[i]]?.correct_answer
      ) {
        dispatch(SetScore(1));
      }
    }
  }, [answer]);

  useEffect(() => {
    window.history.pushState(null, document.title, window.location.href);
    window.addEventListener("popstate", function (event) {
      window.history.pushState(null, document.title, window.location.href);
    });
  }, []);

  const handleNavigate = () => {
    sessionStorage.removeItem("score");
    sessionStorage.removeItem("questions");
    sessionStorage.removeItem("auth");
    window.location.href = "/";
  };

  return (
    <div>
      <h1>{score}/{question.length}</h1>
      
      <div>
        <button style={{marginTop:"50px", padding:'10px', borderRadius:'20px', border:"none", cursor:"pointer" }} onClick={() => handleNavigate()}>Go to Home</button>
      </div>
    </div>
  );
};

export default Result;
