import * as React from "react";
const SvgFilter = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="currentColor" d="M21 7H3V5h18zm-2 6H5v-2h14zM8 19h8v-2H8z" />
  </svg>
);
export default SvgFilter;
