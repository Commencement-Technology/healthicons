import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgVirusAlt = (
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
        d="M20.4 5.9a1 1 0 1 0 0 2H23v2.536a13.542 13.542 0 0 0-7.884 3.266l-1.852-1.852 1.543-1.543a1 1 0 0 0-1.414-1.414l-4.5 4.5a1 1 0 1 0 1.414 1.414l1.543-1.543 1.852 1.852A13.542 13.542 0 0 0 10.436 23H7.9v-2.6a1 1 0 1 0-2 0v7.2a1 1 0 1 0 2 0V25h2.536a13.542 13.542 0 0 0 3.266 7.884l-1.852 1.852-1.543-1.543a1 1 0 0 0-1.414 1.414l4.5 4.5a1 1 0 0 0 1.414-1.414l-1.543-1.543 1.852-1.852A13.542 13.542 0 0 0 23 37.564V40.1h-2.6a1 1 0 1 0 0 2h7.2a1 1 0 1 0 0-2H25v-2.536a13.542 13.542 0 0 0 7.884-3.266l1.852 1.852-1.543 1.543a1 1 0 0 0 1.414 1.414l4.5-4.5a1 1 0 0 0-1.414-1.414l-1.543 1.543-1.852-1.852A13.542 13.542 0 0 0 37.564 25H40.1v2.6a1 1 0 1 0 2 0v-7.2a1 1 0 1 0-2 0V23h-2.536a13.542 13.542 0 0 0-3.266-7.884l1.852-1.852 1.543 1.543a1 1 0 0 0 1.414-1.414l-4.5-4.5a1 1 0 1 0-1.414 1.414l1.543 1.543-1.852 1.852A13.542 13.542 0 0 0 25 10.436V7.9h2.6a1 1 0 1 0 0-2h-7.2Zm3.6 6.5c6.406 0 11.6 5.193 11.6 11.6 0 6.406-5.194 11.6-11.6 11.6-6.407 0-11.6-5.194-11.6-11.6 0-6.407 5.193-11.6 11.6-11.6Zm6.4 11.15a.35.35 0 1 1 .7 0 .35.35 0 0 1-.7 0Zm.35-2.35a2.35 2.35 0 1 0 0 4.7 2.35 2.35 0 0 0 0-4.7Zm-6.3 9.2a.35.35 0 1 0 0 .7.35.35 0 0 0 0-.7Zm-2.35.35a2.35 2.35 0 1 1 4.7 0 2.35 2.35 0 0 1-4.7 0ZM18.7 20.4a1.7 1.7 0 1 1 3.4 0 1.7 1.7 0 0 1-3.4 0Zm1.7-3.7a3.7 3.7 0 1 0 0 7.4 3.7 3.7 0 0 0 0-7.4Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgVirusAlt);
export default ForwardRef;
