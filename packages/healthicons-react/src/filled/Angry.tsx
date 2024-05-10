import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgAngry = (
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
      <path d="M31.11 32.876C29.642 31.75 26.999 31 23.982 31c-3.245 0-6.058.87-7.44 2.139-.597.547-1.166 2.206 1.008 1.797 6.328-1.26 6.943-1.214 13.149 0 1.586.34 1.447-.884 1.012-1.51-.139-.199-.335-.348-.53-.495l-.071-.055ZM20 24c0 2.21-1.12 4-2.5 4S15 26.21 15 24c0-1.614.598-3.005 1.458-3.637l-.019-.006c-1.64-.541-3.28-.891-4.334-1.046l.29-1.979c1.16.17 2.915.546 4.67 1.125 1.733.572 3.583 1.38 4.838 2.465l-1.307 1.513a7.074 7.074 0 0 0-1.05-.735c.286.65.454 1.444.454 2.3ZM33 24c0 2.21-1.12 4-2.5 4S28 26.21 28 24c0-1.025.24-1.96.637-2.668-.68.338-1.275.708-1.733 1.103l-1.307-1.513c1.255-1.085 3.105-1.893 4.837-2.465 1.756-.579 3.51-.954 4.67-1.125l.29 1.979a27.47 27.47 0 0 0-4.015.943C32.326 20.824 33 22.286 33 24Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 42c9.941 0 18-8.059 18-18S33.941 6 24 6 6 14.059 6 24s8.059 18 18 18Zm0-2c8.837 0 16-7.163 16-16S32.837 8 24 8 8 15.163 8 24s7.163 16 16 16Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgAngry);
export default ForwardRef;
