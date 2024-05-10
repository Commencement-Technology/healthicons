import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgHeartOrgan = (
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
      <g clipPath="url(#heart_organ_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM24.694 41.892c-8.3 0-18.676-16.195-11.413-22.673 3.166-2.823 9.672-.327 12.84 1.161l-1.23 3.42-3.656 1.655-4.006-.944-.459 1.947 3.21.756-1.052 2.662 1.86.736 1.33-3.362 2.033-.92-.017.063a3 3 0 0 0 .137 1.996l.906 2.095.268 3.931 1.995-.136-.215-3.151 3.31-.384-.232-1.987-3.518.408-.679-1.57a1 1 0 0 1-.045-.665l.581-2.089 1.614-4.49a1.16 1.16 0 0 0 .13-.22c.701-1.556 2.24-4.109 4.791-4.109 1.269.754 1.726 1.174 2.414 1.804.156.143.324.297.516.468 8.316 7.418-3.113 23.598-11.413 23.598Zm6.063-27.2c-1.458.675-2.72 1.785-3.857 3.924 0 0-2.524-1.155-4.572-1.755 1.572-3.186 3.4-4.978 6.097-6.228 2.609-1.21 5.72-1.519 9.418-1.391L37.668 14c-3.411-.118-5.365-.025-6.911.691ZM20 6h4v2.644c1.273-.078 2.506-.004 3.614.23-4.7 1.85-6.863 6.605-7.217 7.383l-.022.048c-1.148-.174-2.393-.32-3.57-.308-1.214.103-2.392.282-4.332 1.375-.273.194-.641.51-1.141.992-.036-.026-.075-.05-.126-.082a7.883 7.883 0 0 1-.151-.096c-.277-.18-.681-.425-1.174-.67-1.016-.504-2.262-.933-3.483-.933v-3.879c2.111 0 4.01.717 5.305 1.36.45.222.844.445 1.17.643.288-.616.67-1.189 1.125-1.717L11.8 9.543l3.52-2.287 2.028 3.18c.834-.43 1.73-.787 2.651-1.068V6Z"
        />
      </g>
      <defs>
        <clipPath id="heart_organ_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgHeartOrgan);
export default ForwardRef;
