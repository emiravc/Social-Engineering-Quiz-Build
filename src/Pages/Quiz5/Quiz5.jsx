import * as React from "react";
import Button from "@mui/material/Button";
import NextQuestion from "../../Pages/Quiz3/NextQuestion";
import Hint from "../../Pages/Quiz3/Hint";
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
} from "./Styling5";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 200,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Quiz5() {
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
          <h1>Which one is the fraudulent UofC login page?</h1>
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
                maxWidth: 500,
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
                src="/Quiz5_scam.png"
                alt=""
              />
            </Card>
            <Card
              sx={{
                marginTop: 1,
                maxWidth: 500,
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
                src="/Quiz5_real.png"
                alt=""
              />
            </Card>
          </Stack>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={40}
          >
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
                  <Typography style={{ fontWeight: 600 }}>A</Typography>
                </Button>
              )
            ) : (
              <Button sx={DisableStyles} variant="contained" size="medium">
                <Typography style={{ fontWeight: 600 }}>A</Typography>
              </Button>
            )}
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
                  <Typography style={{ fontWeight: 600 }}>B</Typography>
                </Button>
              )
            ) : (
              <Button sx={DisableStyles} variant="contained" size="medium">
                <Typography style={{ fontWeight: 600 }}>B</Typography>
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
                  <h2><u>Hint</u></h2>
                  <p>
                    Both images are very similar, so don't fall for looks!
                  </p>
                  <p>
                    Instead, compare both of the URLs.
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
