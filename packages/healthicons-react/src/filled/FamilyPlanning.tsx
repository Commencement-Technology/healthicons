import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgFamilyPlanning = (
  passedProps: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => {
  const context = React.useContext(HealthIconsContext);
  const props = {
    ...context,
    ...passedProps,
  };
  return (
    <svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H8Zm7 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-3-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm3 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-3-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm7-3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm3-3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
        fill="#333"
      />
      <path
        d="M31 16a3 3 0 1 1 6 0v.803A5.998 5.998 0 0 1 40 22v18h1a1 1 0 1 1 0 2H27a1 1 0 1 1 0-2h1V22c0-2.22 1.207-4.16 3-5.197V16ZM13 27.778c0-.842.658-1.547 1.542-1.731l-.93-1.882L6.48 25.97 6 24.03l7.133-1.806a1.967 1.967 0 0 1 2.246 1.046L16 24.528l.621-1.258a1.967 1.967 0 0 1 2.246-1.046L26 24.03l-.48 1.94-7.132-1.805-.93 1.882c.884.184 1.542.89 1.542 1.73v10.445c0 .982-.895 1.778-2 1.778v2h-2v-2c-1.105 0-2-.796-2-1.778V27.778Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgFamilyPlanning);
export default ForwardRef;
