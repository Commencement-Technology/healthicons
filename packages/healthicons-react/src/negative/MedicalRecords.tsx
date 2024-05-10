import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgMedicalRecords = (
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
      <g clipPath="url(#medical_records_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9Zm7 6h3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2h3a2 2 0 0 1 2 2v22a2 2 0 0 1-2 2H16a2 2 0 0 1-2-2V14a2 2 0 0 1 2-2Zm8.557 16-2.493 6.649a1 1 0 1 0 1.872.702l1.259-3.355h2.61l1.259 3.355a1 1 0 1 0 1.872-.702L28.444 28h2.858a1 1 0 1 0 0-2h-10.3a1 1 0 0 0 0 2h3.556ZM31 19.24H17v-2h14v2ZM17 23.4h5v-2h-5v2Zm11.5-.4a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM27 12h-6v2h6v-2Z"
        />
      </g>
      <defs>
        <clipPath id="medical_records_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgMedicalRecords);
export default ForwardRef;
