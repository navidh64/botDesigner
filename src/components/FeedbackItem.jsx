import { FeedbackItemPropTypes } from "./types";
import Card from "./shared/Card";
import { FaTimes } from "react-icons/fa";

const FeedbackItem = (props) => {
  return (
    <Card reverse={false}>
      <div className="num-display">{props.rating}</div>
      <button onClick={() => props.handleDelete(props.id)} className="close">
        <FaTimes color={"purple"} />
      </button>
      <div className="text-display">{props.text}</div>
    </Card>
  );
};

export default FeedbackItem;
