import React, { useEffect, useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";

const FeedbackForm = ({ handleAdd }) => {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [message, setMessage] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage("Text must be at least 10 characters");
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
  }, [text]);

  const handleSelected = (rating) => {
    setRating(rating);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };
      handleAdd(newFeedback);
    }
    setText("");
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={handleSelected} />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder={"Write a review"}
            value={text}
          />
          <Button type="submit" version={"secondary"} isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div>{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
