import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
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
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.001 6a1 1 0 0 1 1 1v8.485c.318.318.61.784.869 1.367l3.63-2.69v-2.829a1 1 0 0 1 .31-.724l3.5-3.333a1 1 0 0 1 1.38 1.448l-3.19 3.038v2.905a1 1 0 0 1-.405.803l-4.5 3.334c-.026.02-.054.037-.081.054.307 1.335.486 2.93.486 4.642 0 .642-.025 1.268-.073 1.87l5.987 5.294a1 1 0 0 1 .317.95l-.719 3.5 2.914 1.371a1 1 0 1 1-.852 1.81l-3.626-1.707a1 1 0 0 1-.553-1.106l.76-3.703-4.556-4.03c-.086.42-.184.819-.293 1.19l2.125 2.88a1 1 0 0 1 .14.92l-1.257 3.654 2.677 4.056a1 1 0 0 1-1.669 1.102l-2.948-4.467a1 1 0 0 1-.111-.876l1.247-3.623-1.131-1.534c-.413.607-.882.949-1.379.949s-.966-.343-1.379-.949l-1.13 1.534 1.246 3.623a1 1 0 0 1-.111.876l-2.948 4.467a1 1 0 0 1-1.67-1.102l2.678-4.056-1.258-3.654a1 1 0 0 1 .141-.92l2.125-2.88c-.109-.371-.207-.77-.293-1.19l-4.557 4.03.761 3.703a1 1 0 0 1-.553 1.106l-3.626 1.707a1 1 0 0 1-.852-1.81l2.914-1.371-.72-3.5a1 1 0 0 1 .318-.95l5.987-5.295A23.691 23.691 0 0 1 21 23.5c0-1.713.179-3.307.486-4.642a1.016 1.016 0 0 1-.081-.054l-4.5-3.334a1 1 0 0 1-.405-.803v-2.905l-3.19-3.038a1 1 0 0 1 1.38-1.448l3.5 3.333a1 1 0 0 1 .31.724v2.83l3.63 2.69c.26-.586.553-1.052.871-1.37V7a1 1 0 0 1 1-1ZM12.877 25c-2.953 0-4.096-.759-4.503-1.212a1.678 1.678 0 0 1-.057-.067l10.019-1.345a4.814 4.814 0 0 1-.495.717c-.803.961-2.25 1.907-4.964 1.907Zm-6.769-3c-.45 1.667.271 5 6.77 5 4.882 0 7.013-2.635 7.77-4.935C20.9 21.305 21 20.58 21 20L6.108 22Zm29.015 3c2.953 0 4.096-.759 4.503-1.212.02-.022.039-.044.057-.067l-10.019-1.345c.139.245.303.486.495.717.803.961 2.25 1.907 4.964 1.907Zm6.769-3c.45 1.667-.271 5-6.77 5-4.882 0-7.013-2.635-7.77-4.935A6.745 6.745 0 0 1 27 20l14.892 2Z"
        fill="#000"
      />
    </Svg>
  );
};
export default SvgMosquito;
