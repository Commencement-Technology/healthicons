import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledBasicMotorcycle = (
  passedProps: SvgProps,
  ref: Ref<SVGSVGElement>
) => {
  const context = React.useContext(HealthIconsContext);
  const props = {
    ...context,
    ...passedProps,
  };
  return (
    <Svg
      width="1.5em"
      height="1.5em"
      fill="none"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M37.5 35a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Zm0 3a6.5 6.5 0 1 1 0-13 6.5 6.5 0 0 1 0 13Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M29.416 10.598A1 1 0 0 0 28.5 10H23v2h4.847l8.737 19.902a1 1 0 0 0 1.832-.804l-9-20.5ZM10.5 35a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Zm0 3a6.5 6.5 0 1 1 0-13 6.5 6.5 0 0 1 0 13Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M33.63 22.724a1 1 0 0 0-1.406.145l-6.2 7.631H10.5a1 1 0 1 0 0 2h16a1 1 0 0 0 .776-.37l6.5-8a1 1 0 0 0-.145-1.406Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        d="M28 25H17.5a1.5 1.5 0 0 0 0 3H25a3 3 0 0 0 3-3Zm-.058-8h-4.257c-3.142 0-5.447 2.952-4.685 6h10.382a1 1 0 0 0 .894-1.447l-2.25-4.501a.094.094 0 0 0-.084-.052ZM6 19a1 1 0 0 1 1-1h5.097A5 5 0 0 1 16 19.877l1.2 1.498A1 1 0 0 1 16.418 23H7a1 1 0 0 1-1-1v-3Zm28-2.5 6.067-2.5.933 6-6.067-1L34 16.5Z"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="m22.626 31.986-2.5-4.5 1.748-.972 2.5 4.5-1.748.972Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgFilledBasicMotorcycle);
export default ForwardRef;
