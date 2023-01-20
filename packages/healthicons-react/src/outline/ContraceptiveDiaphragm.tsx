import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgContraceptiveDiaphragm = (
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
        d="M20.626 17.276a1 1 0 1 0-.576-1.915A8.5 8.5 0 0 0 14 23.428a1 1 0 0 0 2 .017 6.5 6.5 0 0 1 4.626-6.17Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.701 27.382c.67-1.26 1.871-2.248 3.244-2.738.155-1.89.708-3.963 1.666-5.937C11.842 14.11 16.364 9.9 23.394 9.9c6.941 0 11.816 3.615 14.434 7.97 1.304 2.17 2.059 4.536 2.233 6.755l.003.033c1.266.597 2.446 1.648 3.136 2.93.735 1.366.936 3.057-.01 4.668-.916 1.56-2.798 2.854-5.789 3.763-3.008.915-7.267 1.48-13.148 1.48-5.885 0-10.206-.598-13.295-1.551-3.075-.95-5.039-2.285-6.041-3.845-1.035-1.61-.958-3.327-.216-4.721Zm5.4-1.811c-.027 1.83.425 3.068 1.02 3.628A1.1 1.1 0 0 1 9.614 30.8c-.997-.938-1.506-2.386-1.661-3.967-.643.367-1.17.893-1.486 1.487-.43.809-.48 1.748.132 2.7.645 1.003 2.1 2.136 4.949 3.016 2.832.874 6.936 1.463 12.705 1.463 5.774 0 9.818-.559 12.566-1.394 2.766-.841 4.094-1.922 4.646-2.863.522-.888.45-1.822-.026-2.707-.327-.608-.834-1.161-1.418-1.586-.163 1.352-.582 2.614-1.294 3.666a1.1 1.1 0 0 1-1.822-1.233c.752-1.11 1.11-2.715.963-4.586-.146-1.86-.787-3.899-1.925-5.793-2.266-3.77-6.464-6.904-12.549-6.904-5.996 0-9.848 3.54-11.804 7.568-.982 2.022-1.462 4.13-1.489 5.903Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgContraceptiveDiaphragm);
export default ForwardRef;
