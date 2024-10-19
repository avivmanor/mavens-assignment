import React, { createContext, useState, FC } from "react";
import {
  Feedback,
  FeedbackMessageEnum,
  FeedbackTypeEnum,
  GameContextType,
  GameModeEnum,
} from "./gameContext.interface";

const initialFeedback: Feedback = {
  feedbackType: FeedbackTypeEnum.NONE,
  message: FeedbackMessageEnum.NONE,
};

const initialState: GameContextType = {
  username: "",
  gameMode: GameModeEnum.LOADING,
  feedback: initialFeedback,
  setUsername: () => {},
  setGameMode: () => {},
  setFeedback: () => {},
};

export const GameContext = createContext<GameContextType>(initialState);

export const GameProvider = ({ children }: any) => {
  const [username, setUsername] = useState<string>("");
  const [gameMode, setGameMode] = useState<GameModeEnum>(GameModeEnum.LOADING);
  const [feedback, setFeedback] = useState<Feedback>(initialFeedback);

  return (
    <GameContext.Provider
      value={{
        username,
        gameMode,
        feedback,
        setUsername,
        setGameMode,
        setFeedback,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
