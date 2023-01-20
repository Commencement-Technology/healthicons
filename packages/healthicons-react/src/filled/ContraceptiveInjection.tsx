import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgContraceptiveInjection = (
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
        d="M16 7.152a2 2 0 0 1 1.347-1.89l3.018-1.043A4 4 0 0 1 21.671 4h4.658a4 4 0 0 1 1.306.22l3.018 1.042A2 2 0 0 1 32 7.152V11h-1.09a.996.996 0 0 1-.206.607l-1.51 1.978 5.362 1.756A5 5 0 0 1 38 20.092V39a5 5 0 0 1-5 5H15a5 5 0 0 1-5-5V20.092a5 5 0 0 1 3.444-4.751l5.362-1.756-1.51-1.978a.996.996 0 0 1-.205-.607H16V7.152ZM19.349 11h9.302l-1.046 1.371a2 2 0 0 0 .967 3.114l5.362 1.756A3 3 0 0 1 36 20.092V39a3 3 0 0 1-3 3H15a3 3 0 0 1-3-3V20.092a3 3 0 0 1 2.066-2.85l5.362-1.757a2 2 0 0 0 .967-3.114L19.35 11Zm10.97 21.906A8 8 0 0 0 19.094 21.68l4.114 4.113-1.414 1.414-4.113-4.113A8 8 0 0 0 28.906 34.32l-3.113-3.112 1.414-1.414 3.113 3.113ZM24 38c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10Zm.567-11.99c-.27-.783-.01-1.843.737-2.687.991-1.122 2.465-1.44 3.292-.71s.694 2.233-.298 3.355c-.648.735-1.504 1.124-2.25 1.101l-.002.005c-.207.347-.302.762-.384 1.176l-.01.045c-.074.38-.18.884-.672 1.394-.504.523-1.431.707-2.398.872-.641.11-.973.213-1.135.281-.133.056-.263.351-.442.756-.292.662-.713 1.617-1.49 2.302-.11-.993.203-2.722.38-3.655a1.69 1.69 0 0 1 .606-.753c.473-.338 1.175-.532 2.08-.686.835-.142 1.06-.321 1.115-.378.047-.05.086-.11.174-.553l.01-.047c.08-.406.198-1.005.586-1.656a4.29 4.29 0 0 1 .1-.161Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgContraceptiveInjection);
export default ForwardRef;
