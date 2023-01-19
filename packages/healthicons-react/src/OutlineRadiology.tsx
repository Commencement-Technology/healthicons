import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineRadiology = (
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
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      fill="none"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <path
        fill="#333"
        fillRule="evenodd"
        d="M39 8H9a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1ZM9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M14 21a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h5c0-.593.264-1.127.56-1.54a5.536 5.536 0 0 1 1.167-1.162A6.9 6.9 0 0 1 23 34.164v-3.018h-1.8c-1.19 0-2.335.398-3.212.826a9.941 9.941 0 0 0-1.299.763l-.065.047-.013.01L16 32a66.334 66.334 0 0 1-.61-.792l.001-.001.003-.003.009-.006.028-.021a9.254 9.254 0 0 1 .445-.306c.295-.191.718-.444 1.236-.697 1.023-.499 2.479-1.027 4.088-1.027H23V27h-1.1c-.9 0-1.758.216-2.406.444a8.423 8.423 0 0 0-1.002.427l-.007.003L18 27l-.485-.874.001-.001.003-.002.008-.004.022-.012a5.33 5.33 0 0 1 .343-.17c.227-.105.547-.243.94-.38C19.607 25.283 20.7 25 21.9 25H23v-2h2v2h.8c1.051 0 2.215.285 3.065.543a19.074 19.074 0 0 1 1.484.52l.025.01.007.002.003.002L30 27l-.384.923-.004-.001-.016-.007a7.95 7.95 0 0 0-.346-.133 17.054 17.054 0 0 0-.965-.325c-.8-.242-1.736-.457-2.485-.457H25v2.146h1.4c1.41 0 2.963.532 4.088 1.006a20.84 20.84 0 0 1 1.968.957l.031.018.01.005.002.002h.002L32 32l-.501.865-.005-.002-.023-.013a15.248 15.248 0 0 0-.467-.25c-.32-.166-.771-.386-1.292-.605-1.075-.453-2.321-.849-3.312-.849H25v2.986c.825.21 1.621.643 2.25 1.123a5.75 5.75 0 0 1 1.18 1.189c.297.416.57.959.57 1.556h5a1 1 0 0 0 1-1V22a1 1 0 0 0-1-1H14Zm13 17a.39.39 0 0 0-.03-.101 1.454 1.454 0 0 0-.168-.293 3.75 3.75 0 0 0-.766-.761c-.677-.517-1.449-.832-2.002-.845-.644.056-1.446.4-2.104.896a3.564 3.564 0 0 0-.744.73c-.08.112-.13.205-.158.275A.344.344 0 0 0 21 38h6Zm1.5-23.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineRadiology);
export default ForwardRef;
