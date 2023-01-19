import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegativeLiver = (
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
        d="M0 0h48v48H0V0Zm23.216 10.06a11.6 11.6 0 0 0-1.413 2.782 12.53 12.53 0 0 0-.61 2.6 10.324 10.324 0 0 0-.074 1.027v.097s0 .002 1-.018l1-.02v-.038a8.309 8.309 0 0 1 .06-.805c.068-.554.211-1.325.512-2.181a9.3 9.3 0 0 1 1.963-3.288c2.325.263 3.198.789 3.922 1.224.639.384 1.16.697 2.461.697 1.343 0 3.224-.4 5.104-.802 2.82-.602 5.642-1.204 6.649-.451 1.679 1.253-3.358 10.447-8.395 10.447-2.592 0-4.147 1.859-5.656 3.663-1.422 1.7-2.804 3.352-4.977 3.352-2.092 0-3.451.659-4.762 1.36v-6.658c0-.395.195-.764.534-1.06.357-.313.756-.44.966-.44v-2c-.79 0-1.64.373-2.284.935-.643.563-1.186 1.413-1.215 2.477h-5.094c-2.39 0-5.256 1.051-2.39 3.153 2.08 1.526 5.669.312 7.483-.47v5.064a8.356 8.356 0 0 1-3.312.654c-1.835 0-2.442 1.469-3.087 3.03-.731 1.769-1.512 3.657-4.188 3.657-5.037 0-3.794-15.5-.794-21.5s7.106-6.5 15.5-6.5c.387 0 .752.004 1.097.013ZM18 30.708v9.34h2v-10.34l-2 1Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgNegativeLiver);
export default ForwardRef;
