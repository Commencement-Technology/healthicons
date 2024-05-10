import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgHivSelfTest = (
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
      <path d="m24.214 9.863-3.423 1.284a.984.984 0 0 0-.503.412h18.404a2 2 0 0 1 0 4H24.835c.067.253.151.592.237 1h3.62a2 2 0 0 1 0 4h-3.168c.003.329-.004.663-.022 1h2.19a2 2 0 0 1 0 4h-3.08a8.304 8.304 0 0 1-.524 1h1.604a2 2 0 0 1 0 4h-9a2.01 2.01 0 0 1-.366-.033c-.364.022-.742.033-1.134.033a8.941 8.941 0 0 1-8.805-7.385l-.226-1.28a10.491 10.491 0 0 1 6.341-11.528L22.755 6.15a1.995 1.995 0 1 1 1.459 3.713ZM38 26c1.68 0 3-1.257 3-2.857C41 21.657 38 18 38 18s-3 3.543-3 5.143c0 1.6 1.32 2.857 3 2.857ZM39.425 41.385a1 1 0 0 1-1.83.036l-2.782-6a1 1 0 0 1 1.814-.841l1.826 3.938 1.626-3.902a1 1 0 0 1 1.846.769l-2.5 6ZM21.22 34a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0v-2h3v2a1 1 0 0 0 2 0v-6a1 1 0 1 0-2 0v2h-3v-2a1 1 0 0 0-1-1ZM28.72 35a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-.5v4h.5a1 1 0 1 1 0 2h-3a1 1 0 0 1 0-2h.5v-4h-.5a1 1 0 0 1-1-1Z" />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgHivSelfTest);
export default ForwardRef;
