import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgOldMan = (
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
        d="M32 30.054a3 3 0 0 1 6 0V43a1 1 0 1 1-2 0V30.054a1 1 0 0 0-2 0v.343a1 1 0 1 1-2 0v-.343Z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.255 17c-1.976 0-3.554.66-4.638 1.717A5.336 5.336 0 0 0 12 22.491a5.213 5.213 0 0 0 1.564 3.79c1.043 1.023 2.557 1.668 4.461 1.716l.975.025v13.245c0 .267.286.706.949.732.666.026 1.018-.397 1.048-.68L21.975 32h4.05l.978 9.32c.03.282.382.705 1.048.679.663-.026.949-.465.949-.732V19.248l1.414.643c1.103.501 1.82 1.14 2.294 1.715.52.633 1.014 1.499 1.143 2.451l.002.02.002.016c.052.512.54.954 1.166.903.6-.048 1.027-.566.983-1.079a5.187 5.187 0 0 0-.264-1.148 7.44 7.44 0 0 0-1.318-2.375C32.964 18.622 30.295 17 25.576 17h-7.321Zm-6.034.285c1.5-1.462 3.6-2.285 6.034-2.285h7.32c5.225 0 8.498 1.822 10.392 4.123a9.442 9.442 0 0 1 1.672 3.016c.16.484.304 1.024.356 1.598v.004c.153 1.727-1.217 3.12-2.814 3.249-1.636.131-3.136-1.025-3.314-2.676-.066-.464-.334-.987-.704-1.437a3.67 3.67 0 0 0-.163-.185v18.575c0 1.585-1.396 2.672-2.87 2.73-1.47.058-2.952-.906-3.116-2.47L24.224 34h-.448l-.79 7.528c-.164 1.563-1.646 2.527-3.116 2.47-1.474-.058-2.87-1.146-2.87-2.731v-11.34c-1.925-.23-3.59-.995-4.837-2.22A7.214 7.214 0 0 1 10 22.472a7.336 7.336 0 0 1 2.22-5.186ZM19 18.957v7.083l-1.044-.046c-1.326-.06-2.237-.51-2.825-1.087a3.294 3.294 0 0 1-.974-2.398 3.413 3.413 0 0 1 1.022-2.414c.597-.581 1.499-1.027 2.773-1.088l1.048-.05Zm-2 2.281a1.413 1.413 0 0 0-.843 1.291c-.004.384.137.718.375.95.094.093.242.207.468.304v-2.545ZM24 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgOldMan);
export default ForwardRef;
