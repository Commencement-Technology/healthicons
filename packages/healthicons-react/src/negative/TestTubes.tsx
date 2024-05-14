import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgTestTubes = (
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
      <g clipPath="url(#test-tubes_svg__a)" fill="#000">
        <path d="M15 23v-2h-4v2h4Z" />
        <path d="M17 29v-8h3v8a4 4 0 0 0 8 0v-8h3v8a4 4 0 0 0 8 0v-8h2v13H7V21h2v8a4 4 0 0 0 8 0ZM22 19h4v-7h-4v7Z" />
        <path d="M33 26v-5h4v5h-4ZM33 19h4v-7h-4v7ZM11 12v7h4v-7h-4Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm17 19h3v-7a1 1 0 1 1 0-2h8a1 1 0 1 1 0 2v7h3v-9h8v9h2v-3h2v3h1v2h-1v13h1v2h-1v2h-2v-2H7v2H5v-2H4v-2h1V21H4v-2h1v-3h2v3h2v-7a1 1 0 1 1 0-2h8a1 1 0 1 1 0 2v7Z"
        />
      </g>
      <defs>
        <clipPath id="test-tubes_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgTestTubes);
export default ForwardRef;
