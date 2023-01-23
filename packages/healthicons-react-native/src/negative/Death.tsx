import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgDeath = (passedProps: SvgProps) => {
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
        d="M12.822 33.997c.094.003.204.005.332.005 1.02 0 1.966.232 2.765.762.802.532 1.295 1.256 1.592 1.965.42 1 .498 2.122.512 2.931.174.048.415.1.738.146 1.306.19 3.133.194 5.239.194s3.933-.005 5.24-.194a6.19 6.19 0 0 0 .737-.146c.014-.81.093-1.93.512-2.931.297-.709.79-1.433 1.592-1.965.8-.53 1.745-.762 2.765-.762.128 0 .238-.002.332-.005 0-.091 0-.194-.002-.31-.003-.171-.01-.38-.016-.617-.014-.5-.032-1.122-.032-1.78 0-2.149.79-3.393 1.365-4.3.121-.19.232-.365.325-.53.508-.91 1.182-2.477 1.182-6.736 0-3.916-1.68-6.772-4.213-8.703C31.2 9.048 27.65 8 24 8c-3.65 0-7.2 1.048-9.787 3.021C11.68 12.952 10 15.808 10 19.724c0 4.259.674 5.826 1.182 6.735.092.166.204.341.325.532.575.906 1.365 2.15 1.365 4.3 0 .657-.018 1.28-.032 1.779-.007.237-.013.446-.016.617-.002.116-.002.219-.002.31ZM17.5 33c2.485 0 4.5-2.239 4.5-5s-2.015-5-4.5-5-4.5 2.239-4.5 5 2.015 5 4.5 5Zm9.5 3.276C27 37.17 26.327 38 25.406 38c-.639 0-1.113-.372-1.406-.9-.293.528-.767.9-1.406.9-.921 0-1.594-.83-1.594-1.724C21 34.36 24 33 24 33s3 1.279 3 3.276ZM30.5 33c2.485 0 4.5-2.239 4.5-5s-2.015-5-4.5-5-4.5 2.239-4.5 5 2.015 5 4.5 5Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48 0H0v48h48V0ZM10.842 32.958c-.07 2.446-.088 3.044 2.312 3.044 2.872 0 2.872 2.57 2.872 4.284S19.898 42 24 42s7.974 0 7.974-1.714c0-1.713 0-4.284 2.872-4.284 2.4 0 2.383-.598 2.312-3.044a55.548 55.548 0 0 1-.03-1.668c0-1.525.45-2.246.993-3.117.83-1.33 1.879-3.012 1.879-8.45 0-18.298-32-18.298-32 0 0 5.438 1.049 7.12 1.879 8.45.543.871.993 1.592.993 3.117 0 .634-.016 1.187-.03 1.668Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgDeath;
