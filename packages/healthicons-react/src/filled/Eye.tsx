import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgEye = (
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
        d="M6.695 22.188c1.879-2.127 4.73-4.563 8.391-6.222A11.956 11.956 0 0 0 12 24c0 3.09 1.168 5.907 3.086 8.034-3.66-1.659-6.512-4.095-8.391-6.222a2.709 2.709 0 0 1 0-3.624Zm-1.499-1.324c3.408-3.858 9.885-8.771 18.626-8.863L24 12h.07c8.866 0 15.433 4.97 18.873 8.864a4.709 4.709 0 0 1 0 6.272C39.503 31.03 32.936 36 24.07 36H24l-.178-.001c-8.74-.092-15.218-5.005-18.626-8.863a4.709 4.709 0 0 1 0-6.272ZM24.028 14l-.181.001C18.394 14.083 14 18.528 14 24s4.395 9.917 9.847 9.999l.181.001C29.538 33.985 34 29.513 34 24s-4.462-9.985-9.972-10ZM36 24c0 3.14-1.207 6-3.182 8.139 3.774-1.66 6.707-4.155 8.626-6.327a2.709 2.709 0 0 0 0-3.624c-1.919-2.172-4.852-4.667-8.626-6.327A11.957 11.957 0 0 1 36 24Zm-11.93 6a6 6 0 0 0 5.415-8.587 2 2 0 1 1-2.828-2.828A6 6 0 1 0 24.07 30Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgEye);
export default ForwardRef;
