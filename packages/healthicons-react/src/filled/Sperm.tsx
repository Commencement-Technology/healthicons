import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgSperm = (
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
        d="M29.587 16.464c.305-.305.369-.77.235-1.18-.704-2.149.038-4.903 2.08-6.945 2.687-2.688 6.609-3.123 8.76-.973 2.15 2.15 1.713 6.072-.974 8.76-2.018 2.017-4.73 2.766-6.868 2.104-.406-.126-.862-.057-1.163.244l-.24.241a3.55 3.55 0 0 1-2.719 1.14l-3.224-.12c-2.464-.091-4.308 2.39-3.49 4.699l.273.774c1.29 3.647-1.644 7.562-5.534 7.38l-1.964-.09c-.969-.045-1.748.852-1.566 1.803l.31 1.628c.487 2.549-1.34 5.046-3.934 5.378l-1.46.188a1.467 1.467 0 1 1-.373-2.911l1.57-.202c.865-.11 1.474-.943 1.312-1.792l-.31-1.629c-.545-2.853 1.792-5.544 4.697-5.41l1.965.092c1.768.082 3.102-1.698 2.515-3.355l-.274-.774c-1.517-4.287 1.908-8.896 6.483-8.726l3.224.12a.507.507 0 0 0 .389-.162l.28-.282Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgSperm);
export default ForwardRef;
