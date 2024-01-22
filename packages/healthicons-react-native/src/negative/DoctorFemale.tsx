import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgDoctorFemale = (passedProps: SvgProps) => {
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
      <G clipPath="url(#doctor_female_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM13 36c0-1.082.573-2.03 1.433-2.558a11.58 11.58 0 0 1-.092-.375 21.61 21.61 0 0 1-.355-2.068 19.63 19.63 0 0 1-.155-2.006C9.61 30.65 6 33.538 6 36.57V42h36v-5.43c0-2.904-3.31-5.675-7.298-7.36v.028c.018.61-.016 1.31-.082 1.983-.06.624-.149 1.246-.256 1.779H35a1 1 0 0 1 .894.553l1 2c.07.139.106.292.106.447v2a1 1 0 0 1-1 1h-2v-2h1v-.764L34.382 35h-2.764L31 36.236V37h1v2h-2a1 1 0 0 1-1-1v-2c0-.155.036-.308.106-.447l1-2A1 1 0 0 1 31 33h1.315c.022-.086.044-.181.066-.286.1-.471.189-1.068.249-1.685.06-.618.088-1.231.073-1.735a5.18 5.18 0 0 0-.049-.624c-.022-.142-.044-.207-.048-.221-.002-.004-.002-.004 0-.002l.003-.001A21.732 21.732 0 0 0 31 28.013c-.503-.115-1.023.577-1.25 1.01H18a9.88 9.88 0 0 1-.086-.168c-.212-.422-.473-.943-.914-.842-.385.087-.77.187-1.155.297a6.55 6.55 0 0 0-.016.527c.004.553.057 1.23.142 1.914.085.682.2 1.346.32 1.87.034.151.068.287.1.404A3 3 0 1 1 13 36Zm4 0c0 .574-.462 1.015-1 1.015s-1-.44-1-1.015c0-.574.462-1.015 1-1.015s1 .44 1 1.015Zm2.904-13.043c1.16 1.105 2.778 1.8 4.596 1.8 1.745 0 3.305-.64 4.453-1.668 1.39-2.376 2.878-6.737-.453-11.773-.547-1.07-7.264 1.611-10 3.158-1 .565-.937 2.121-.454 3.87l.031.004-.005.088c.44 1.552 1.198 3.244 1.832 4.52Zm10.71 1.314c2.053-.752 4.386-2.236 4.386-5.1 0-5.114-3.503-11.013-3.503-11.013S28.98 5 24.055 5c-4.926 0-6.677 3.158-6.677 3.158S13 14.533 13 19.172c0 2.921 3.169 4.474 5.515 5.224 1.538 1.463 3.664 2.36 5.985 2.36 2.387 0 4.567-.948 6.113-2.485Z"
          fill="#000"
        />
      </G>
      <Defs>
        <ClipPath id="doctor_female_svg__a">
          <Path fill="#fff" d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgDoctorFemale;
