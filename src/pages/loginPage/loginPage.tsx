import React from "react";
import { useState } from "react";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import { Box } from "@mui/joy";
import { WrapperBox } from "./loginPage.style";
import Alert from "@mui/joy/Alert";
import axios from "axios";

const LoginPage = ({ setUsername }: any) => {
  const apiUrl = "http://localhost:8000/users";
  const [error, setError] = useState<string | null>(null);
  const [typedUser, setTypedUser] = useState("");

  const handleClick = async () => {
    try {
      const body = { username: typedUser };
      await axios.post(apiUrl, body);
      setError(null);
      // Update the state:
      setUsername(typedUser);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <>
      <WrapperBox>
        {error && (
          <Box marginBottom="20px">
            <Alert color="danger">{error}</Alert>
          </Box>
        )}
        <Box marginBottom={"30px"} width={"300px"}>
          <Input
            placeholder="Enter username"
            onChange={(event) => setTypedUser(event.target.value)}
          />
        </Box>
        <Box>
          <Button
            style={{ backgroundColor: "cadetblue" }}
            disabled={!typedUser}
            onClick={handleClick}
          >
            START
          </Button>
        </Box>
      </WrapperBox>
    </>
  );
};
export default LoginPage;
