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
