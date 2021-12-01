import * as React from "react";
import Button from "@mui/material/Button";
//import NextQuestion from "../../Pages/Quiz3/NextQuestion";  // not used 
//import Hint from "../../Pages/Quiz3/Hint";                  // not used
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Container } from "@material-ui/core";

import {
  useScoreContext,
  useUpdateScoreContext,
} from "../../components/Context/ResultContext";

import {
  useResponseContext,
  useUpdateResponseContext,
} from "../../components/Context/ResultContext";

// Temporary ------------------------------------------------------------
import { useNavigate } from "react-router-dom";
// ----------------------------------------------------------------------

import {
  AnswerStyles,
  CorrectStyles,
  DisableStyles,
  WrongStyles,
  HintStyles,
  NextQuestionStyles,
} from "./Styling8";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  width: 400,
  height: 250,
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};




export default function Quiz8() {
  // Temporary ----------------------------------------------------------
  const navigate = useNavigate();
  // --------------------------------------------------------------------

  const [correctFlag, setcorrectFlag] = React.useState(true);
  const [disableCorrectFlag, setdisableCorrectFlag] = React.useState(true);
  const [wrongFlag, setWrongFlag] = React.useState(true);
  const [disableWrongFlag, setdisableWrongFlag] = React.useState(true);
  const [next, setNext] = React.useState(true);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // used for updating results ------------------------------------------
  const score = useScoreContext();
  const updateScore = useUpdateScoreContext();

  const responses = useResponseContext();
  const updateResponses = useUpdateResponseContext();
  // --------------------------------------------------------------------

  const handleClickWrong = () => {
    setWrongFlag(!wrongFlag);
    setNext(!next);
    setdisableCorrectFlag(!disableCorrectFlag);
  };

  const handleClickCorrect = () => {
    setcorrectFlag(!correctFlag);
    setNext(!next);
    setdisableWrongFlag(!disableWrongFlag);
    updateScore(Number(score) + 1);
  };

  const handleNext = () => {
    updateResponses(Number(responses) + 1);
  };


  return (
    <Container>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={3}
      >
        <Stack
          backgroundColor="white"
          boxShadow="0.5vh 1vh lightblue"
          borderRadius="1vh"
          padding="3.8vh"
          //padding="24px"
          fontSize="0.875rem"
          boxSizing="border-box"
          letterSpacing="0.01071em"
          borderWidth="1"
          lineHeight="1.43"
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={3}
        >
          <h1>Here are two emails from the CIBC. Which one is actually from CIBC?</h1>
        </Stack>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={12}
          >
            <Card
              sx={{
                marginTop: 1,
                width: "45vw",
                borderRadius: "3vh",
                padding: "1vh",
                boxShadow: "1vh 1vh lightblue",
              }}
            >
              <CardMedia
                component="img"
                padding="2.5rem 5.0rem"
                height="20%"
                width="100%"
                overflow="hidden"
                backgroundSize="cover"
                src="/Quiz8_scam.png"
                alt=""
              />
            </Card>
            <Card
              sx={{
                marginTop: 1,
                width: "45vw",
                borderRadius: "3vh",
                padding: "1vh",
                boxShadow: "1vh 1vh lightblue",
              }}
            >
              <CardMedia
                component="img"
                padding="2.5rem 5.0rem"
                height="20%"
                width="100%"
                overflow="hidden"
                src="/Quiz8_real.png" 
                alt=""
              />
            </Card>
          </Stack>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={60}
          >
            {disableWrongFlag ? (
              !wrongFlag ? (
                <Button sx={WrongStyles} variant="contained" size="medium">
                  <Typography style={{ fontWeight: 600 }}>Wrong!</Typography>
                </Button>
              ) : (
                <Button
                  sx={AnswerStyles}
                  onClick={handleClickWrong}
                  variant="contained"
                  size="medium"
                >
                  <Typography style={{ fontWeight: 600 }}>A</Typography>
                </Button>
              )
            ) : (
              <Button sx={DisableStyles} variant="contained" size="medium">
                <Typography style={{ fontWeight: 600 }}>A</Typography>
              </Button>
            )}
            {disableCorrectFlag ? (
              !correctFlag ? (
                <Button sx={CorrectStyles} variant="contained" size="medium">
                  <Typography style={{ fontWeight: 600 }}>Correct!</Typography>
                </Button>
              ) : (
                <Button
                  sx={AnswerStyles}
                  onClick={handleClickCorrect}
                  variant="contained"
                  size="medium"
                >
                  <Typography style={{ fontWeight: 600 }}>B</Typography>
                </Button>
              )
            ) : (
              <Button sx={DisableStyles} variant="contained" size="medium">
                <Typography style={{ fontWeight: 600 }}>A</Typography>
              </Button>
            )}
          </Stack>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={10}
          >
            <Button
              sx={HintStyles}
              onClick={handleOpen}
              variant="contained"
              size="medium"
            >
              Hint
            </Button>

            <Modal
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open}>
                <Box sx={style}>
                  <h1><u>Hint</u></h1>

                  <p>              
                    Focus on the email of the sender in both images.
                    Notice anything suspicious about one of the emails?
                    
                  </p>
                </Box>
              </Fade>
            </Modal>
            {!next ? (
              <Button sx={NextQuestionStyles} variant="contained" onClick={handleNext} size="medium">
                Next Question
              </Button>
            ) : (
              <Button
                style={{
                  maxWidth: "250px",
                  maxHeight: "40px",
                  minWidth: "250px",
                  minHeight: "40px",
                }}
                disabled
                variant="contained"
                size="medium"
              >
                Next Question
              </Button>
            )}
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}
