import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgVomiting = (
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
        d="M25.5 15a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm4.617 3.053c0 .582-.474 1.054-1.059 1.054A1.056 1.056 0 0 1 28 18.054c0-.582.474-1.054 1.058-1.054.585 0 1.06.472 1.06 1.053ZM42 39.5c0 1.38-3.358 2.5-7.5 2.5-4.142 0-7.5-1.12-7.5-2.5s3.358-2.5 7.5-2.5c.188 0 .374.002.559.007A1.584 1.584 0 0 1 36.589 35c.876 0 1.587.708 1.587 1.58 0 .255-.061.496-.169.71C40.382 37.71 42 38.542 42 39.5ZM31.588 25.16c.877 0 1.588-.707 1.588-1.58 0-.872-.711-1.58-1.588-1.58-.877 0-1.588.707-1.588 1.58 0 .873.71 1.58 1.588 1.58Zm5.53 3.893c0 .582-.475 1.054-1.06 1.054A1.056 1.056 0 0 1 35 29.054c0-.582.474-1.054 1.059-1.054.584 0 1.058.472 1.058 1.053Zm-6.06 4.054c.585 0 1.06-.472 1.06-1.053 0-.582-.475-1.054-1.06-1.054-.584 0-1.058.472-1.058 1.053 0 .582.474 1.054 1.058 1.054Zm-18.71-7.726a39.759 39.759 0 0 0 2.605 2.67l.206.19.051.047.012.01.002.003a2 2 0 0 1 .658 1.365l.614 10.214a2 2 0 1 1-3.992.24l-.567-9.417a42.264 42.264 0 0 1-2.914-3.05c-.83-.966-1.699-2.096-2.28-3.196-.29-.549-.557-1.18-.677-1.844-.12-.666-.118-1.534.357-2.357 2.698-4.672 5.39-6.899 7.828-7.807a7.887 7.887 0 0 1 3.138-.508c.669.03 1.637.215 1.464.193.99.126 1.486.838 1.668 1.192.184.358.252.712.284.926.067.456.061.974.038 1.437-.048.964-.205 2.178-.38 3.323a97.759 97.759 0 0 1-.626 3.597l3.699 4.042a2 2 0 0 1-2.952 2.7l-4.38-4.788a2 2 0 0 1-.483-1.752l.005-.022.014-.072a84.31 84.31 0 0 0 .248-1.277c.057-.306.12-.648.185-1.014-1.483 1.293-2.444 2.654-3.47 4.362l-.355.593Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgVomiting);
export default ForwardRef;
