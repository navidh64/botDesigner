import React from "react";

const Card = ({ children, reverse }) => {
  // return <div className={`card ${reverse && "reverse"}`}>{children}</div>;
  return (
    <div
      style={{
        backgroundColor: reverse ? "red" : "#fff",
        color: reverse ? "blue" : "#000",
      }}
      className={"card"}
    >
      {children}
    </div>
  );
};

export default Card;
