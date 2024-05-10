import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPpeGloves = (
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
      <g clipPath="url(#ppe_gloves_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM25.5 5A1.5 1.5 0 0 0 24 6.5V19h-1V8.5a1.5 1.5 0 0 0-3 0V19h-1v-8.5a1.5 1.5 0 0 0-3 0V27a5.997 5.997 0 0 0 2.905 5.141L18 43h12l-.91-10.91a9.116 9.116 0 0 0 3.617-3.15l4.25-6.375a1.881 1.881 0 0 0-3.034-2.218L31 24V8.5a1.5 1.5 0 0 0-3 0V19h-1V6.5A1.5 1.5 0 0 0 25.5 5ZM14 12h-2v16c0 2.286 1.18 4.647 2.943 5.989L14.205 41h2.011l.845-8.028-.544-.328C15.092 31.784 14 29.85 14 28V12Z"
        />
      </g>
      <defs>
        <clipPath id="ppe_gloves_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgPpeGloves);
export default ForwardRef;
