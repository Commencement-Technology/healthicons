import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineCalendarQuarantine = (
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
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      fill="none"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <path fill="#fff" d="M0 0h48v48H0z" />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M10 11a1 1 0 0 0-1 1v27a1 1 0 0 0 1 1h28c.55 0 1-.449 1-1.002V12.002c0-.554-.45-1.002-1-1.002h-3V9h3c1.658 0 3 1.347 3 3.002v26.996A3.002 3.002 0 0 1 38 42H10a3 3 0 0 1-3-3V12a3 3 0 0 1 3-3h5v2h-5Zm21 0H19V9h12v2Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M39 20H9v-2h30v2Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        d="M15 7a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V7Zm16 0a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V7Z"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M24 26.8a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4ZM18.8 30a5.2 5.2 0 1 1 10.4 0 5.2 5.2 0 0 1-10.4 0Zm3.5-7a1 1 0 0 1 1-1h1.4a1 1 0 1 1 0 2h-1.4a1 1 0 0 1-1-1Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M23 26.5v-2.8h2v2.8h-2Zm4.493-2.807a1 1 0 0 1 1.414 0l1.4 1.4a1 1 0 0 1-1.414 1.414l-1.4-1.4a1 1 0 0 1 0-1.414Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="m26.093 26.493 2.1-2.1 1.414 1.414-2.1 2.1-1.414-1.414ZM31 28.3a1 1 0 0 1 1 1v1.4a1 1 0 1 1-2 0v-1.4a1 1 0 0 1 1-1Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M27.2 30a1 1 0 0 1 1-1H31a1 1 0 1 1 0 2h-2.8a1 1 0 0 1-1-1Zm3.807 3.493a1 1 0 0 1 0 1.414l-1.4 1.4a1 1 0 1 1-1.414-1.414l1.4-1.4a1 1 0 0 1 1.414 0Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="m28.207 32.093 2.1 2.1-1.414 1.414-2.1-2.1 1.414-1.414ZM22.3 37a1 1 0 0 1 1-1h1.4a1 1 0 1 1 0 2h-1.4a1 1 0 0 1-1-1Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M24 33.2a1 1 0 0 1 1 1V37a1 1 0 1 1-2 0v-2.8a1 1 0 0 1 1-1Zm-6.307.293a1 1 0 0 1 1.414 0l1.4 1.4a1 1 0 0 1-1.414 1.414l-1.4-1.4a1 1 0 0 1 0-1.414Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="m21.907 33.507-2.1 2.1-1.414-1.414 2.1-2.1 1.414 1.414ZM17 28.3a1 1 0 0 1 1 1v1.4a1 1 0 1 1-2 0v-1.4a1 1 0 0 1 1-1Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M16 30a1 1 0 0 1 1-1h2.8a1 1 0 1 1 0 2H17a1 1 0 0 1-1-1Zm4.507-6.307a1 1 0 0 1 0 1.414l-1.4 1.4a1 1 0 0 1-1.414-1.414l1.4-1.4a1 1 0 0 1 1.414 0Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="m20.493 27.907-2.1-2.1 1.414-1.414 2.1 2.1-1.414 1.414Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineCalendarQuarantine);
export default ForwardRef;
