import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineDrone = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M13 40a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        d="M14.75 35a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0Z"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M35 40a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        d="M36.75 35a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0Z"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M35 18a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        d="M36.75 13a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0Z"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M13 18a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        d="M14.75 13a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0Z"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M18.72 23.776 13 35l11-5.837L35 35l-5.72-11.224L34.56 13 24 18.388 13.44 13l5.28 10.776Zm-.843-6.267 2.639 5.386a2 2 0 0 1-.014 1.789l-2.844 5.58 5.405-2.867a2 2 0 0 1 1.874 0l5.405 2.867-2.844-5.58a2 2 0 0 1-.014-1.789l2.64-5.386-5.215 2.66a2 2 0 0 1-1.818 0l-5.215-2.66Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineDrone);
export default ForwardRef;
