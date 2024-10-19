import { useState } from "react";
import LoginPage from "../loginPage/loginPage";
import { GamePage } from "../gamePage/gamePage";

export const RoutingPage = () => {
  const [username, setUsername] = useState("");

  return (
    <>
      {!username ? (
        <LoginPage
          setUsername={(username: string) => setUsername(username)}
        ></LoginPage>
      ) : (
        <GamePage username={username}></GamePage>
      )}
    </>
  );
};
