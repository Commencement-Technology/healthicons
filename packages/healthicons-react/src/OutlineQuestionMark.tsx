import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineQuestionMark = (
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
        d="M24.119 9.001 24.032 9h-.064l-.087.001C18.977 9.081 15 13.065 15 18a3 3 0 0 0 6 0c0-1.632 1.326-2.983 3-3 1.674.017 3 1.368 3 3 0 1.642-1.343 3-3.032 3a3 3 0 0 0-3 3v4a3 3 0 0 0 6 0v-1.509C30.474 25.261 33 21.933 33 18c0-4.935-3.977-8.918-8.881-8.999ZM24.032 11h.048c3.828.06 6.92 3.167 6.92 7 0 3.266-2.245 6.006-5.28 6.78a1 1 0 0 0-.752.97V28a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1C26.753 23 29 20.756 29 18c0-2.742-2.226-4.979-4.992-5h-.016C21.226 13.021 19 15.258 19 18a1 1 0 1 1-2 0c0-3.833 3.093-6.94 6.92-7h.112ZM24 35a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-3 1a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineQuestionMark);
export default ForwardRef;
