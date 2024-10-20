import Alert from "@mui/joy/Alert";
import { FeedbackTypeEnum } from "../../interfaces/feedback.interface";

export const FeedbackAlert = ({ feedbackToShow }: any) => {
  const colorType =
    feedbackToShow.feedbackType === FeedbackTypeEnum.MISTAKE
      ? "danger"
      : "success";
  return (
    <Alert variant="soft" color={colorType}>
      {feedbackToShow.feedbackType === FeedbackTypeEnum.SUCCESS
        ? "Success"
        : feedbackToShow.message}
    </Alert>
  );
};
