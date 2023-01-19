import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledBaby0203Alt = (
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
      <path fill="#333" d="M24 18.25a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M15 16.697V34.29c0 3.411 2.813 7.959 9 7.959 6.188 0 9-3.98 9-7.959v-.855c-1.444-3.67-4.435-7.343-8.014-10.434a40.935 40.935 0 0 0-6.371-4.522 30.812 30.812 0 0 1-.568-.317A30.837 30.837 0 0 0 15 16.697Zm10.032 3.744c.427.34.847.69 1.261 1.048 2.6 2.245 4.969 4.839 6.707 7.592V17.25c-3.042 2.178-5.51 3.186-7.968 3.191Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgFilledBaby0203Alt);
export default ForwardRef;
