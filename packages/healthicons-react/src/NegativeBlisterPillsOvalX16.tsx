import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegativeBlisterPillsOvalX16 = (
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
        d="M16 24a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM19.179 8.836a1.182 1.182 0 0 0-1.672 0l-1.671 1.671a1.182 1.182 0 1 0 1.671 1.672l1.672-1.672a1.182 1.182 0 0 0 0-1.671Zm2.661 0a1.182 1.182 0 1 1 1.672 1.671l-1.671 1.672a1.182 1.182 0 0 1-1.672-1.671l1.672-1.672Zm6.006 0a1.182 1.182 0 0 0-1.672 0l-1.671 1.671a1.182 1.182 0 1 0 1.671 1.672l1.672-1.672a1.182 1.182 0 0 0 0-1.671Zm2.661 0a1.182 1.182 0 1 1 1.672 1.671l-1.672 1.672a1.182 1.182 0 0 1-1.672-1.671l1.672-1.672Zm-11.328 6a1.182 1.182 0 0 0-1.672 0l-1.671 1.671a1.182 1.182 0 1 0 1.671 1.672l1.672-1.672a1.182 1.182 0 0 0 0-1.671Zm2.661 0a1.182 1.182 0 1 1 1.672 1.671l-1.671 1.672a1.182 1.182 0 0 1-1.672-1.672l1.672-1.671Zm6.006 0a1.182 1.182 0 0 0-1.672 0l-1.671 1.671a1.182 1.182 0 1 0 1.671 1.672l1.672-1.672a1.182 1.182 0 0 0 0-1.671Zm2.661 0a1.182 1.182 0 1 1 1.672 1.671l-1.672 1.672a1.182 1.182 0 0 1-1.671-1.672l1.671-1.671Zm-11.328 15a1.182 1.182 0 0 0-1.672 0l-1.671 1.671a1.182 1.182 0 1 0 1.671 1.672l1.672-1.672a1.182 1.182 0 0 0 0-1.671Zm2.661 0a1.182 1.182 0 1 1 1.672 1.671l-1.671 1.672a1.182 1.182 0 0 1-1.672-1.672l1.672-1.671Zm6.006 0a1.182 1.182 0 0 0-1.672 0l-1.671 1.671a1.182 1.182 0 1 0 1.671 1.672l1.672-1.672a1.182 1.182 0 0 0 0-1.671Zm2.661 0a1.182 1.182 0 1 1 1.672 1.671l-1.672 1.672a1.182 1.182 0 0 1-1.671-1.672l1.671-1.671Zm-11.328 6a1.182 1.182 0 0 0-1.672 0l-1.671 1.671a1.182 1.182 0 1 0 1.671 1.672l1.672-1.672a1.182 1.182 0 0 0 0-1.671Zm2.661 0a1.182 1.182 0 1 1 1.672 1.671l-1.671 1.672a1.182 1.182 0 0 1-1.672-1.672l1.672-1.671Zm6.006 0a1.182 1.182 0 0 0-1.672 0l-1.671 1.671a1.182 1.182 0 1 0 1.671 1.672l1.672-1.672a1.182 1.182 0 0 0 0-1.671Zm2.661 0a1.182 1.182 0 1 1 1.672 1.671l-1.672 1.672a1.182 1.182 0 0 1-1.671-1.672l1.671-1.671Z"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M0 0h48v48H0V0Zm16 4a4 4 0 0 0-4 4v15a1 1 0 1 1 0 2v15a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4V25a1 1 0 1 1 0-2V8a4 4 0 0 0-4-4H16Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgNegativeBlisterPillsOvalX16);
export default ForwardRef;
