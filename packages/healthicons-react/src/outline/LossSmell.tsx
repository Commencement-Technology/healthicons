import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgLossSmell = (
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
        d="M4 14C4 8.477 8.477 4 14 4s10 4.477 10 10-4.477 10-10 10S4 19.523 4 14Zm10-8a8 8 0 0 0-6.32 12.906L18.906 7.68A7.965 7.965 0 0 0 14 6Zm6.32 3.094L9.094 20.32A8 8 0 0 0 20.32 9.094Z"
      />
      <path d="M39.392 4.08a1 1 0 0 1 .528 1.312l-.004.01-.01.023-.039.09-.148.334a66.853 66.853 0 0 1-2.575 5.11c-1.655 2.951-3.977 6.507-6.484 8.375l-.002.002c-2.487 1.845-2.914 3.817-2.537 5.186C28.515 25.95 29.831 27 31.43 27h.802a3.48 3.48 0 0 1 1.521-1.754c1.103-.633 2.613-.753 4.523-.207a1 1 0 1 1-.55 1.922c-1.59-.454-2.497-.256-2.977.02-.088.05-.167.106-.238.167A3.502 3.502 0 0 1 37 30.5h-2a1.5 1.5 0 0 0-1.5-1.5h-2.07c-2.503 0-4.605-1.655-5.237-3.947-.648-2.35.292-5.112 3.273-7.323 2.133-1.59 4.28-4.8 5.933-7.75a64.863 64.863 0 0 0 2.635-5.266l.035-.081.009-.02.002-.004v-.001l1.312-.528ZM30.582 31.187a1 1 0 0 1 .231 1.395c-.586.82-1.336 1.565-2.216 2.22a1 1 0 0 1-1.194-1.604c.735-.547 1.332-1.149 1.784-1.78a1 1 0 0 1 1.395-.231Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.553 37.833h.002a1 1 0 0 0-1.104-1.669l-.002.002-.03.018a3.34 3.34 0 0 1-.155.086 5.58 5.58 0 0 1-.668.29C23 36.777 22.116 37 21 37a1 1 0 1 0 0 2c1.384 0 2.5-.277 3.28-.56.389-.142.694-.285.91-.397a5.205 5.205 0 0 0 .326-.186l.024-.015.009-.006.004-.003ZM25 37l.555.832L25 37Z"
      />
      <path d="M37 40.513a1 1 0 0 0-2-.026 7.441 7.441 0 0 0 .27 2.096 6.148 6.148 0 0 0 .278.782l.004.008.02.045.01.018.002.007.002.002v.001s0 .002.895-.446l-.894.448a1 1 0 0 0 1.791-.89l-.007-.015a4.147 4.147 0 0 1-.175-.5 5.445 5.445 0 0 1-.196-1.53ZM37.449 34.316a1 1 0 0 0-1.898-.632v.003l-.003.006-.005.017a5.545 5.545 0 0 0-.083.273c-.051.18-.119.434-.186.738C35.14 35.32 35 36.149 35 37a1 1 0 1 0 2 0c0-.65.11-1.32.226-1.846a10.864 10.864 0 0 1 .207-.79l.013-.04.003-.008ZM33.894 34.449a1 1 0 1 0-1.788-.898c-.2.4-.37.83-.512 1.195-.059.148-.113.287-.163.407-.19.457-.387.839-.694 1.2a1 1 0 0 0 1.526 1.294c.496-.585.787-1.18 1.014-1.724.084-.202.155-.383.221-.553.125-.32.236-.604.396-.921ZM43.993 25.275c-.395 1.532-1.381 2.924-2.479 3.583l-1.029-1.716c.57-.341 1.283-1.249 1.572-2.367.275-1.066.13-2.174-.764-3.068l1.414-1.414c1.506 1.506 1.695 3.398 1.286 4.982Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.8 40.6a1 1 0 0 0-1.6-1.2l-.002.003-.01.014a8.817 8.817 0 0 1-.224.283c-.155.192-.378.46-.645.756-.546.607-1.23 1.282-1.874 1.712a1 1 0 0 0 1.11 1.664c.855-.57 1.672-1.395 2.25-2.038a20.9 20.9 0 0 0 .918-1.093l.008-.011.047-.061.015-.02.005-.006.002-.003Zm0 0L29 40l.753.564.047.036Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgLossSmell);
export default ForwardRef;
