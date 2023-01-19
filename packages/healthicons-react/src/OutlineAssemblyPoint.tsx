import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineAssemblyPoint = (
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
        d="M6.293 6.293a1 1 0 0 1 1.414 0L12 10.586V8a1 1 0 1 1 2 0v6H8a1 1 0 1 1 0-2h2.586L6.293 7.707a1 1 0 0 1 0-1.414Zm35.414 35.414a1 1 0 0 1-1.414 0L36 37.414V40a1 1 0 1 1-2 0v-6h6a1 1 0 1 1 0 2h-2.586l4.293 4.293a1 1 0 0 1 0 1.414Zm-35.414 0a1 1 0 0 1 0-1.414L10.586 36H8a1 1 0 1 1 0-2h6v6a1 1 0 1 1-2 0v-2.586l-4.293 4.293a1 1 0 0 1-1.414 0ZM41.707 6.293a1 1 0 0 1 0 1.414L37.414 12H40a1 1 0 1 1 0 2h-6V8a1 1 0 1 1 2 0v2.586l4.293-4.293a1 1 0 0 1 1.414 0ZM31.6 21a1.499 1.499 0 1 0 0-3 1.499 1.499 0 1 0 0 3Zm0 2c1.934 0 3.5-1.566 3.5-3.5S33.534 16 31.6 16a3.499 3.499 0 0 0-3.5 3.5c0 1.934 1.566 3.5 3.5 3.5Zm-15-2a1.499 1.499 0 1 0 0-3 1.499 1.499 0 1 0 0 3Zm0 2c1.934 0 3.5-1.566 3.5-3.5S18.534 16 16.6 16a3.499 3.499 0 0 0-3.5 3.5c0 1.934 1.566 3.5 3.5 3.5Zm7.4-4a.5.5 0 1 0 .001-.999A.5.5 0 0 0 24 19Zm0 2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 1 0 0 5Zm4.165 6.745c-1.059.545-1.165.994-1.165 1.113V29h8v-.142c0-.119-.106-.568-1.165-1.113C32.861 27.243 31.675 27 31 27c-.674 0-1.861.243-2.835.745ZM31 25c-2.003 0-6 1.293-6 3.858V31h12v-2.142C37 26.292 33.002 25 31 25Zm-16.835 2.745c-1.059.545-1.165.994-1.165 1.113V29h8v-.142c0-.119-.106-.568-1.165-1.113C18.861 27.243 17.675 27 17 27c-.674 0-1.861.243-2.835.745ZM17 25c-2.002 0-6 1.293-6 3.858V31h12v-2.142C23 26.292 19.003 25 17 25Zm11.038-1.543c-.227.084-.45.172-.67.266-.995.425-2 1-2.781 1.769a5.51 5.51 0 0 0-.587.677 5.509 5.509 0 0 0-.587-.677c-.78-.769-1.786-1.344-2.781-1.77-.22-.093-.443-.181-.67-.265 1.294-.67 2.958-1.007 4.038-1.007s2.744.337 4.038 1.007Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineAssemblyPoint);
export default ForwardRef;
