import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledHomeAlt = (
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
        d="M41.708 23.794 24.058 6.086 6.294 23.792a1 1 0 0 0 1.412 1.416L11 21.925V41a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-8a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v8a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V21.903l3.292 3.303a1 1 0 0 0 1.416-1.412Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgFilledHomeAlt);
export default ForwardRef;
