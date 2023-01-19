import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineHivNeg = (
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
        d="M29.591 4.675C28.79 4.217 27.891 4 26.924 4h-5.248c-1.824 0-3.669.85-4.778 2.387a5.805 5.805 0 0 0-.11.141l-2.336 3.03-.811 1.081-.002.002a9.414 9.414 0 0 0 .002 11.339l.006.008 4.504 5.714-7.314 9.358a2 2 0 0 0 .368 2.826l4.379 3.317a2 2 0 0 0 2.781-.36l5.844-7.451L30 42.775a2 2 0 0 0 2.912.252l4.066-3.662a2 2 0 0 0 .241-2.713l-6.949-8.944L33.143 24h-2.53l-1.617 2.087-3.552-4.49 6.066-7.836a5.951 5.951 0 0 0 1.199-2.638l.472.629.003.004A7.413 7.413 0 0 1 34.462 18h2.046a9.407 9.407 0 0 0-1.729-7.45l-.812-1.084-.009-.01-2.331-3.023-.011-.015.012-.009c-.575-.804-1.352-1.343-2.037-1.734Zm-.817 9.352-4.6 5.942-4.6-5.942a4.063 4.063 0 0 1 2.012-.518h5.247c.663 0 1.343.193 1.941.518Zm1.258-6.387a4.034 4.034 0 0 1-.022 4.792c-.934-.57-2.045-.923-3.177-.923h-5.247c-1.123 0-2.267.3-3.241.924a4.206 4.206 0 0 1-.735-2.366c0-.815.256-1.632.773-2.331l.115-.15.01-.014C19.21 6.59 20.434 6 21.677 6h5.248c.66 0 1.21.145 1.675.411.551.315 1.02.66 1.348 1.088l-.015.011.1.13ZM12.413 38.292l7.013-8.974 3.511 4.455-6.146 7.836-4.378-3.317Zm3.304-27.088a6.05 6.05 0 0 0 1.192 2.647l6.516 8.417 4.795 6.062 7.42 9.55-4.066 3.66-6.578-8.386-9.766-12.39a7.414 7.414 0 0 1 .005-8.917l.003-.004.479-.639Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        d="M30 21a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineHivNeg);
export default ForwardRef;
