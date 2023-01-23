import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgHeartCardiogram = (
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
        d="M10.345 11.988C8.885 13.846 8 16.384 8 19.035c0 1.537.264 3.009.73 4.41h8.685l3.388-6.024 2.117 7.41 2.59-3.331H32v2h-5.51l-4.41 5.67-1.883-6.591-1.612 2.865H4v-2h2.636A15.78 15.78 0 0 1 6 19.034c0-3.075 1.021-6.054 2.772-8.282C10.528 8.518 13.056 7 16.032 7c3.503 0 6.167 1.963 7.968 4.734C25.8 8.964 28.465 7 31.969 7c2.975 0 5.504 1.518 7.26 3.753C40.978 12.98 42 15.96 42 19.035c0 6.582-4.544 12.079-8.842 15.831a49.172 49.172 0 0 1-8.494 5.914l-.151.08-.04.022-.012.005-.003.002h-.001S24.456 40.89 24 40l-.434.9-.006-.002-.014-.007-.05-.025a30.86 30.86 0 0 1-.876-.457 44.34 44.34 0 0 1-2.394-1.402c-1.951-1.224-4.51-3.027-6.918-5.333-1.284-1.23-2.53-2.61-3.62-4.128a1 1 0 1 1 1.624-1.166c1.005 1.4 2.166 2.687 3.38 3.85 2.279 2.184 4.72 3.905 6.597 5.083a42.303 42.303 0 0 0 2.698 1.559l.252-.141a47.168 47.168 0 0 0 7.603-5.371C36.044 29.691 40 24.705 40 19.034c0-2.65-.885-5.189-2.344-7.047C36.2 10.137 34.213 9 31.969 9c-3.103 0-5.51 2.02-7.071 5.202L24 16.03l-.898-1.828C21.541 11.02 19.134 9 16.032 9c-2.245 0-4.232 1.136-5.687 2.988ZM24 40l-.434.9.448.217.443-.227L24 40Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgHeartCardiogram);
export default ForwardRef;