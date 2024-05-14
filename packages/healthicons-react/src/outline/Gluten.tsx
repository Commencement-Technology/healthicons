import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgGluten = (
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
        d="m23 8.63-.39.455a7.768 7.768 0 0 0-1.87 4.894 7.22 7.22 0 0 0-.248-.1L19 13.311V6h-2v9.58c0 .886.167 1.744.476 2.538l-.059-.027A1 1 0 0 0 16 19v1.939a6.99 6.99 0 0 0 .724 3.1A1.001 1.001 0 0 0 16 25v1.939a6.99 6.99 0 0 0 .724 3.1A1.001 1.001 0 0 0 16 31v1.938a7 7 0 0 0 4.079 6.362L23 40.64V44h2v-3.359l2.921-1.341A7 7 0 0 0 32 32.939V31a1 1 0 0 0-.724-.961 6.99 6.99 0 0 0 .724-3.1V25a1 1 0 0 0-.724-.961 6.99 6.99 0 0 0 .724-3.1V19a1 1 0 0 0-1.417-.909l-.06.027c.26-.667.42-1.38.464-2.118H31V6h-2v7.31l-1.492.57a7.168 7.168 0 0 0-.25.1 7.768 7.768 0 0 0-1.868-4.895L25 8.63V4h-2v4.63Zm2.12 6.771A5.768 5.768 0 0 0 24 10.542a5.768 5.768 0 0 0-1.121 4.858c.434.422.81.898 1.121 1.415.31-.517.687-.992 1.12-1.414Zm-5.34.347A5 5 0 0 1 23 20.421v.128l-.78-.297A5 5 0 0 1 19 15.579v-.128l.78.297Zm8.44 0 .78-.297v.128a5 5 0 0 1-3.22 4.673l-.78.297v-.128a5 5 0 0 1 3.22-4.673ZM23 26.44v-.379a5 5 0 0 0-2.913-4.543L18 20.56v.379a5 5 0 0 0 2.913 4.543L23 26.44Zm2 0 2.087-.958A5 5 0 0 0 30 20.94v-.38l-2.954 1.357A3.512 3.512 0 0 0 25 25.107v1.333Zm-4.913 1.078A5 5 0 0 1 23 32.062v.378l-2.087-.958A5 5 0 0 1 18 26.94v-.38l2.087.959Zm7 3.964L25 32.44v-1.333c0-1.372.8-2.619 2.046-3.191L30 26.56v.379a5 5 0 0 1-2.913 4.543ZM23 38.44v-.378a5 5 0 0 0-2.913-4.544L18 32.56v.378a5 5 0 0 0 2.913 4.544L23 38.44Zm2 0 2.087-.958A5 5 0 0 0 30 32.938v-.378l-2.087.958A5 5 0 0 0 25 38.062v.378Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgGluten);
export default ForwardRef;