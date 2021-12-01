import * as React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { NextQuestionStyles } from "./Styling";
import {useResponseContext, useUpdateResponseContext} from '../../components/Context/ResultContext';

function NextQuestion() {

  // for updating number of questions attempted -------------------------
  const updateResponse = useUpdateResponseContext();
  const responses = useResponseContext();
  // --------------------------------------------------------------------
  const navigate = useNavigate();


  const sendSubmit = () => {
    // the next line will increase the number of questions attempted
    updateResponse(Number(responses) + 1);
  };
  return (
    <Button
      sx={NextQuestionStyles}
      onClick={sendSubmit}
      variant="contained"
      size="medium"
    >
      Next Question
    </Button>
  );
}

export default NextQuestion;
