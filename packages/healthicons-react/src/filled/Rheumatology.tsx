import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgRheumatology = (
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
        d="M27 6h-6V15.682c0 .842-.342 1.649-.948 2.234l-.421.406a2.53 2.53 0 0 0 2.89 4.084l.205-.102a2.85 2.85 0 0 1 2.548 0l.206.102a2.53 2.53 0 0 0 2.89-4.084l-.422-.406A3.106 3.106 0 0 1 27 15.68V6Zm-8 0H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h10v-4.92c-5.263-2.012-9-7.11-9-13.08s3.737-11.068 9-13.08V6Zm2 36h6v-9.682c0-.842.342-1.649.948-2.234l.421-.406a2.53 2.53 0 0 0-2.89-4.085l-.205.103a2.85 2.85 0 0 1-2.548 0l-.206-.103a2.53 2.53 0 0 0-2.89 4.085l.422.406c.606.585.948 1.392.948 2.234V42Zm8 0h10a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H29v4.92c5.263 2.012 9 7.11 9 13.08s-3.737 11.068-9 13.08V42Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgRheumatology);
export default ForwardRef;
