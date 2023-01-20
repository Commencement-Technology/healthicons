import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgAnimalTick = (
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
        d="M31.5 28.743C31.5 34.708 27.728 38 24 38s-7.5-3.292-7.5-9.257 3.772-13.114 7.5-13.114 7.5 7.15 7.5 13.114Z"
        fill="#333"
      />
      <path
        d="M26.25 16.4c0-1.704-1.008-3.086-2.25-3.086-1.243 0-2.25 1.382-2.25 3.086s1.007 3.086 2.25 3.086c1.242 0 2.25-1.382 2.25-3.086Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.428 10.283a1 1 0 0 1 1.414.02l3 3.086a1 1 0 0 1 .074 1.309c-.744.962-1.463 1.674-2.374 2.175-.903.496-1.914.74-3.161.904a1 1 0 1 1-.262-1.983c1.148-.151 1.874-.352 2.46-.674.406-.223.784-.527 1.201-.983l-2.372-2.44a1 1 0 0 1 .02-1.414ZM34.144 14.71a1 1 0 0 1 .525 1.313l-1.35 3.145a1 1 0 0 1-.564.54l-3.9 1.484a1 1 0 1 1-.71-1.87l3.503-1.332 1.183-2.756a1 1 0 0 1 1.313-.524ZM36.555 18.654a1 1 0 0 1 .276 1.387l-2.1 3.145a1 1 0 0 1-.476.38l-3.9 1.483a1 1 0 1 1-.71-1.87l3.6-1.37 1.923-2.879a1 1 0 0 1 1.387-.276ZM29.812 26.081a1 1 0 0 1 1.285-.59l-.347.938.347-.938h.002l.004.002.012.005.039.014.135.054a11.911 11.911 0 0 1 1.873.964c.513.327 1.072.75 1.513 1.267.439.515.825 1.2.825 2.026 0 1.204-.438 2.53-.823 3.48a18.2 18.2 0 0 1-.781 1.671l-.015.028-.005.008-.001.003s-.001.001-.875-.484l.874.484a1 1 0 0 1-1.749-.97l.003-.004.01-.018.042-.079a16.203 16.203 0 0 0 .643-1.39c.365-.9.677-1.928.677-2.73 0-.177-.083-.417-.347-.727-.262-.307-.64-.607-1.066-.878a9.921 9.921 0 0 0-1.657-.84l-.024-.01h-.003a1 1 0 0 1-.59-1.286ZM20.572 10.283a1 1 0 0 0-1.414.02l-3 3.086a1 1 0 0 0-.074 1.309c.744.962 1.463 1.674 2.374 2.175.903.496 1.914.74 3.161.904a1 1 0 1 0 .262-1.983c-1.149-.151-1.875-.352-2.46-.674-.406-.223-.784-.527-1.202-.983l2.373-2.44a1 1 0 0 0-.02-1.414ZM13.855 14.71a1 1 0 0 0-.524 1.313l1.35 3.145a1 1 0 0 0 .563.54l3.9 1.484a1 1 0 1 0 .711-1.87l-3.503-1.332-1.183-2.756a1 1 0 0 0-1.314-.524ZM11.445 18.654a1 1 0 0 0-.277 1.387l2.1 3.145a1 1 0 0 0 .476.38l3.9 1.483a1 1 0 1 0 .711-1.87l-3.6-1.37-1.924-2.879a1 1 0 0 0-1.386-.276ZM18.188 26.081a1 1 0 0 0-1.285-.59l.347.938-.347-.938H16.9l-.004.002-.011.005-.04.014-.134.054a11.911 11.911 0 0 0-1.873.964c-.513.327-1.072.75-1.513 1.267-.44.515-.825 1.2-.825 2.026 0 1.204.438 2.53.823 3.48a18.2 18.2 0 0 0 .78 1.671l.016.028.004.008.002.003.875-.484-.875.484a1 1 0 0 0 1.75-.97l-.003-.004-.01-.018-.042-.079a16.203 16.203 0 0 1-.643-1.39c-.365-.9-.677-1.928-.677-2.73 0-.177.083-.417.347-.727.262-.307.64-.607 1.066-.878a9.921 9.921 0 0 1 1.657-.84l.023-.01h.004a1 1 0 0 0 .59-1.286Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgAnimalTick);
export default ForwardRef;
