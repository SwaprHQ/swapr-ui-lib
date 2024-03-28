import * as React from "react";
const SvgWarning = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M13.392 8v6h-2V8zm0 8v2h-2v-2z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M9.981 2h4.823l9.135 15.823L21.528 22H3.257L.845 17.823l4.568-7.911zm1.155 2L3.155 17.823 4.41 20h15.962l1.257-2.177-3.99-6.911L13.648 4z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgWarning;
