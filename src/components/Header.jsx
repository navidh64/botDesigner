import React from "react";
import { HeaderPropTypes } from "./types";

const Header = (props: HeaderPropTypes) => {
  return (
    <header>
      <div className="container">
        <h2>{props.text}</h2>
      </div>
    </header>
  );
};

export default Header;
