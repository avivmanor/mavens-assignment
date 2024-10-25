import React, { useEffect, useState } from "react";
import { FeedbackAlert } from "../../components/feedback/feedbackAlert";
import { Alert, Box } from "@mui/joy";
import { AlertWrapper, Circle, HeaderWrapper } from "./gamePage.style";
import axios from "axios";
import {
  Feedback,
  FeedbackMessageEnum,
  FeedbackTypeEnum,
} from "../../interfaces/feedback.interface";
import { GameModeEnum } from "../../interfaces/game-mode.enum";

export const GamePage = ({ username }: { username: string }) => {
  const initialFeedback: Feedback = {
    feedbackType: FeedbackTypeEnum.NONE,
    message: FeedbackMessageEnum.NONE,
  };

  const apiUrl = "http://localhost:8000/users";
  const [gameMode, setGameMode] = useState<GameModeEnum>(GameModeEnum.LOADING);
  const [feedback, setFeedback] = useState<Feedback>(initialFeedback);
  const [tooSoonFlag, setTooSoonFlag] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);

  const incrementSteps = async () => {
    const body = { username: username };
    try {
      await axios.patch(apiUrl, body);
      setError(null);
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleModeChange = () => {
    setGameMode((currentMode) =>
      currentMode === GameModeEnum.LOADING
        ? Math.random() < 0.5
          ? GameModeEnum.LEFT
          : GameModeEnum.RIGHT
        : GameModeEnum.LOADING
    );
  };

  const handleReaction = async (event: KeyboardEvent, timeout?: any) => {
    if (gameMode === GameModeEnum.LEFT) {
      handleFeedback("a", event.key);
    } else if (gameMode === GameModeEnum.RIGHT) {
      handleFeedback("l", event.key);
    } else {
      setFeedback({
        feedbackType: FeedbackTypeEnum.MISTAKE,
        message: FeedbackMessageEnum.TOO_SOON,
      });
      setTooSoonFlag((prev) => prev + 1);
    }
  };

  const handleFeedback = (expectedKey: string, actualKey: string) => {
    if (actualKey === expectedKey) {
      setFeedback({
        feedbackType: FeedbackTypeEnum.SUCCESS,
        message: FeedbackMessageEnum.NONE,
      });
      incrementSteps();
    } else {
      setFeedback({
        feedbackType: FeedbackTypeEnum.MISTAKE,
        message: FeedbackMessageEnum.WRONG_KEY,
      });
    }
  };

  useEffect(() => {
    const t =
      gameMode === GameModeEnum.LOADING
        ? Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000
        : 1000;
    window.addEventListener("keydown", handleReaction);
    const timer = setTimeout(handleModeChange, t);

    // A fallback in case no key was pressed:
    if (gameMode !== GameModeEnum.LOADING)
      setFeedback({
        feedbackType: FeedbackTypeEnum.MISTAKE,
        message: FeedbackMessageEnum.TOO_LATE,
      });

    return () => {
      window.removeEventListener("keydown", handleReaction);
      clearTimeout(timer);
    };
  }, [gameMode, tooSoonFlag]);

  return (
    <>
      <Box display="flex" flexDirection="column" height="100%">
        <HeaderWrapper>Game On!</HeaderWrapper>
        {error && (
          <Box marginBottom="20px">
            <Alert color="danger">{error}</Alert>
          </Box>
        )}

        <Box width="100%" display="flex" justifyContent="center" height="100%">
          {gameMode !== GameModeEnum.LOADING ? (
            <Box
              display="flex"
              width="100%"
              height="100%"
              alignItems="center"
              flexDirection={
                gameMode === GameModeEnum.LEFT ? "row" : "row-reverse"
              }
            >
              <Circle />
            </Box>
          ) : (
            <AlertWrapper>
              {feedback.feedbackType !== FeedbackTypeEnum.NONE && (
                <FeedbackAlert feedbackToShow={feedback}></FeedbackAlert>
              )}
            </AlertWrapper>
          )}
        </Box>
      </Box>
    </>
  );
};
