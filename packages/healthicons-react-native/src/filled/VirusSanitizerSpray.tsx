import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgVirusSanitizerSpray = (passedProps: SvgProps) => {
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
        d="m24.86 10.832-1.6 1.6-4.242-4.243 1.6-1.6a2 2 0 0 1 2.828 0l1.414 1.415a2 2 0 0 1 0 2.828ZM14.374 9.418h3.044l4.613 4.613v3.044a2 2 0 0 1-.586 1.414l-5.778 5.778a4 4 0 0 1-5.657 0L7.182 21.44a4 4 0 0 1 0-5.657l5.778-5.778a2 2 0 0 1 1.414-.586ZM31.385 11.75l.118-.12.458.468-.576-.348Z"
        fill="#333"
      />
      <Path
        d="m31.963 12.1-.46-.47a4.39 4.39 0 0 1 6.05-.095 4.359 4.359 0 0 1 .804 5.413 5.464 5.464 0 0 1-.995 6.473 5.52 5.52 0 0 1-6.509.905 4.386 4.386 0 0 1-2.792.53 4.391 4.391 0 0 1-3.002-1.865 4.357 4.357 0 0 1 .661-5.674l-2.091-3.504 1.717-1.025 2.56 4.288a1 1 0 0 1-.378 1.389 2.38 2.38 0 0 0-1.163 1.52 2.347 2.347 0 0 0 .345 1.878 2.373 2.373 0 0 0 1.633 1.013 2.397 2.397 0 0 0 1.855-.518 1 1 0 0 1 1.224-.035 3.518 3.518 0 0 0 4.538-.329 3.466 3.466 0 0 0 .388-4.498 1 1 0 0 1 .05-1.231 2.355 2.355 0 0 0-.201-3.259 2.39 2.39 0 0 0-3.294.052v.001c-.154.15-.286.322-.392.508a1 1 0 0 1-1.388.362l-4.28-2.591 1.036-1.711 4.25 2.642.03-.05-.196-.12Z"
        fill="#333"
      />
      <Path
        d="M21.062 28a7.97 7.97 0 0 1 2.03-4.394 6.375 6.375 0 0 0 4.688 3.23 6.396 6.396 0 0 0 3.073-.316 7.524 7.524 0 0 0 5.698-.168c.185.526.316 1.078.387 1.648H40v-.2a1 1 0 0 1 2 0v2.4a1 1 0 0 1-2 0V30h-3.062a7.96 7.96 0 0 1-1.618 3.906l1.88 1.88.493-.493a1 1 0 0 1 1.414 1.414l-2.4 2.4a1 1 0 0 1-1.414-1.414l.493-.493-1.88-1.88A7.96 7.96 0 0 1 30 36.938V40h.2a1 1 0 0 1 0 2h-2.4a1 1 0 0 1 0-2h.2v-3.062a7.965 7.965 0 0 1-4.127-1.797L21.714 37.3l.393.393a1 1 0 0 1-1.414 1.414l-2.4-2.4a1 1 0 0 1 1.414-1.414l.593.593 2.209-2.209A7.958 7.958 0 0 1 21.062 30H18v.2a1 1 0 0 1-2 0v-2.4a1 1 0 0 1 2 0v.2h3.062ZM11 32a1 1 0 0 1 1 1v1.17c.1.036.198.077.293.122l.828-.828a1 1 0 0 1 1.414 1.415l-.827.828c.045.095.086.193.121.293H15a1 1 0 1 1 0 2h-1.17c-.036.1-.077.198-.122.293l.828.828a1 1 0 0 1-1.415 1.414l-.828-.827a2.963 2.963 0 0 1-.293.121V41a1 1 0 1 1-2 0v-1.17a2.97 2.97 0 0 1-.293-.121l-.828.828a1 1 0 0 1-1.414-1.415l.827-.828A2.972 2.972 0 0 1 8.171 38H7a1 1 0 1 1 0-2h1.17c.036-.1.077-.198.122-.294l-.827-.827a1 1 0 1 1 1.414-1.415l.828.828c.095-.045.193-.086.293-.121V33a1 1 0 0 1 1-1Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgVirusSanitizerSpray;
