import { createSlice } from "@reduxjs/toolkit";

export const QuizSlice = createSlice({
  name: "quiz",
  initialState: {
    questions: JSON.parse(sessionStorage.getItem('questions')) || [],
    auth:  JSON.parse(sessionStorage.getItem('auth')) || false,
    currentQuestionIndex: 0,
    answers:[],
    score:JSON.parse(sessionStorage.getItem('score')) || 0,
  },
  reducers: {
    selectCurrentQuestion: (state) =>
      state.questions[state.quiz.currentQuestionIndex],
    selectAnswers: (state) => state.quiz.answers,
    
    AddQuestion: (state, action) => {
      state.questions = action.payload;
      sessionStorage.setItem('questions', JSON.stringify(state.questions) )
    },
    answerQuestion: (state, action) => {
      state.answers=action.payload;
    },
    nextQuestion: (state) => {
      state.currentQuestionIndex += 1;
    },
    prevQuestion: (state) => {
      state.currentQuestionIndex -= 1;
    },
    resetQuiz: (state) => {
      state.currentQuestionIndex = 0;
      state.answers = [];
    },
    SetScore:(state,action)=>{
      state.score=state.score+action.payload
      sessionStorage.setItem('score',state.score)
    },
    SetAuth:(state,action)=>{
      state.auth=action.payload
      sessionStorage.setItem('auth',state.auth)
    }
  },
});

export const {
  selectCurrentQuestion,
  selectAnswers,
  AddQuestion,
  answerQuestion,
  nextQuestion,
  prevQuestion,
  resetQuiz,
  SetScore,
  SetAuth,
} = QuizSlice.actions;
