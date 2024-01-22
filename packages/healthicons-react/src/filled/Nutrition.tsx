import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgNutrition = (
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
        d="M7.065 17.387c-1.122-1.026-1.888-2.692-2.038-5.383a.954.954 0 0 1 .977-.996c1.675.03 2.958.144 3.937.433.42-1.089 1.258-2.116 2.512-3.056a.913.913 0 0 1 1.093 0c1.265.947 2.106 1.984 2.523 3.083 1.008-.34 2.301-.438 3.93-.462a.954.954 0 0 1 .974.998c-.15 2.691-.916 4.357-2.038 5.383.548.408.865 1.093.749 1.833-.277 1.76-.756 4.47-1.508 7.78H12v2h5.704c-.75 3.075-1.72 6.555-2.957 10.209a1.827 1.827 0 0 1-3.494 0c-.486-1.434-.93-2.842-1.336-4.21H12v-2H9.34a128.31 128.31 0 0 1-2.16-9H11v-2H6.793c-.2-1.084-.357-2.02-.477-2.779-.117-.74.2-1.425.749-1.832Zm7.133-5.21.683 1.8 1.825-.614c.503-.169 1.184-.27 2.154-.32-.297 1.932-1.013 2.748-1.665 3.17-.931.602-2.289.785-4.165.787h-.06c-1.877-.002-3.234-.185-4.166-.788-.651-.421-1.366-1.236-1.663-3.164 1 .055 1.713.157 2.235.311l1.768.522.663-1.72c.191-.495.56-1.05 1.193-1.634.64.59 1.01 1.151 1.198 1.65ZM33.707 13.707c-1.973 1.973-2.165 4.727-1.056 7.32C37.505 17.85 43 21.78 43 28c0 5.523-4.925 10-11 10s-11-4.477-11-10c0-5.792 4.764-9.6 9.34-7.53-.781-2.8-.377-5.848 1.953-8.177l1.414 1.414Zm6.263 16.535a1 1 0 1 0-1.94-.485 4.426 4.426 0 0 1-3.273 3.273 1 1 0 1 0 .485 1.94 6.426 6.426 0 0 0 4.728-4.728Z"
        fill="#000"
      />
      <path d="M34 18c3 0 5-2 5-5-3 0-5 2-5 5Z" fill="#000" />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgNutrition);
export default ForwardRef;
