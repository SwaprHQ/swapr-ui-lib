const SvgBarGraphFill = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3 8h5v14H3zm7-6h5v20h-5zm7 9h5v11h-5z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBarGraphFill;
