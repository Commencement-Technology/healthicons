import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgSyringe = (
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.818 13.364A1.157 1.157 0 0 0 8.455 15l.818-.818 4.09 4.09-3.272 3.273a1.157 1.157 0 1 0 1.636 1.636l1.636-1.636 13.91 13.91a5.787 5.787 0 0 0 6.204 1.296l1.16 1.159a2.313 2.313 0 0 0 2.235.599l2.673 2.673a1.157 1.157 0 1 0 1.637-1.636l-2.674-2.674a2.313 2.313 0 0 0-.6-2.235l-1.158-1.159a5.787 5.787 0 0 0-1.295-6.205l-13.91-13.91 1.637-1.636a1.157 1.157 0 1 0-1.637-1.637l-3.272 3.273-4.09-4.09.817-.818a1.157 1.157 0 1 0-1.636-1.637l-6.546 6.546Zm10.04 1.413-4.09-4.09-2.08 2.08 4.09 4.09 2.08-2.08Zm3.273 0-5.354 5.354 4.406 4.406 5.354-5.354-4.406-4.405Zm.689 11.397 2.454 2.454 1.859-1.859a1.157 1.157 0 1 1 1.636 1.637l-1.858 1.859 1.636 1.636 1.858-1.86a1.157 1.157 0 1 1 1.637 1.637l-1.859 1.859.504.504a3.786 3.786 0 0 0 4.062.847l2.139-2.139a3.786 3.786 0 0 0-.848-4.062l-7.867-7.867-5.353 5.354Zm15.702 9.909a.307.307 0 0 0-.027-.032l-.824-.824a5.854 5.854 0 0 1-.445.444l.824.825c.01.01.021.019.032.027a1.157 1.157 0 0 1 .44-.44Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgSyringe);
export default ForwardRef;
