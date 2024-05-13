import * as React from "react";
const SvgMenu = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M21 7H3V5h18zm0 6H3v-2h18zM3 19h18v-2H3z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMenu;
