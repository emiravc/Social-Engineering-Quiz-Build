import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { HintStyles } from "./Styling";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Hint() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        sx={HintStyles}
        onClick={handleOpen}
        variant="contained"
        size="medium"
      >
        Need some help? Click here for a Hint!
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
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
            <Typography id="transition-modal-title" variant="h6" component="h2">
              <h2>
                <u>Hint</u>
              </h2>
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              This one of is a little bit tricky. Seems like the company "New Talent" is desparate for a new employee.
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
