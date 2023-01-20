import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgHpv = (
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
        d="M31 28a1 1 0 0 0 .923-.615l2.5-6a1 1 0 0 0-1.846-.77L31 24.4l-1.577-3.785a1 1 0 0 0-1.846.77l2.5 6A1 1 0 0 0 31 28ZM16 21a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0v-2h2v2a1 1 0 1 0 2 0v-6a1 1 0 1 0-2 0v2h-2v-2Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 20a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0v-2h1.5a2.5 2.5 0 0 0 0-5H22Zm3 2.5a.5.5 0 0 1-.5.5H23v-1h1.5a.5.5 0 0 1 .5.5Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 5a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-1v3.033a14.937 14.937 0 0 1 8.876 3.677l2.145-2.145-.707-.707a1 1 0 1 1 1.414-1.414l2.828 2.828a1 1 0 0 1-1.414 1.414l-.707-.707-2.145 2.145A14.938 14.938 0 0 1 38.967 23H42v-1a1 1 0 0 1 2 0v4a1 1 0 1 1-2 0v-1h-3.033a14.938 14.938 0 0 1-3.677 8.876l2.145 2.145.707-.707a1 1 0 1 1 1.414 1.414l-2.828 2.828a1 1 0 0 1-1.414-1.414l.707-.707-2.145-2.145A14.938 14.938 0 0 1 25 38.967V42h1a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2h1v-3.033a14.937 14.937 0 0 1-8.876-3.677l-2.145 2.145.707.707a1 1 0 1 1-1.414 1.414l-2.828-2.828a1 1 0 1 1 1.414-1.414l.707.707 2.145-2.145A14.937 14.937 0 0 1 9.033 25H6v1a1 1 0 1 1-2 0v-4a1 1 0 0 1 2 0v1h3.033a14.937 14.937 0 0 1 3.677-8.876l-2.145-2.145-.707.707a1 1 0 0 1-1.414-1.414l2.828-2.828a1 1 0 1 1 1.414 1.414l-.707.707 2.145 2.145A14.937 14.937 0 0 1 23 9.033V6h-1a1 1 0 0 1-1-1Zm12.872 10.542A12.943 12.943 0 0 1 36.962 23H36a1 1 0 0 0 0 2h.962a12.944 12.944 0 0 1-3.09 7.458l-.68-.68a1 1 0 0 0-1.414 1.415l.68.68A12.944 12.944 0 0 1 25 36.963V36a1 1 0 1 0-2 0v.962a12.943 12.943 0 0 1-7.458-3.09l.68-.68a1 1 0 0 0-1.414-1.414l-.68.68A12.944 12.944 0 0 1 11.037 25H12a1 1 0 1 0 0-2h-.962a12.944 12.944 0 0 1 3.09-7.458l.68.68a1 1 0 0 0 1.414-1.414l-.68-.68A12.944 12.944 0 0 1 23 11.038V12a1 1 0 1 0 2 0v-.962a12.944 12.944 0 0 1 7.458 3.09l-.68.68a1 1 0 0 0 1.414 1.414l.68-.68Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgHpv);
export default ForwardRef;
