import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgHivNeg = (
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
        d="M29.591 4.675C28.79 4.217 27.891 4 26.924 4h-5.248c-1.824 0-3.669.85-4.779 2.387a6.068 6.068 0 0 0-.108.141l-2.337 3.03-.811 1.081-.002.002a9.414 9.414 0 0 0 .002 11.339l.006.008 9.777 12.402L30 42.775a2 2 0 0 0 2.912.252l4.066-3.662a2 2 0 0 0 .241-2.713l-7.43-9.563-4.792-6.058-5.423-7.004a4.062 4.062 0 0 1 2.012-.518h5.247c.663 0 1.343.193 1.941.518l-3.019 3.9 1.21 1.564 1.215 1.534A3 3 0 0 1 31 17h5.645a9.393 9.393 0 0 0-1.866-6.45l-.812-1.084-.009-.01-2.331-3.023-.011-.015.012-.009c-.575-.804-1.352-1.343-2.037-1.734Zm.419 7.757a4.034 4.034 0 0 0 .022-4.792l-.1-.13.015-.011c-.329-.428-.797-.773-1.348-1.088C28.134 6.145 27.585 6 26.924 6h-5.248c-1.243 0-2.466.59-3.167 1.572l-.01.015-.116.149a3.908 3.908 0 0 0-.774 2.33c0 .811.253 1.68.735 2.367.974-.623 2.12-.924 3.242-.924h5.247c1.132 0 2.243.353 3.177.923Z"
      />
      <path d="m29.352 22.507 2.407 3.043.092.118L33.917 23H31a2.986 2.986 0 0 1-1.648-.493ZM30 20a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1ZM16.567 29.728l4.889 6.204.004.006 1.16 1.48-4.255 5.425a2 2 0 0 1-2.781.36l-4.379-3.317a2 2 0 0 1-.368-2.826l5.73-7.332Z" />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgHivNeg);
export default ForwardRef;
