import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Header(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="p" sx={{ flexGrow: 1, textAlign: 'left', fontWeight: 'bold' }}>
            Total Question: {props.totalQuestions}
          </Typography>
          <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'center' }}>
            {props.title}
          </Typography>
          <Typography variant="p" sx={{ flexGrow: 1, textAlign: 'right', fontWeight: 'bold' }}>
            Question No. {props.quizNo}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}