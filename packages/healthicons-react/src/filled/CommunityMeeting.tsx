import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgCommunityMeeting = (
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
        d="M42 17a6 6 0 0 1-5.57 5.985l-3.051 3.05c.855 1.447 1.24 3.367 1.429 5.502.192 2.169.192 4.705.192 7.428V40h-2v-1c0-2.764 0-5.215-.184-7.286-.161-1.814-.455-3.227-.943-4.253-1.197-.16-2.29-.762-3.226-1.504-1.104-.874-2.086-2.015-2.894-3.115a29.404 29.404 0 0 1-2.105-3.342c-1.344.93-3.155 1.5-5.148 1.5-4.142 0-7.5-2.462-7.5-5.5 0-2.793 2.838-5.1 6.515-5.453C18.797 7.692 22.335 6 26.5 6c4.708 0 8.616 2.163 9.369 5.001L36 11a6 6 0 0 1 6 6Zm-11.973.573c-1.09.275-2.28.427-3.527.427-.434 0-.862-.018-1.28-.054l-.076.108c.108.208.25.477.424.787a27.419 27.419 0 0 0 1.908 2.967v-.146c1.105 0 2.265-.597 3.227-1.308.074-.054.146-.108.215-.163a5.964 5.964 0 0 1-.891-2.618Zm2.226 4.113a5.994 5.994 0 0 0 1.694.953l-2.62 2.62c-.465-.188-.946-.48-1.439-.87a10.58 10.58 0 0 1-1.003-.914c1.183-.306 2.23-.939 3.006-1.511.126-.093.247-.186.362-.278Z"
        fill="#333"
      />
      <path
        d="M15.504 28.002a2.5 2.5 0 1 0-.004-5 2.5 2.5 0 0 0 .004 5ZM8.504 32.002a2.5 2.5 0 1 0-.004-5 2.5 2.5 0 0 0 .004 5ZM28.002 29.5a2.5 2.5 0 1 1-5 .004 2.5 2.5 0 0 1 5-.004ZM15 29a2 2 0 0 1 2 2v2h2a2 2 0 1 1 0 4h-4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2ZM10 35a2 2 0 1 0-4 0v5a2 2 0 0 0 2 2h4a2 2 0 1 0 0-4h-2v-3ZM26 33a2 2 0 0 0-2 2v3h-2a2 2 0 1 0 0 4h4a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgCommunityMeeting);
export default ForwardRef;
