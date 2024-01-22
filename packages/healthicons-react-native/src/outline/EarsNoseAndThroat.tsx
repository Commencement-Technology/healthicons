import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgEarsNoseAndThroat = (passedProps: SvgProps) => {
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
        d="m27.262 21.325-.001.002a1 1 0 0 0 1.47 1.354l.01-.009a2.43 2.43 0 0 1 .418-.31A2.63 2.63 0 0 1 30.5 22c.595 0 1.5.49 1.5 2.05 0 1.467-.635 2.442-1.36 3.07-.37.32-.762.548-1.102.694-.17.073-.319.122-.437.151a1.454 1.454 0 0 1-.142.03l-.05.005a1 1 0 1 0 0 2c.417 0 .928-.139 1.417-.348a6.301 6.301 0 0 0 1.624-1.021c1.094-.948 2.05-2.448 2.05-4.581 0-2.54-1.678-4.05-3.5-4.05a4.629 4.629 0 0 0-2.982 1.082 3.461 3.461 0 0 0-.228.213l-.018.02-.007.006-.003.004ZM28 22l-.74-.673L28 22Z"
        fill="#000"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 39a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v30ZM40 9a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h10v-4h-2c-2.4 0-3-2-3-3v-3s-2.686-.313-2.8-.313a1.453 1.453 0 0 1-.883-.475 1.258 1.258 0 0 1-.315-.9c.084-.49.258-.963.513-1.4L11.2 25.3c.485-1.11.97-2.22 1.426-3.356 0 0 .285-2.642.541-3.54.796-2.418 2.403-4.536 4.588-6.047 2.185-1.512 4.834-2.337 7.56-2.357 2.64-.004 5.213.755 7.363 2.172 2.15 1.418 3.769 3.422 4.63 5.733.86 2.312.92 4.814.171 7.159-.45 1.407-1.224 2.722-2.22 3.873C33.997 30.393 33 32.14 33 34.065V40h6a1 1 0 0 0 1-1V9ZM29.222 26.085c-1.713 1.272-2.64 1.96-2.64 4.565V40H31v-5.935c0-2.62 1.349-4.823 2.746-6.437.842-.973 1.47-2.054 1.828-3.173a8.916 8.916 0 0 0-.14-5.852c-.707-1.895-2.044-3.566-3.857-4.76-1.812-1.195-3.998-1.846-6.253-1.843-2.334.018-4.587.726-6.431 2.001-1.83 1.267-3.154 3.018-3.812 4.984-.08.303-.194 1.012-.298 1.79a62.191 62.191 0 0 0-.157 1.277l-.01.08-.002.026c-.02.183-.064.361-.133.531-.467 1.165-.962 2.297-1.443 3.4l-.001.002-.68 1.603-.046.099.559.063.36.041C14.01 25.81 16.727 23 20.5 23c1.711 0 2.817.78 3.689 1.394.568.4 1.036.731 1.509.731.92 0 1.659-.287 2.217-.643.575-.366 1.438-.277 1.743.334a.915.915 0 0 1-.269 1.145l-.167.124ZM19 34a2 2 0 0 1 2 2v4h3v-4.5c0-1.827-1.069-3.517-2.85-3.926-1.544-.355-3.475-.56-5.15-.014V33c0 .064.012.191.054.341.042.147.102.272.17.365.06.086.128.145.212.188.082.043.25.106.564.106h2Zm-3.04-4.4c2.441-.835 5.068-.43 6.632-.035.686.173 1.373-.363 1.004-.966-.77-1.26-2.556-2.099-4.596-2.099-2.137 0-3.517.913-4.275 1.636.63.245 1.099.797 1.235 1.463Z"
        fill="#000"
      />
    </Svg>
  );
};
export default SvgEarsNoseAndThroat;
