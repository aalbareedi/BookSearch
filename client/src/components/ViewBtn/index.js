import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function ViewBtn({ children }) {
  return (
    <span className="view-btn" role="button" tabIndex="0">
      {children}
    </span>
  );
}

export default ViewBtn;
