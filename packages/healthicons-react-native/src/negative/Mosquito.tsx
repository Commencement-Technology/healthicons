import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgMosquito = (passedProps: SvgProps) => {
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
      <G clipPath="url(#mosquito_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM25.001 7a1 1 0 1 0-2 0v8.482c-.318.319-.612.785-.87 1.37l-3.631-2.69v-2.829a1 1 0 0 0-.31-.724l-3.5-3.333a1 1 0 0 0-1.38 1.448l3.19 3.038v2.905a1 1 0 0 0 .405.803l4.5 3.334c.026.02.054.037.081.054C21.18 20.193 21 21.788 21 23.5c0 .642.025 1.268.073 1.87l-5.987 5.294a1 1 0 0 0-.317.95l.719 3.5-2.914 1.371a1 1 0 1 0 .852 1.81l3.626-1.707a1 1 0 0 0 .553-1.106l-.76-3.703 4.556-4.03c.086.42.184.819.293 1.19l-2.125 2.88a1 1 0 0 0-.14.92l1.257 3.654-2.677 4.056a1 1 0 0 0 1.669 1.102l2.948-4.467a1 1 0 0 0 .111-.876l-1.247-3.623 1.131-1.534c.413.607.882.949 1.379.949s.966-.343 1.379-.949l1.13 1.534-1.246 3.623a1 1 0 0 0 .111.876l2.948 4.467a1 1 0 1 0 1.67-1.102l-2.678-4.056 1.258-3.654a1 1 0 0 0-.141-.92l-2.125-2.88c.109-.371.207-.77.293-1.19l4.557 4.03-.761 3.703a1 1 0 0 0 .553 1.106l3.626 1.707a1 1 0 0 0 .852-1.81l-2.914-1.371.72-3.5a1 1 0 0 0-.318-.95l-5.987-5.295c.048-.601.073-1.227.073-1.869 0-1.713-.179-3.307-.486-4.642.027-.017.055-.035.081-.054l4.5-3.334a1 1 0 0 0 .405-.803v-2.905l3.19-3.038a1 1 0 0 0-1.38-1.448l-3.5 3.333a1 1 0 0 0-.31.724v2.83l-3.63 2.69c-.259-.584-.551-1.05-.869-1.368V7ZM8.374 23.788c.407.453 1.55 1.212 4.503 1.212 2.714 0 4.16-.946 4.964-1.907.192-.23.356-.472.495-.717L8.317 23.72c.018.023.037.045.057.067ZM6.108 22l12.881-1.73L21 20c0 .58-.1 1.304-.351 2.065C19.89 24.365 17.76 27 12.877 27c-6.498 0-7.22-3.333-6.769-5Zm33.518 1.788c-.407.453-1.55 1.212-4.503 1.212-2.714 0-4.16-.946-4.964-1.907a4.814 4.814 0 0 1-.495-.717l10.019 1.345a1.623 1.623 0 0 1-.057.067ZM41.892 22 29.01 20.27 27 20c0 .58.1 1.304.351 2.065.758 2.3 2.889 4.935 7.772 4.935 6.498 0 7.22-3.333 6.769-5Z"
          fill="#333"
        />
      </G>
      <Defs>
        <ClipPath id="mosquito_svg__a">
          <Path fill="#fff" d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgMosquito;
