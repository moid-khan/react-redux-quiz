import './App.css'
import { useSelector } from "react-redux";
import { useState } from 'react';
import Header from './components/Header';
import { Button, Grid, IconButton, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function App() {
  const state = useSelector(state => state)
  console.log(state);

  const [marks, setMarks] = useState(0)
  const [questionIndex, setQuestionIndex] = useState(0)
  const [showResult, setShowResult] = useState(false)

  const nextQuestion = () => {
    if (state.length - 1 == questionIndex) {
      setShowResult(true)
    } else {
      setQuestionIndex(questionIndex + 1)
    }
  }

  const previousQuestion = () => {
    setQuestionIndex(questionIndex - 1)
  }

  const checkAnswer = (cor, user) => {
    if (cor == user) {
      setMarks(marks + 1)
    }

    nextQuestion()
  }

  return (
    <div>
      <Header title="Quiz" quizNo={questionIndex + 1} totalQuestions={state.length} />
      {showResult ? (
        <Grid sx={{ marginTop: "60px" }}>
          <Paper elevation={5} sx={{ padding: "20px" }}>
            <Typography variant="h4" sx={{ textAlign: 'center', padding: '10px' }}>
              Percentage: {(marks / state.length) * 100}%
            </Typography>
            <Typography variant="h4" sx={{ textAlign: 'center', padding: '10px' }}>
              Total Marks: {state.length * 10}
            </Typography>
            <Typography variant="h4" sx={{ textAlign: 'center', padding: '10px' }}>
              Obtained Marks: {marks * 10}
            </Typography>
            <Typography variant="h4" sx={{ textAlign: 'center', padding: '10px' }}>
              No of Questions: {state.length}
            </Typography>
            <Typography variant="h4" sx={{ textAlign: 'center', padding: '10px' }}>
              Correct Answers: {marks}
            </Typography>
            <Typography variant="h4" sx={{ textAlign: 'center', padding: '10px' }}>
              Wrong Answers: {state.length - marks}
            </Typography>
            <Grid sx={{ textAlign: 'center', marginTop: "10px" }}>
              <Button variant="contained" onClick={() => {setShowResult(false);setQuestionIndex(0)}}>Restart Quiz</Button>
            </Grid>
          </Paper>
        </Grid>
      ) : (
        <Grid container sx={{ marginTop: '100px' }}>
          <Grid md={12} sm={12} xs={12} sx={{ textAlign: 'center' }}>
            <Typography variant="h5">{state[questionIndex].question}</Typography>
            <div>
              {state[questionIndex].options.map((e, i) => (
                <Box>
                  <Button variant="text" sx={{ width: '50%', margin: '5px', marginTop: '20px' }} onClick={() => {
                    checkAnswer(state[questionIndex].correctAnswers, e)
                  }}>{e}</Button>
                </Box>
              ))}
            </div>
          </Grid>
          <Grid md={12} sm={12} xs={12} sx={{ textAlign: 'right', padding: '20px' }}>
            {questionIndex >= 1 ? (
              <Button variant="outlined" sx={{ marginRight: '5px' }} startIcon={<ArrowBackIosIcon />} onClick={() => { previousQuestion() }}>
                Previous
              </Button>
            ) : (<></>)}
            <Button variant="outlined" endIcon={<NavigateNextIcon />} onClick={() => { nextQuestion() }}>
              {questionIndex == state.length-1?(<>End Quiz</>):(<>Next</>)}
            </Button>
          </Grid>
        </Grid>
      )}
    </div>
  );
}

export default App;
