import { styled } from "@mui/system";
import { Box, Typography } from "@mui/joy";

export const HeaderWrapper = styled(Typography)({
  display: "flex",
  justifyContent: "center",
  margin: "40px",
  fontSize: "xx-large",
});

export const AlertWrapper = styled(Box)({
  width: "200px",
  alignContent: "flex-end",
  marginBottom: "50px",
});

export const Circle = styled("div")({
  width: "100px",
  height: "100px",
  backgroundColor: "cadetblue",
  borderRadius: "50%",
  margin: "20px",
});
