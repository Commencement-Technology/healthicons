import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledHpv = (
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
        d="M14.832 13.42A13.941 13.941 0 0 1 23 10.035V12a1 1 0 1 0 2 0v-1.965a13.941 13.941 0 0 1 8.167 3.383l-1.389 1.389a1 1 0 1 0 1.414 1.414l1.39-1.389A13.94 13.94 0 0 1 37.964 23H36a1 1 0 1 0 0 2h1.965a13.941 13.941 0 0 1-3.384 8.168l-1.389-1.39a1 1 0 0 0-1.414 1.415l1.39 1.389A13.94 13.94 0 0 1 25 37.965V36a1 1 0 1 0-2 0v1.965a13.94 13.94 0 0 1-8.167-3.383l1.389-1.389a1 1 0 0 0-1.415-1.414l-1.388 1.389A13.94 13.94 0 0 1 10.035 25H12a1 1 0 1 0 0-2h-1.965a13.94 13.94 0 0 1 3.383-8.167l1.39 1.39a1 1 0 0 0 1.414-1.415l-1.39-1.389ZM16 21a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0v-2h2v2a1 1 0 1 0 2 0v-6a1 1 0 1 0-2 0v2h-2v-2Zm5 0a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H23v2a1 1 0 1 1-2 0v-6Zm2 2h1.5a.5.5 0 0 0 0-1H23v1Zm8.923 4.385a1 1 0 0 1-1.846 0l-2.5-6a1 1 0 0 1 1.846-.77L31 24.402l1.577-3.785a1 1 0 0 1 1.846.77l-2.5 6ZM21 5a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-1v2a1 1 0 1 1-2 0V6h-1a1 1 0 0 1-1-1Zm3 34a1 1 0 0 1 1 1v2h1a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2h1v-2a1 1 0 0 1 1-1Zm-11.314.557a1 1 0 0 1-1.414 0L8.444 36.73a1 1 0 1 1 1.414-1.414l.707.707 1.414-1.414a1 1 0 1 1 1.414 1.414l-1.414 1.414.707.707a1 1 0 0 1 0 1.414Zm21.92-26.163a1 1 0 0 1 0-1.414l1.415-1.414-.707-.707a1 1 0 0 1 1.414-1.414l2.828 2.828a1 1 0 1 1-1.414 1.414l-.707-.707-1.414 1.414a1 1 0 0 1-1.415 0ZM5 27a1 1 0 0 1-1-1v-4a1 1 0 1 1 2 0v1h2a1 1 0 1 1 0 2H6v1a1 1 0 0 1-1 1Zm34-3a1 1 0 0 1 1-1h2v-1a1 1 0 1 1 2 0v4a1 1 0 1 1-2 0v-1h-2a1 1 0 0 1-1-1ZM8.444 12.687a1 1 0 0 1 0-1.414l2.828-2.829a1 1 0 1 1 1.414 1.415l-.707.707 1.414 1.414a1 1 0 0 1-1.414 1.414l-1.414-1.414-.707.707a1 1 0 0 1-1.414 0Zm26.162 21.92a1 1 0 0 1 1.415 0l1.414 1.415.707-.707a1 1 0 0 1 1.414 1.414l-2.828 2.828a1 1 0 1 1-1.414-1.414l.707-.707-1.415-1.414a1 1 0 0 1 0-1.415Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgFilledHpv);
export default ForwardRef;
