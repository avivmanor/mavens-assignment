export interface GameContextType {
  username: string;
  gameMode: GameModeEnum;
  feedback: Feedback;
  setUsername: (username: string) => void;
  setGameMode: (mode: GameModeEnum) => void;
  setFeedback: (feedback: Feedback) => void;
}

export enum GameModeEnum {
  LOADING = "loading",
  LEFT = "left",
  RIGHT = "right",
}

export enum FeedbackTypeEnum {
  SUCCESS = "success",
  MISTAKE = "mistake",
  NONE = "none",
}

export enum FeedbackMessageEnum {
  TOO_SOON = "Too Soon",
  WRONG_KEY = "Wrong Key",
  TOO_LATE = "Too Late",
  NONE = "none",
}

export interface Feedback {
  feedbackType: FeedbackTypeEnum;
  message: FeedbackMessageEnum;
}
