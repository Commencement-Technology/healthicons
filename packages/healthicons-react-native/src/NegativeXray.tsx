import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegativeXray = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M0 0h48v48H0V0Zm28.5 8.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM30 34h-4.735l.743 8.181A2 2 0 0 0 30 42v-8Zm-7.264 0H18v8a2 2 0 0 0 3.992.181L22.736 34Zm13.22-20h.09-.09Zm-24.002 0h.09-.09ZM10 16a1 1 0 0 1 1-1h26a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H11a1 1 0 0 1-1-1V16Zm13 2.5V17h2v1.5h.75c1.056 0 2.006.299 2.67.578a8.163 8.163 0 0 1 1.036.527l.067.042.02.013.007.005.003.002h.001L29 20.5l-.554.832-.003-.002a6.194 6.194 0 0 0-.8-.409c-.524-.22-1.199-.421-1.893-.421H25v2h1.1c1.351 0 2.531.634 3.312 1.181a9.053 9.053 0 0 1 1.298 1.114l.022.023.007.008.002.003.002.001-.743.67-.743.67-.008-.01a5.66 5.66 0 0 0-.244-.24 7.037 7.037 0 0 0-.742-.601c-.644-.453-1.414-.819-2.163-.819H25v2.14a5.9 5.9 0 0 1 1.9.926c.405.295.78.643 1.064 1.021.268.358.536.85.536 1.413h-2v.022-.002l-.001-.003c-.007-.018-.034-.095-.135-.23a3.07 3.07 0 0 0-.64-.603c-.576-.42-1.23-.672-1.692-.684-.544.046-1.227.325-1.787.727-.28.2-.49.404-.62.577a.762.762 0 0 0-.124.213.014.014 0 0 1-.002.003v-.009L21.5 30h-2c0-.558.26-1.043.528-1.4a4.884 4.884 0 0 1 1.051-.998A6.31 6.31 0 0 1 23 26.668V24.5h-.8c-.603 0-1.447.364-2.257.855a12.459 12.459 0 0 0-1.285.898l-.015.013-.003.002L18 25.5l-.64-.768.001-.002.003-.002.007-.006.026-.02a13.105 13.105 0 0 1 .411-.318c.27-.2.653-.47 1.099-.74.84-.508 2.096-1.144 3.293-1.144h.8v-2h-.5c-.57 0-1.31.2-1.97.44a12.378 12.378 0 0 0-1.069.447l-.012.007h-.002a465.751 465.751 0 0 0-.894-1.789h.001l.002-.001.007-.003.021-.011a9.143 9.143 0 0 1 .346-.16c.227-.1.546-.235.916-.37.713-.26 1.723-.56 2.654-.56h.5Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgNegativeXray);
export default ForwardRef;
