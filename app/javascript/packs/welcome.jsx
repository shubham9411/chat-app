import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Welcome = props => <h1>Welcome {props.name}!</h1>;

Welcome.defaultProps = {
  name: "David"
};

Welcome.propTypes = {
  name: PropTypes.string
};

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Welcome name="to Rails with React" />,
    document.body.appendChild(document.createElement("div"))
  );
});
