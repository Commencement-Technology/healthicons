import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPlantationWorkerAlt = (
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
      <path d="M24 9.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 16.268a2 2 0 0 0 0 3.464v12.439A3.001 3.001 0 0 0 5 35v6h2v-4h2v4h2v-6a3.001 3.001 0 0 0-2-2.83V20h6v20a2 2 0 1 0 4 0v-9h3v9a2 2 0 1 0 4 0V27.917A6.002 6.002 0 0 0 25 16H9v-3H7v3.268ZM28 22a2 2 0 0 0-2-2v4a2 2 0 0 0 2-2Z"
      />
      <path d="M36.914 17.595A.996.996 0 0 1 37 18v23a1 1 0 0 1-2 0v-9.945c-.001.519-.04.88-.04.88s-2.928.393-4.083-.75c-1.154-1.143-.837-4.12-.837-4.12s2.928-.393 4.083.75c.738.73.874 2.21.877 3.183V18c0-.144.03-.282.086-.405-.714-.792-1.586-1.986-1.586-3.095 0-1.877 2.5-4 2.5-4s2.5 2.123 2.5 4c0 1.109-.872 2.303-1.586 3.095Z" />
      <path d="M37.877 34.815c1.155-1.142 4.083-.75 4.083-.75s.317 2.977-.837 4.12c-1.155 1.142-4.083.75-4.083.75s-.317-2.977.837-4.12ZM41.96 20.065s-2.928-.393-4.083.75c-1.154 1.143-.837 4.12-.837 4.12s2.928.393 4.083-.75c1.154-1.143.837-4.12.837-4.12Z" />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgPlantationWorkerAlt);
export default ForwardRef;
