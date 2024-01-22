import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPrisoner = (
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
      <g clipPath="url(#prisoner_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm42 40v-3.96c0-4.398-10.924-7.17-18.53-7.035C16.259 29.132 6 31.642 6 36.04V42h36v-2Zm-2-2v2H8v-2h32Zm-2.05-4H9.966c.735-.419 1.649-.82 2.717-1.188 3.235-1.114 7.39-1.747 10.824-1.808 3.59-.063 7.995.566 11.45 1.716 1.177.392 2.187.827 2.995 1.28ZM33 8a1 1 0 0 0-1-1c-.823 0-1.838-.186-3.085-.415l-.374-.069C27.171 6.266 25.601 6 24 6c-1.547 0-3.085.267-4.446.516l-.253.047C18.006 6.8 16.918 7 16 7a1 1 0 0 0-1 1v10a9 9 0 1 0 18 0V8Zm-9 17a7 7 0 0 0 7-7v-2.163c-.759-.071-1.578-.205-2.396-.34l-.403-.066C26.831 15.21 25.412 15 24 15c-1.355 0-2.736.209-4.106.431l-.308.05c-.872.143-1.755.288-2.586.36V18a7 7 0 0 0 7 7Zm4.898-11.481c.786.128 1.484.242 2.102.308v-1.371c-.759-.071-1.578-.205-2.396-.34l-.403-.065c-1.37-.223-2.789-.432-4.201-.432-1.355 0-2.736.209-4.106.431l-.308.05c-.872.143-1.755.288-2.586.36v1.373c.692-.069 1.461-.194 2.316-.334l.257-.042C20.935 13.236 22.463 13 24 13c1.59 0 3.151.235 4.522.457l.376.062Z"
          fill="#000"
        />
      </g>
      <defs>
        <clipPath id="prisoner_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgPrisoner);
export default ForwardRef;
