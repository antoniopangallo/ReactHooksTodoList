import React from "react";
import PropTypes from "prop-types";

const Button = ({ disabled, children, onClick, type }) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    style={{ marginLeft: "4px" }}
  >
    {children}
  </button>
);

Button.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func
};

export default Button;
