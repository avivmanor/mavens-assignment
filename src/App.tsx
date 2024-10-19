import React from "react";
import "./App.css";
import { GameProvider } from "./context/gameContext";
import { RoutingPage } from "./pages/routingPage/routingPage";

function App() {
  return (
    <GameProvider>
      <RoutingPage></RoutingPage>
    </GameProvider>
  );
}

export default App;
