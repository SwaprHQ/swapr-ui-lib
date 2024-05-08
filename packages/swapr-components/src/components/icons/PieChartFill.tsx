import * as React from "react";
const SvgPieChartFill = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M22.315 6.556A9 9 0 0 1 23 10v1H13V1h1a9 9 0 0 1 8.315 5.556M20.928 9A7 7 0 0 0 15 3.072V9z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11 3.056A9 9 0 1 0 20.944 13H11z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPieChartFill;
