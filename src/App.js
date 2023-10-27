import "./App.css";
import { Route, Routes } from "react-router-dom";
import Settings from "./Pages/Settings";
import Result from "./Pages/Result";
import Question from "./Pages/Question";
import { Box, Container } from "@mui/material";
import ProtectedPage from "./Pages/ProtectedPage";
import Loader from "./Pages/Loader";
import { useSelector } from "react-redux";

function App(){
  const loader = useSelector((state) => state?.loaders?.loading);
  return (
    <>
    <Container maxWidth="sm">
     {loader &&  <Loader />}
      <Box textAlign={"center"} mt={5}>
        <Routes>
          <Route path="/" element={<Settings />} />
          <Route path="/question" element={
            <ProtectedPage>
              <Question/>
            </ProtectedPage>
          }/>
          <Route path="/score" element={<Result />} />
        </Routes>
      </Box>
    </Container>
    </>
  );
}

export default App;
