import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgGuideDog = (
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
        d="M38.707 8.293a1 1 0 0 1 0 1.414L28.414 20h-2.828l-3.5 3.5h-9.264a18.252 18.252 0 0 1-.71-3.553c-.332.017-.701.025-1.112.025-1.164 0-2.96-.078-3.5-.472-1-1.325-1.5-3.972-1.5-3.972s2.787-.951 4-1.381c0-3.224 4.168-5.064 6.286-2.348.526-.002 1.126.168 1.688.512 1.016.624 1.4 3.436 1.18 4.709 1.605 1.89 3.658 2.666 6.346 2.952l.103.011 11.69-11.69a1 1 0 0 1 1.414 0ZM28.297 20.117 23.5 24.915v6.715c2.732-.365 5.067-.932 8-2.629 2.138 3.919 3.929 5.045 4.848 5.624.37.233.6.377.652.579.12.46.246.797.344 1.06.124.329.204.543.174.737H37a1 1 0 1 0 0 2h2a1 1 0 0 0 1-1v-4.523c0-1.977-3-7.249-3-7.249L41.5 32c.405.253.952-.233.5-1-.189-.504-.395-1.164-.629-1.912-1.114-3.567-2.847-9.116-6.252-9.116-.493 0-1.202.026-2.036.055-1.387.05-3.121.112-4.786.09ZM21.43 31.871l.07-.007V25.5h-7.914c.807 1.753 1.773 3.022 2.522 4.006.139.183.27.355.392.52.479.646 1.875 4.805-.205 6.974H16a1 1 0 1 0 0 2h3a1 1 0 0 0 .965-.737h.002c.005 0 .01-.001.014-.003.042-.022.039-.136.03-.392-.005-.148-.011-.343-.011-.594v-5.249l.933-.1.007-.001a369.28 369.28 0 0 0 .49-.053Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgGuideDog);
export default ForwardRef;
