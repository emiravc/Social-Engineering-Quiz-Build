import * as React from "react";
import Stack from "@mui/material/Stack";
import Hint6 from "./Hint6";
import Image6 from "./Image6";
import Answer6 from "./Answer6";
import Question6 from "./Question6";

function Quiz6() {
  return (
    <div>
      <Stack
        direction="row"
        spacing={15}
        justifyContent="center"
        alignItems="center"
      >
        <Stack
          direction="column"
          spacing={10}
          justifyContent="center"
          alignItems="center"
        >
          <Stack
            direction="column"
            spacing={10}
            justifyContent="center"
            alignItems="center"
          >
            <Question6 />
            <Answer6 />
          </Stack>
          <Hint6 />
        </Stack>
        <Image6 />
      </Stack>
    </div>
  );
}

export default Quiz6;
