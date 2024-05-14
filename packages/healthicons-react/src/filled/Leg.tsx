import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgLeg = (
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
      <path d="M18.134 19.672 21.33 4.79a1 1 0 0 1 .978-.79h10.557c.602 0 1.07.528.95 1.118C32.264 12.705 25 20.82 25 20.82l1.281 2.155a8.001 8.001 0 0 1 1.116 4.434L27 36.589l1.843 2.262a3.04 3.04 0 0 1 .444 3.104l-.055.132a2.908 2.908 0 0 1-4.032 1.441 3.878 3.878 0 0 0-2.532-.376l-3.982.761c-.124.024-.25.036-.375.036H15a2 2 0 0 1-2-2v-1.154h3l6.5-2.628-4.199-12.753A6 6 0 0 1 18 23.538v-2.606c0-.424.045-.846.134-1.26Z" />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgLeg);
export default ForwardRef;
