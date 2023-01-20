import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBladder = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
  const context = React.useContext(HealthIconsContext);
  const props = {
    ...context,
    ...passedProps,
  };
  return (
    <Svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 48 48"
      fill="none"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.758 8.705a.889.889 0 0 0-1.743.35c.07.312.171.626.294.948.212.554.564 1.318 1.13 2.2.86 1.337 2.205 2.931 4.287 4.475l.536.398-.162.648a14.38 14.38 0 0 0-.433 3.422v.02c0 .706.09 1.308.25 1.837A.993.993 0 0 1 14 23h20c.028 0 .056.001.083.003.16-.529.25-1.13.25-1.836 0-1.296-.195-2.492-.433-3.443l-.162-.648.536-.398c2.081-1.544 3.427-3.138 4.286-4.475.651-1.013 1.198-2.08 1.423-3.144a.889.889 0 0 0-1.742-.354l-.002.013-.004.015v.002c-.04.168-.303 1.158-1.17 2.507-.82 1.276-2.194 2.892-4.465 4.446l-.378.259-.443-.117c-1.947-.515-4.523-1.059-6.801-1.19h-.003a16.233 16.233 0 0 0-1.951 0h-.003c-2.278.132-4.854.675-6.8 1.19l-.443.117-.378-.259c-2.27-1.554-3.644-3.17-4.465-4.446a10.308 10.308 0 0 1-.965-1.874 5.088 5.088 0 0 1-.206-.638l-.003-.012-.003-.013Zm1.954-.429a2.889 2.889 0 0 0-5.656 1.18l.002.01.003.01c.096.435.23.85.38 1.242.257.67.668 1.558 1.316 2.566.907 1.411 2.26 3.03 4.255 4.6a16.23 16.23 0 0 0-.345 3.258v.025c0 1.895.527 3.322 1.365 4.508.797 1.126 1.862 2.008 2.858 2.832l.05.04c1.308 1.083 2.566 2.134 3.527 3.695.947 1.54 1.644 3.648 1.644 6.87a2.889 2.889 0 0 0 5.778 0c0-3.222.697-5.33 1.644-6.87.961-1.561 2.22-2.612 3.528-3.694l.049-.04c.996-.825 2.06-1.707 2.858-2.833.838-1.186 1.365-2.613 1.365-4.508 0-1.206-.146-2.328-.345-3.282 1.995-1.571 3.348-3.19 4.255-4.6.704-1.097 1.4-2.405 1.699-3.82l.002-.01a2.889 2.889 0 0 0-5.656-1.18c-.019.074-.222.822-.906 1.885-.64.997-1.726 2.308-3.543 3.62-1.95-.497-4.456-1.004-6.745-1.136a18.21 18.21 0 0 0-2.19 0c-2.288.132-4.793.64-6.743 1.135-1.817-1.311-2.903-2.622-3.544-3.619a8.322 8.322 0 0 1-.779-1.506 3.25 3.25 0 0 1-.126-.378Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgBladder);
export default ForwardRef;
