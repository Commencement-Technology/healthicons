import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgDatabase = (
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
      <path d="M30 36.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM33.5 37a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 6c7.72 0 14.08 1.75 14.908 4H39v28c0 2.21-6.716 4-15 4-8.284 0-15-1.79-15-4V10h.092C9.92 7.75 16.279 6 24 6Zm0 27c-5.557 0-10.408-.907-13-2.253v6.946c.055.044.134.102.245.172.517.326 1.398.693 2.664 1.031C16.412 39.563 19.98 40 24 40s7.588-.437 10.091-1.104c1.266-.338 2.147-.705 2.664-1.03.11-.071.19-.129.245-.173v-6.946C34.408 32.093 29.557 33 24 33Zm0-9c5.557 0 10.408-.907 13-2.253V28.5h-.177a3.101 3.101 0 0 1-.159.12c-.51.362-1.379.77-2.632 1.146C31.55 30.511 28.004 31 24 31c-4.004 0-7.55-.49-10.032-1.234-1.253-.376-2.122-.784-2.632-1.146a3.101 3.101 0 0 1-.16-.12H11v-6.753C13.592 23.093 18.443 24 24 24Zm0-9c5.557 0 10.408-.906 13-2.254V19.5h-.177a3.101 3.101 0 0 1-.159.12c-.51.362-1.379.77-2.632 1.146C31.55 21.511 28.004 22 24 22c-4.004 0-7.55-.49-10.032-1.234-1.253-.376-2.122-.784-2.632-1.146a3.101 3.101 0 0 1-.16-.12H11v-6.754C13.592 14.095 18.443 15 24 15Zm12.75-4.557.073.057a3.032 3.032 0 0 1-.159.12c-.51.362-1.379.77-2.632 1.146C31.55 12.511 28.004 13 24 13c-4.004 0-7.55-.49-10.032-1.234-1.253-.376-2.122-.784-2.632-1.146a3.032 3.032 0 0 1-.159-.12 2.521 2.521 0 0 1 .159-.12 4.078 4.078 0 0 1 .348-.222c.149-.085.315-.172.498-.258.367-.174.809-.35 1.327-.522.3-.1.626-.197.974-.291.766-.207 1.62-.391 2.543-.546C19.06 8.201 21.438 8 24 8c3.727 0 7.065.424 9.517 1.087.178.048.35.097.515.147.98.294 1.743.613 2.284.924a5.122 5.122 0 0 1 .348.222l.086.063Zm.36 27.144s-.003.007-.016.021a.13.13 0 0 1 .017-.021Zm-26.22 0s.007.007.016.021c-.013-.014-.017-.021-.017-.021Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgDatabase);
export default ForwardRef;
