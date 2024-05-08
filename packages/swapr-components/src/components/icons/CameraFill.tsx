import * as React from "react";
const SvgCameraFill = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8.465 3h7.07l2 3H22v14H2V6h4.465zM8 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCameraFill;
