import { useContext, useState } from "react";
import { GameContext } from "../../context/gameContext";
import LoginPage from "../loginPage/loginPage";
import { GamePage } from "../gamePage/gamePage";

export const RoutingPage = () => {
  // TODO: change useContext to useState:
  // const [username, setUsername] = useState('');
  const { username, setUsername } = useContext(GameContext);

  return (
    <>
      {!username ? (
        <LoginPage></LoginPage>
      ) : (
        <GamePage username={username}></GamePage>
      )}
    </>
  );
};
