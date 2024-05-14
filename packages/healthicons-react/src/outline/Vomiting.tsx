import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgVomiting = (
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
        d="M26.5 15a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
      />
      <path d="M29.059 19.107c.584 0 1.058-.472 1.058-1.054 0-.581-.474-1.053-1.058-1.053-.585 0-1.059.472-1.059 1.053 0 .582.474 1.054 1.059 1.054ZM34.5 42c4.142 0 7.5-1.12 7.5-2.5 0-.958-1.618-1.79-3.993-2.21.108-.214.169-.455.169-.71 0-.873-.711-1.58-1.588-1.58a1.584 1.584 0 0 0-1.53 2.007c-.184-.005-.37-.007-.558-.007-4.142 0-7.5 1.12-7.5 2.5s3.358 2.5 7.5 2.5ZM33.176 23.58c0 .873-.711 1.58-1.588 1.58A1.584 1.584 0 0 1 30 23.58c0-.873.71-1.58 1.588-1.58.877 0 1.588.707 1.588 1.58ZM36.059 30.107c.584 0 1.058-.472 1.058-1.054 0-.581-.474-1.053-1.058-1.053-.585 0-1.059.472-1.059 1.053 0 .582.474 1.054 1.059 1.054ZM32.117 32.053c0 .582-.474 1.054-1.058 1.054A1.056 1.056 0 0 1 30 32.053c0-.581.474-1.053 1.059-1.053.584 0 1.058.472 1.058 1.053Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.609 14.436a3 3 0 0 0-1.857-3.082.998.998 0 0 0-.201-.074 4.919 4.919 0 0 0-.448-.125 6.147 6.147 0 0 0-1.097-.148c-.886-.04-2.011.082-3.286.584-2.557 1.006-5.372 3.387-8.14 8.18-.58 1.007-.633 2.049-.548 2.828.085.78.328 1.506.585 2.112.513 1.209 1.296 2.418 2.016 3.414a38.947 38.947 0 0 0 2.339 2.905l.449 8.135a3 3 0 1 0 5.99-.33l-.507-9.198a3.002 3.002 0 0 0-.822-1.903l-.006-.006-.003-.003-.04-.042-.166-.18a35.71 35.71 0 0 1-2.372-2.894 21.557 21.557 0 0 1-.302-.427c.477-.6 1-1.186 1.576-1.756l-.05.5a3 3 0 0 0 .77 2.328l4.38 4.788a3 3 0 1 0 4.428-4.05l-3.474-3.797.786-7.759Zm-6.157-.984c1-.393 1.842-.476 2.461-.447.308.015.557.056.74.098a2.936 2.936 0 0 1 .261.073.988.988 0 0 0 .149.06 1 1 0 0 1 .556.999l-.83 8.204a1 1 0 0 0 .256.776l3.776 4.127a1 1 0 0 1-1.476 1.35l-4.38-4.788a1 1 0 0 1-.257-.776l.307-3.025a1 1 0 0 0-1.61-.89 22.147 22.147 0 0 0-4.242 4.331 1 1 0 0 0-.042 1.128c.229.363.483.735.753 1.109a37.934 37.934 0 0 0 2.698 3.267l.045.048.002.003.011.011.002.001v.002a1 1 0 0 1 .275.634l.508 9.198a1 1 0 1 1-1.997.11l-.469-8.484a1 1 0 0 0-.254-.613 39.876 39.876 0 0 1-2.441-3.005c-.688-.95-1.37-2.018-1.796-3.024-.214-.502-.381-1.03-.438-1.547-.056-.517-.007-1.091.292-1.61 2.627-4.55 5.14-6.533 7.14-7.32Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgVomiting);
export default ForwardRef;
