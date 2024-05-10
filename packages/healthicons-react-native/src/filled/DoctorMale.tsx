import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgDoctorMale = (passedProps: SvgProps) => {
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
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.834 13.81c0 3.461-.86 7.975-2.183 7.29a8.001 8.001 0 0 1-15.611-1.54c-1.313-2.297-3.035-6.9 1.392-10.488.08-.026.128-.242.2-.56.274-1.203.881-3.877 4.71-3.366 2.953.393 11.492 1.918 11.492 8.665Zm-3.806 2.182s-.452 1.322-.028 2.795a6 6 0 0 1-11.996.197c.145-.55.145-1.481.144-2.516-.001-1.867-.003-4.07.852-4.968 5.989 3.989 11.028 4.492 11.028 4.492Z"
      />
      <Path d="M13 36c0-1.082.573-2.03 1.433-2.558a11.58 11.58 0 0 1-.092-.375 21.61 21.61 0 0 1-.355-2.068 19.63 19.63 0 0 1-.155-2.006C9.61 30.65 6 33.538 6 36.57V42h36v-5.43c0-2.904-3.31-5.675-7.298-7.36v.028c.018.61-.016 1.31-.082 1.983-.06.624-.149 1.246-.256 1.779H35a1 1 0 0 1 .894.553l1 2c.07.139.106.292.106.447v2a1 1 0 0 1-1 1h-2v-2h1v-.764L34.382 35h-2.764L31 36.236V37h1v2h-2a1 1 0 0 1-1-1v-2c0-.155.036-.308.106-.447l1-2A1 1 0 0 1 31 33h1.315c.022-.086.044-.181.066-.286.1-.471.189-1.068.249-1.685.06-.618.088-1.231.073-1.735a5.18 5.18 0 0 0-.049-.624c-.022-.142-.044-.207-.048-.221-.001-.003-.002-.004 0-.002l.003-.001A21.732 21.732 0 0 0 31 28.013c-.503-.115-1.023.577-1.25 1.01H18a9.88 9.88 0 0 1-.086-.168c-.212-.422-.473-.943-.914-.842-.385.087-.77.187-1.155.297a6.55 6.55 0 0 0-.016.527c.004.553.057 1.23.142 1.914.085.682.2 1.346.32 1.87.034.151.068.287.1.404A3 3 0 1 1 13 36Z" />
      <Path d="M17 36c0 .574-.462 1.015-1 1.015s-1-.44-1-1.015c0-.574.462-1.015 1-1.015s1 .44 1 1.015Z" />
    </Svg>
  );
};
export default SvgDoctorMale;
