const SvgSupport = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8 9a4 4 0 1 1 8 0v8a2 2 0 0 1-2 2v-1h-4v3h4a4 4 0 0 0 4-4h3l1-1v-6l-1-1h-3A6 6 0 1 0 6 9H3l-1 1v6l1 1h4l1-1zm-2 6v-4H4v4zm12-4v4h2v-4z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSupport;
