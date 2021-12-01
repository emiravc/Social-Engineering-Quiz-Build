import Card from "@mui/material/Card";
import * as React from "react";
import CardMedia from "@mui/material/CardMedia";
import image from "./Image2.png";
import { borderRadius } from "@mui/system";
function Image() {
  return (
    <Card
      sx={{
        maxWidth: 400,
        borderRadius: 6,
        padding: "10px",
        boxShadow: "4px 4px lightblue",
      }}
    >
      <CardMedia
        component="img"
        height="500"
        style={{borderRadius :"10px"}}
        image={image}
        alt="Image"
      />
    </Card>
  );
}
export default Image;
