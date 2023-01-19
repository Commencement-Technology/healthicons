import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegativeSymptom = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M48 0H0v48h48V0ZM16 16a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm2 9.985v-4.52A3.998 3.998 0 0 1 12.535 20H12a2 2 0 1 1 0-4h.535A3.998 3.998 0 0 1 16 14c1.48 0 2.773.804 3.465 2H36a2 2 0 1 1 0 4h-5.354A3.998 3.998 0 0 1 30 26.465V29c0-.006 0-.004.002.01.007.045.032.219.125.568.105.398.264.901.466 1.486a80.486 80.486 0 0 0 1.508 3.929 179.379 179.379 0 0 0 2.174 5.078l.037.082.01.02.001.005v.001a2 2 0 0 1-3.455 1.977l-1.5-2.118L24 32.46l-1.117 1.577a4 4 0 0 1-3.503 4.946l-2.248 3.173a2 2 0 0 1-3.456-1.977l.049-.108a118.434 118.434 0 0 0 .644-1.463c.262-.6.578-1.333.913-2.13a4 4 0 0 1 2.014-5.098c.038-.107.075-.212.11-.316a21.81 21.81 0 0 0 .467-1.486c.093-.35.118-.523.125-.569C18 28.996 18 28.994 18 29v-3.015ZM28 25a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-4-12a4.5 4.5 0 0 0 .01-9h-.019A4.5 4.5 0 0 0 24 13Zm18 11c0 5.76-2.706 10.889-6.916 14.183l1.204 1.598C40.982 36.121 44 30.413 44 24c0-8.73-5.593-16.153-13.391-18.882l-.661 1.888C36.966 9.462 42 16.143 42 24ZM24 42c1.542 0 3.038-.194 4.466-.558l.476 1.943c-1.58.401-3.236.615-4.942.615-1.672 0-3.295-.205-4.847-.592l.475-1.943c1.4.35 2.864.535 4.372.535Zm-11.021-3.768C8.733 34.94 6 29.79 6 24c0-7.857 5.034-14.538 12.052-16.994l-.66-1.888C9.592 7.847 4 15.27 4 24c0 6.442 3.045 12.172 7.775 15.83l1.204-1.598ZM19 37a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgNegativeSymptom);
export default ForwardRef;
