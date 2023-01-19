import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineBoy1015Y = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M24 6a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-3 5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm14 14.023c0-2.694-1.653-5.095-4.03-5.809A1.516 1.516 0 0 0 29.485 18h-10.97c-.734 0-1.346.522-1.485 1.214-2.377.714-4.03 3.115-4.03 5.809 0 2.714 1.67 5.121 4.075 5.82l-.017.44a3.012 3.012 0 0 0-.058.589v7.306a3 3 0 0 0 5.972.406l.794-5.799h.556l.7 5.755A3 3 0 0 0 31 39.178v-8.22a2.98 2.98 0 0 0-.003-.137c2.366-.725 4.003-3.11 4.003-5.798Zm-20 0C15 22.695 16.668 21 18.5 21h2.498c-.002.158-.005.313-.01.463-.022.713-.085 1.232-.208 1.613-.115.354-.265.539-.457.66-.216.136-.604.264-1.323.264v.007a40.678 40.678 0 0 0-.92-.007H18v2c1.158 0 2.235.01 3.027.265.375.12.603.272.738.433.122.145.235.375.235.802 0 .526-.09.795-.173.936-.069.116-.178.221-.428.315-.277.104-.68.175-1.274.212C19.538 29 18.843 29 18 29v.004c-1.62-.27-3-1.871-3-3.981Zm8.297.389a3.208 3.208 0 0 0-1.053-.809c.192-.28.334-.588.438-.91.213-.658.282-1.408.306-2.166.005-.17.008-.346.01-.527h2.004c.002.181.005.357.01.527.024.758.093 1.508.306 2.166.222.685.614 1.307 1.292 1.735.654.412 1.463.572 2.39.572v3.108l-.144.014.055 1.4.041.13a.987.987 0 0 1 .048.307v8.219a1 1 0 0 1-1.993.12l-.914-7.513h-4.072l-1.03 7.528A1 1 0 0 1 19 39.177v-7.305c0-.081.01-.159.027-.232l.022-.095.022-.549a22.4 22.4 0 0 0 1.179-.037c.657-.041 1.295-.127 1.851-.335.583-.219 1.099-.582 1.447-1.169.333-.563.452-1.231.452-1.955 0-.823-.234-1.53-.703-2.088ZM31 28.654c1.15-.632 2-1.975 2-3.631C33 22.695 31.332 21 29.5 21h-2.498c.002.158.005.313.01.463.022.713.085 1.232.208 1.613.115.354.265.539.457.66.216.136.604.264 1.323.264h2v4.654Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineBoy1015Y);
export default ForwardRef;
