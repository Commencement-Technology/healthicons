import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilled2G = (
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
      <path
        fill="#333"
        fillRule="evenodd"
        d="M10 29a3 3 0 0 1 3-3h22a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H13a3 3 0 0 1-3-3V29Zm8.75 2a1.25 1.25 0 0 1 .805 2.208l-5.25 5.073A1 1 0 0 0 15 40h6a1 1 0 1 0 0-2h-3.526l3.458-3.342A3.25 3.25 0 0 0 18.75 29h-1.5a3.25 3.25 0 0 0-3.065 2.167 1 1 0 1 0 1.886.666A1.25 1.25 0 0 1 17.25 31h1.5Zm14.003.774a1 1 0 0 0-.08-1.412 5.503 5.503 0 1 0 0 8.204 1 1 0 0 0 .334-.745v-3.357a1 1 0 0 0-1-1h-3.002a1 1 0 1 0 0 2h2.002v1.875a3.504 3.504 0 1 1 .334-5.486 1 1 0 0 0 1.412-.08Z"
        clipRule="evenodd"
      />
      <path
        stroke="#333"
        d="M33.192 4.808a13 13 0 0 1 0 18.384M28.95 9.05a7 7 0 0 1 0 9.9m-9.9 0a6.999 6.999 0 0 1 0-9.9m-4.242 14.142a13 13 0 0 1 0-18.384"
      />
      <circle cx={24} cy={14} r={2} fill="#333" />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgFilled2G);
export default ForwardRef;
