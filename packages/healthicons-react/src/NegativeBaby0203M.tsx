import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegativeBaby0203M = (
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
      <g clipPath="url(#negative_baby_0203m_svg__a)">
        <path
          fill="#333"
          fillRule="evenodd"
          d="M48 .75H0v48h48v-48ZM34.48 22.179c-1.984.491-3.778.86-5.48 1.107v2.464H19v-2.49c-1.698-.249-3.484-.61-5.459-1.076a2 2 0 1 1 .918-3.893c3.835.903 6.717 1.35 9.548 1.361 2.826.01 5.7-.413 9.513-1.356a2 2 0 1 1 .96 3.883ZM19 29.69v-1.94h10v1.94c0 .634-.57 2.26-2.32 3.04-.2.089-.426.2-.628.301l-.12.06c-.248.122-.489.238-.732.341-.508.215-.903.318-1.2.318-.297 0-.692-.103-1.2-.318a13.992 13.992 0 0 1-.733-.342l-.119-.059c-.202-.1-.427-.212-.627-.301C19.57 31.95 19 30.324 19 29.69Zm-1.02 2.76c.479.807 1.273 1.62 2.455 2.156a3.512 3.512 0 0 0-.508.602c-.5.745-.93 1.665-.93 2.532 0 .792.325 1.474.57 1.99l.019.038c.272.57.444.954.444 1.36 0 .913-.785 1.622-1.711 1.622-.864 0-1.547-.575-2.056-1.688-.497-1.087-.688-2.429-.688-3.322 0-2.242.854-3.94 2.406-5.29Zm12.04 0c-.479.807-1.273 1.619-2.455 2.156.178.168.348.363.508.602.5.745.93 1.665.93 2.532 0 .792-.325 1.474-.57 1.99l-.019.038c-.272.57-.443.954-.443 1.36 0 .913.784 1.622 1.71 1.622.864 0 1.547-.575 2.056-1.688.497-1.087.688-2.429.688-3.322 0-2.242-.854-3.94-2.406-5.29Zm-.52-20.2a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="negative_baby_0203m_svg__a">
          <path fill="#fff" d="M0 .75h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgNegativeBaby0203M);
export default ForwardRef;
