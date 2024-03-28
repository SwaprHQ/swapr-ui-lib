import * as React from "react";
const SvgTick = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m3.616 12.884 1.768-1.768 4.066 4.066 9.015-9.016 1.768 1.768L9.45 18.718z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTick;
