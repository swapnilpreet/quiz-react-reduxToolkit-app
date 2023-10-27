import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { SetLoader } from "../Redux/LoaderSlice";
import { useNavigate } from "react-router-dom";
import { AddQuestion, SetAuth } from "../Redux/QuizSlice";

const categoryMenuItem = [
  { label: "General Knowledge", value: "9" },
  { label: "Entertainment: Books", value: "10" },
  { label: "Entertainment: Film", value: "11" },
  { label: "Entertainment: Music", value: "12" },
  { label: "Entertainment: Musicals & Theatres", value: "13" },
  { label: "Entertainment: Television", value: "14" },
  { label: "Entertainment: Video Games", value: "15" },
  { label: "Entertainment: Board Games", value: "16" },
  { label: "Science & Nature", value: "17" },
  { label: "Science: Computers", value: "18" },
  { label: "Science: Mathematics", value: "19" },
  { label: "Mythology", value: "20" },
  { label: "Sports", value: "21" },
  { label: "Geography", value: "22" },
  { label: "History", value: "23" },
  { label: "Politics", value: "24" },
  { label: "Art", value: "25" },
  { label: "Celebrities", value: "26" },
  { label: "Animals", value: "27" },
  { label: "Vehicles", value: "28" },
  { label: "Entertainment: Comics", value: "29" },
  { label: "Science: Gadgets", value: "30" },
  { label: "Entertainment: Japanese Anime & Manga", value: "31" },
  { label: "Entertainment: Cartoon & Animations", value: "32" },
];

const deficultiMenuItem = [
  { label: "Easy", value: "easy" },
  { label: "Medium", value: "medium" },
  { label: "Hard", value: "hard" },
];

const QuestionsMenuItem = [
  { label: "10", value: "10" },
  { label: "20", value: "20" },
  { label: "30", value: "30" },
  { label: "40", value: "40" },
  { label: "50", value: "50" },
];

const typeMenuItem = [
  { label: "Multiple Choice", value: "multiple" },
  { label: "True/False", value: "boolean" },
];

 
const Settings = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [customerSignUp, setCustomerSignUp] = useState({
    category: "",
    difficulty: "",
    type: "",
    questions: "",
  });
  const handleChange = (event) => {
    setCustomerSignUp({
      ...customerSignUp,
      [event.target.name]: event.target.value,
    });
  };
  
 

  const handleSubmit=async()=>{
    try {
      dispatch(SetLoader(true))
      const response = await fetch(`https://opentdb.com/api.php?amount=${customerSignUp.questions}&category=${customerSignUp.category}&difficulty=${customerSignUp.difficulty}&type=${customerSignUp.type}`);
      const movies = await response.json();
      dispatch(AddQuestion(movies.results));
      dispatch(SetAuth(true));
      setTimeout(() => {
        dispatch(SetLoader(false));
        navigate('/question');
      },3000)
    } catch(error){
      dispatch(SetLoader(false));
    }
  }
   
  return (
    <div >
      <h1>Quiz App</h1>

      <Box m={2}>
        <FormControl fullWidth size="small">
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="category"
            value={customerSignUp.category}
            label="Category"
            onChange={handleChange}
            required
          >
            {categoryMenuItem?.map((item, index)=>{
              return (
                <MenuItem value={item.value} key={index}>
                  {item.label}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>

      <Box m={2}>
        <FormControl fullWidth size="small">
          <InputLabel id="demo-simple-select-label">
            Select Difficulty
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="difficulty"
            value={customerSignUp.difficulty}
            label="Select Difficulty"
            onChange={handleChange}
            required
          >
            {deficultiMenuItem?.map((item, index) => {
              return (
                <MenuItem value={item.value} key={index}>
                  {item.label}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>

      <Box m={2}>
        <FormControl fullWidth size="small">
          <InputLabel id="demo-simple-select-label">Select Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="type"
            value={customerSignUp.type}
            label="Select Type"
            onChange={handleChange}
            required
          >
          {typeMenuItem?.map((item, index) => {
              return (
                <MenuItem value={item.value} key={index}>
                  {item.label}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>

      <Box m={2}>
        <FormControl fullWidth size="small">
          <InputLabel id="demo-simple-select-label">
            Select Questions
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="questions"
            value={customerSignUp.questions}
            label="Select Questions"
            onChange={handleChange}
            required
          >
           {QuestionsMenuItem?.map((item, index) => {
              return (
                <MenuItem value={item.value} key={index}>
                  {item.label}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>

      <Button
        disabled={
          !customerSignUp.category ||
          !customerSignUp.type ||
          !customerSignUp.difficulty ||
          !customerSignUp.questions
          }
          onClick={handleSubmit}
          style={{backgroundColor:"white", width:"95%",cursor: "pointer"}}
          >
        Submit
      </Button>
    </div>
  );
};

export default Settings;
