import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPpeSantizerAlt = (
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
      <g clipPath="url(#ppe_santizer_alt_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM13 17a3 3 0 0 0-3 3v3h8a1 1 0 1 1 0 2h-8v9h10a1 1 0 1 1 0 2H10v1a3 3 0 0 0 3 3h12c.889 0 1.687-.386 2.236-1h2.348A5.001 5.001 0 0 1 25 42H13a5 5 0 0 1-5-5V20a5.002 5.002 0 0 1 4-4.9V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v7.1a5.01 5.01 0 0 1 3.584 2.9h-2.348c-.55-.614-1.348-1-2.236-1H13Zm11-2H14V8h10v7Zm13.34 18.69A12.35 12.35 0 0 0 40 25.997V22.4c0-.637-.25-1.247-.696-1.697A2.362 2.362 0 0 0 37.627 20H23.374c-.63 0-1.233.253-1.678.703A2.413 2.413 0 0 0 21 22.4v3.598a12.35 12.35 0 0 0 2.66 7.69A12.122 12.122 0 0 0 30.5 38a12.122 12.122 0 0 0 6.84-4.31ZM32 25a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2v-2Z"
          fill="#000"
        />
      </g>
      <defs>
        <clipPath id="ppe_santizer_alt_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgPpeSantizerAlt);
export default ForwardRef;
