import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgTongue = (
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
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30.5 18a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm-.5 2.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0ZM15 20.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm2.5-.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.874 41.582C35.953 39.81 42 32.612 42 24c0-9.941-8.059-18-18-18S6 14.059 6 24c0 8.611 6.047 15.81 14.126 17.582A5.976 5.976 0 0 0 24 43a5.976 5.976 0 0 0 3.874-1.418Zm1.797-2.616C35.708 36.677 40 30.84 40 24c0-8.837-7.163-16-16-16S8 15.163 8 24c0 6.84 4.292 12.677 10.33 14.966A5.992 5.992 0 0 1 18 37v-1.811c-1.13-.401-1.959-.925-2.563-1.509-1.383-1.336-1.397-2.8-1.397-3.18v-.014l-.003-.041-.01-.123v-.011a7.95 7.95 0 0 1-.025-.41c-.009-.31.005-.738.148-1.174a2.33 2.33 0 0 1 .963-1.256c.504-.325 1.135-.471 1.868-.471h14.077c.66 0 1.23.167 1.695.491.459.32.744.744.92 1.147.328.749.327 1.548.327 1.84v.022c0 .507-.203 1.933-1.679 3.216-.58.505-1.338.969-2.321 1.345V37c0 .689-.116 1.35-.33 1.966Zm-12.845-6.724c.267.257.644.532 1.174.786V32a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v.875a5.025 5.025 0 0 0 1.01-.669c.48-.418.725-.831.851-1.142a2.07 2.07 0 0 0 .136-.516v-.008l.003-.027V30.5c0-.293-.01-.72-.159-1.06a.7.7 0 0 0-.232-.308c-.082-.057-.239-.132-.55-.132H16.98c-.48 0-.699.096-.786.152a.334.334 0 0 0-.145.199c-.038.118-.055.28-.049.492.003.102.01.201.02.308l.001.024c.007.088.018.215.018.325v.01c0 .197-.002.97.787 1.732ZM24 37a1 1 0 0 1-1-1v-3h-3v4a4 4 0 0 0 8 0v-4h-3v3a1 1 0 0 1-1 1Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgTongue);
export default ForwardRef;
