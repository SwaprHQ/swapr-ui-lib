import * as React from "react";
const SvgCopy = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M16 3H4v14h4v4h12V7h-4zm-2 4V5H6v10h2V7zm-4 12V9h8v10z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCopy;
