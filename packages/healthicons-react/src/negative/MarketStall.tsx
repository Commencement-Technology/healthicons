import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgMarketStall = (
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
      <g clipPath="url(#market-stall_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm9.263 6c-.378 0-.715.262-.845.656L6.11 13.667a2.2 2.2 0 0 0-.11.687v2.789C6 18.72 7.151 20 8.571 20c.533 0 1.028-.18 1.438-.488.068-.051.134-.106.197-.164h.001c.115-.106.222-.222.319-.348.384-.5.617-1.148.617-1.857 0 .715.236 1.369.627 1.87.072.092.148.178.23.26a2.424 2.424 0 0 0 1.714.727c1.42 0 2.572-1.28 2.572-2.857 0 1.578 1.151 2.857 2.571 2.857 1.42 0 2.57-1.278 2.572-2.855C21.429 18.722 22.58 20 24 20c1.42 0 2.571-1.28 2.571-2.857 0 1.578 1.152 2.857 2.572 2.857 1.42 0 2.57-1.278 2.571-2.855.001 1.577 1.152 2.855 2.572 2.855.665 0 1.272-.281 1.729-.742.08-.08.155-.167.225-.258.385-.5.617-1.148.617-1.857 0 .715.236 1.369.627 1.87.095.12.198.233.31.335l.023.021a2.382 2.382 0 0 0 1.612.63c1.42.001 2.571-1.278 2.571-2.856v-2.789a2.2 2.2 0 0 0-.11-.687l-2.308-7.01c-.13-.395-.467-.657-.845-.657H9.263ZM7 29.5a.5.5 0 0 1 .5-.5H10v-7.77a3.916 3.916 0 0 0 1.143-.703c.258.227.545.422.857.576V29h2.5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v.5h1.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H36v-7.897c.312-.154.599-.349.857-.576.336.295.72.535 1.143.703V29h2.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-33a.5.5 0 0 1-.5-.5v-1Zm15.5-.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM8 33.5a.5.5 0 0 1 .5-.5h31a.5.5 0 0 1 .5.5V41a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-7.5Z"
        />
      </g>
      <defs>
        <clipPath id="market-stall_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgMarketStall);
export default ForwardRef;
