import * as React from "react";
import Stack from "@mui/material/Stack";
import Hint9 from "./Hint9";
import Image9 from "./Image9";
import Answer9 from "./Answer9";
import Question9 from "./Question9";

function Quiz9() {
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
            <Question9 />
            <Answer9 />
          </Stack>
          <Hint9 />
        </Stack>
        <Image9 />
      </Stack>
    </div>
  );
}

export default Quiz9;
