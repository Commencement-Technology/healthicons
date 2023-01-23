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
        d="M12.822 33.997c.094.003.204.005.332.005 1.02 0 1.966.232 2.765.762.802.532 1.295 1.256 1.592 1.965.42 1 .498 2.122.512 2.931.174.048.415.1.738.146 1.306.19 3.133.194 5.239.194s3.933-.005 5.24-.194a6.19 6.19 0 0 0 .737-.146c.014-.81.093-1.93.512-2.931.297-.709.79-1.433 1.592-1.965.8-.53 1.745-.762 2.765-.762.128 0 .238-.002.332-.005 0-.091 0-.194-.002-.31-.003-.171-.01-.38-.016-.617-.014-.499-.032-1.122-.032-1.78 0-2.149.79-3.393 1.365-4.3.121-.19.232-.365.325-.53.508-.91 1.182-2.477 1.182-6.736 0-3.916-1.68-6.772-4.213-8.703C31.2 9.048 27.65 8 24 8c-3.65 0-7.2 1.048-9.787 3.021C11.68 12.952 10 15.808 10 19.724c0 4.259.674 5.826 1.182 6.735.092.166.204.341.325.532.575.906 1.365 2.15 1.365 4.3 0 .657-.018 1.28-.032 1.779-.007.237-.013.446-.016.617-.002.116-.002.219-.002.31Zm-1.98-1.039c-.07 2.446-.088 3.044 2.312 3.044 2.872 0 2.872 2.57 2.872 4.284S19.898 42 24 42s7.974 0 7.974-1.714c0-1.713 0-4.284 2.872-4.284 2.4 0 2.383-.598 2.312-3.044a55.555 55.555 0 0 1-.03-1.668c0-1.525.45-2.246.993-3.117.83-1.33 1.879-3.012 1.879-8.45 0-18.298-32-18.298-32 0 0 5.438 1.049 7.12 1.879 8.45.543.871.993 1.592.993 3.117 0 .634-.016 1.187-.03 1.668Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M35.004 27.992c.003 2.762-2.01 5.002-4.496 5.004-2.485.002-4.501-2.235-4.504-4.996-.002-2.761 2.011-5.002 4.496-5.004 2.486-.002 4.502 2.235 4.504 4.996Zm-2 .002c.002 1.86-1.31 3.001-2.497 3.002-1.188.001-2.501-1.137-2.503-2.998-.001-1.86 1.31-3 2.498-3.002 1.188 0 2.5 1.138 2.502 2.998ZM22.001 28c0 2.761-2.014 5-4.5 5-2.485 0-4.5-2.239-4.5-5s2.014-5 4.5-5c2.485 0 4.5 2.239 4.5 5Zm-2 0c0 1.86-1.312 3-2.5 3-1.187 0-2.5-1.14-2.5-3s1.312-3 2.5-3c1.187 0 2.5 1.14 2.5 3ZM23.97 33.008l.018-.008.018.008c.247.109 2.982 1.361 2.982 3.268 0 .83-.58 1.604-1.399 1.711a1.498 1.498 0 0 1-.194.013c-.64 0-1.114-.372-1.407-.9-.293.528-.767.9-1.406.9-.066 0-.131-.004-.194-.013-.82-.107-1.4-.88-1.4-1.711 0-1.827 2.732-3.15 2.982-3.268Zm-1.742 3.14-.001.002v-.001Zm3.52 0 .002.002-.001-.001Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgDeath;
