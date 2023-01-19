import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledRdtResultInvalid = (
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
      <path fill="#333" d="M20 12v13a2 2 0 1 1-4 0V12a2 2 0 1 1 4 0Z" />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M12 4a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H12Zm6 36a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-1.5-7.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM14 12a4 4 0 0 1 8 0v13a4 4 0 0 1-8 0V12Zm17.593-3.974a1.207 1.207 0 0 0-.742.079 1.384 1.384 0 0 0-.609.537A1.62 1.62 0 0 0 30 9.5c0 .31.087.61.242.858.156.248.37.432.609.537.237.105.494.131.742.079.248-.053.485-.185.677-.39a1 1 0 0 1 1.46 1.368 3.3 3.3 0 0 1-1.722.978 3.208 3.208 0 0 1-1.966-.206 3.383 3.383 0 0 1-1.495-1.304A3.62 3.62 0 0 1 28 9.5c0-.678.188-1.346.547-1.92a3.383 3.383 0 0 1 1.495-1.304 3.207 3.207 0 0 1 1.966-.206c.661.14 1.259.485 1.722.978a1 1 0 1 1-1.46 1.368 1.302 1.302 0 0 0-.677-.39ZM28.5 15a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-1v4a1 1 0 1 1-2 0v-4h-1a1 1 0 0 1-1-1Zm2 12a.5.5 0 0 0 0 1h1a2.5 2.5 0 0 1 0 5h-1a2.5 2.5 0 0 1-2.358-1.667 1 1 0 1 1 1.886-.666.5.5 0 0 0 .472.333h1a.5.5 0 0 0 0-1h-1a2.5 2.5 0 0 1 0-5h1a2.5 2.5 0 0 1 2.358 1.667 1 1 0 1 1-1.886.666A.5.5 0 0 0 31.5 27h-1Zm0 9a.5.5 0 0 0 0 1h1a2.5 2.5 0 0 1 0 5h-1a2.5 2.5 0 0 1-2.358-1.667 1 1 0 1 1 1.886-.666.5.5 0 0 0 .472.333h1a.5.5 0 0 0 0-1h-1a2.5 2.5 0 0 1 0-5h1a2.5 2.5 0 0 1 2.358 1.667 1 1 0 1 1-1.886.666A.5.5 0 0 0 31.5 36h-1Zm6.873-10.428A1 1 0 0 1 38 26.5v5a1 1 0 1 1-2 0v-2.958a1 1 0 0 1-.721-1.692l1-1.043a1 1 0 0 1 1.094-.235Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgFilledRdtResultInvalid);
export default ForwardRef;
