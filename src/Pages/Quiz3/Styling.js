import { purple } from "@mui/material/colors";
import { blue, green } from "@material-ui/core/colors";
import { red } from "@material-ui/core/colors";

export const HintStyles = {
  "&.MuiButton-root": {
    border: "1px black solid",
  },
  "&.MuiButton-contained": {
    color: "white",
    backgroundColor: purple[500],
    borderRadius: 8,
    maxWidth: "600px",
    maxHeight: "35px",
    minWidth: "600px",
    minHeight: "35px",
    "&:hover": {
      backgroundColor: purple[700],
      padding: "10px",
      boxShadow: "4px 4px lightblue",
    },
  },
};
export const NextQuestionStyles = {
  "&.MuiButton-root": {
    border: "1px black solid",
  },
  "&.MuiButton-contained": {
    color: "white",
    backgroundColor: purple[500],
    borderRadius: 8,
    maxWidth: "600px",
    maxHeight: "45px",
    minWidth: "600px",
    minHeight: "45px",

    "&:hover": {
      backgroundColor: purple[700],
      padding: "10px",
      boxShadow: "4px 4px lightblue",
    },
  },
};
export const AnswerStyles = {
  "&.MuiButton-root": {
    border: "1px black solid",
  },
  "&.MuiButton-contained": {
    color: "white",
    backgroundColor: blue[700],
    borderRadius: 12,
    maxWidth: "250px",
    maxHeight: "50px",
    minWidth: "250px",
    minHeight: "50px",
    "&:hover": {
      backgroundColor: blue[900],
      padding: "10px",
      boxShadow: "4px 4px lightblue",
    },
  },
};

export const CorrectStyles = {
  "&.MuiButton-root": {
    border: "1px black solid",
  },
  "&.MuiButton-contained": {
    color: "white",
    backgroundColor: green[700],
    borderRadius: 12,
    maxWidth: "250px",
    maxHeight: "50px",
    minWidth: "250px",
    minHeight: "50px",
    "&:hover": {
      backgroundColor: green[700],
    },
  },
};
export const WrongStyles = {
  "&.MuiButton-root": {
    border: "1px black solid",
  },
  "&.MuiButton-contained": {
    color: "white",
    backgroundColor: red[700],
    borderRadius: 12,
    maxWidth: "250px",
    maxHeight: "50px",
    minWidth: "250px",
    minHeight: "50px",
    "&:hover": {
      backgroundColor: red[700],
    },
  },
};
export const DisableStyles = {
  "&.MuiButton-root": {
    border: "1px black solid",
  },
  "&.MuiButton-contained": {
    color: "white",
    backgroundColor: blue[600],
    borderRadius: 12,
    maxWidth: "250px",
    maxHeight: "50px",
    minWidth: "250px",
    minHeight: "50px",
    "&:hover": {
      backgroundColor: blue[600],
    },
  },
};

