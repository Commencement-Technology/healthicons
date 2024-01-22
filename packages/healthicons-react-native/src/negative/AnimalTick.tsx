import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgAnimalTick = (passedProps: SvgProps) => {
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
      <G clipPath="url(#animal_tick_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm31.5 28.743C31.5 34.708 27.728 38 24 38s-7.5-3.292-7.5-9.257c0-.292.009-.586.027-.883a9.011 9.011 0 0 0-.614.357c-.425.27-.804.57-1.066.878-.264.31-.347.55-.347.728 0 .8.312 1.828.677 2.73a16.197 16.197 0 0 0 .685 1.468l.01.018.002.004a1 1 0 0 1-1.748.971l.874-.486-.874.486-.001-.001-.002-.003-.004-.008-.015-.028a15.26 15.26 0 0 1-.235-.456 18.149 18.149 0 0 1-.546-1.215c-.385-.95-.823-2.275-.823-3.48 0-.825.386-1.51.825-2.026.44-.516 1-.94 1.512-1.267a11.912 11.912 0 0 1 1.995-1.012c.047-.24.1-.48.157-.719l-3.245-1.234a1 1 0 0 1-.476-.379l-2.1-3.145a1 1 0 0 1 1.664-1.11l1.922 2.879 2.798 1.064c.238-.685.51-1.349.812-1.98l-3.12-1.186a1 1 0 0 1-.563-.54l-1.35-3.145a1 1 0 1 1 1.838-.789l1.183 2.756 2.99 1.137c.364-.567.751-1.084 1.156-1.536-.758-.159-1.424-.38-2.04-.718-.911-.501-1.63-1.213-2.374-2.176a1 1 0 0 1 .074-1.308l3-3.086a1 1 0 0 1 1.434 1.394l-2.372 2.44c.417.456.795.76 1.201.983.57.314 1.275.513 2.374.663.208-1.409 1.116-2.469 2.205-2.469 1.088 0 1.997 1.06 2.205 2.469 1.099-.15 1.803-.35 2.374-.663.406-.223.784-.527 1.201-.983l-2.372-2.44a1 1 0 1 1 1.434-1.394l3 3.086a1 1 0 0 1 .074 1.309c-.744.962-1.463 1.674-2.374 2.175-.616.338-1.283.56-2.04.718.405.452.792.97 1.156 1.536l2.99-1.137 1.183-2.756a1 1 0 1 1 1.838.789l-1.35 3.145a1 1 0 0 1-.564.54l-3.119 1.187c.301.63.574 1.294.812 1.979l2.798-1.064 1.922-2.88a1 1 0 1 1 1.664 1.111l-2.1 3.145a1 1 0 0 1-.477.38l-3.244 1.233c.057.24.11.479.157.719l.121.048a11.912 11.912 0 0 1 1.873.964c.513.327 1.072.75 1.513 1.267.44.515.825 1.2.825 2.026 0 1.204-.438 2.53-.823 3.48a18.149 18.149 0 0 1-.781 1.671l-.015.028-.005.008-.002.004-.874-.486.874.486a1 1 0 0 1-1.748-.97l.002-.005.01-.018.042-.079a16.197 16.197 0 0 0 .643-1.39c.365-.9.677-1.928.677-2.73 0-.177-.083-.417-.347-.727-.262-.307-.64-.607-1.066-.878a9.011 9.011 0 0 0-.614-.357c.018.297.027.591.027.883Z"
          fill="#000"
        />
      </G>
      <Defs>
        <ClipPath id="animal_tick_svg__a">
          <Path fill="#fff" d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgAnimalTick;
