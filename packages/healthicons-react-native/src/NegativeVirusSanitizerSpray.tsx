import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegativeVirusSanitizerSpray = (
  passedProps: SvgProps,
  ref: Ref<SVGSVGElement>
) => {
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
        d="M48 0H0v48h48V0ZM12 41v-1.586l1.121 1.121a1 1 0 0 0 1.415-1.414L13.414 38H15a1 1 0 1 0 0-2h-1.586l1.121-1.121a1 1 0 1 0-1.414-1.415L12 34.586V33a1 1 0 1 0-2 0v1.586l-1.121-1.122a1 1 0 0 0-1.414 1.415L8.586 36H7a1 1 0 1 0 0 2h1.586l-1.122 1.121a1 1 0 1 0 1.415 1.414L10 39.416V41a1 1 0 1 0 2 0Zm30-13.2a1 1 0 0 0-2 0v.2h-3.062a7.955 7.955 0 0 0-.387-1.648 7.52 7.52 0 0 1-5.698.168 6.41 6.41 0 0 1-3.073.316 6.392 6.392 0 0 1-4.688-3.23A7.97 7.97 0 0 0 21.062 28H18v-.2a1 1 0 0 0-2 0v2.4a1 1 0 0 0 2 0V30h3.062a7.957 7.957 0 0 0 1.447 3.677L20.3 35.886l-.593-.593a1 1 0 0 0-1.414 1.414l2.4 2.4a1 1 0 0 0 1.414-1.414l-.393-.393 2.159-2.159A7.963 7.963 0 0 0 28 36.938V40h-.2a1 1 0 0 0 0 2h2.4a1 1 0 0 0 0-2H30v-3.062a7.961 7.961 0 0 0 3.906-1.618l1.88 1.88-.493.493a1 1 0 0 0 1.414 1.414l2.4-2.4a1 1 0 0 0-1.414-1.414l-.493.493-1.88-1.88A7.961 7.961 0 0 0 36.938 30H40v.2a1 1 0 0 0 2 0v-2.4ZM27.879 9.627l3.506 2.123.117-.12a4.39 4.39 0 0 1 6.05-.095 4.359 4.359 0 0 1 .805 5.413 5.464 5.464 0 0 1-.995 6.473 5.52 5.52 0 0 1-6.509.905 4.386 4.386 0 0 1-2.792.53 4.391 4.391 0 0 1-3.002-1.865 4.357 4.357 0 0 1 .661-5.674l-2.091-3.504 1.717-1.025 2.56 4.288a1 1 0 0 1-.378 1.389 2.38 2.38 0 0 0-1.163 1.52 2.347 2.347 0 0 0 .345 1.878 2.373 2.373 0 0 0 1.633 1.013 2.397 2.397 0 0 0 1.855-.518 1 1 0 0 1 1.224-.035 3.518 3.518 0 0 0 4.538-.329 3.466 3.466 0 0 0 .388-4.498 1 1 0 0 1 .05-1.231 2.355 2.355 0 0 0-.201-3.259 2.39 2.39 0 0 0-3.294.052v.001c-.154.15-.286.322-.392.508a1 1 0 0 1-1.388.362l-4.28-2.591 1.036-1.711Zm-3.02 1.205-1.599 1.6-4.242-4.243 1.6-1.6a2 2 0 0 1 2.828 0l1.414 1.415a2 2 0 0 1 0 2.828ZM14.375 9.418h3.044l4.613 4.613v3.044a2 2 0 0 1-.586 1.414l-5.778 5.778a4 4 0 0 1-5.657 0L7.182 21.44a4 4 0 0 1 0-5.657l5.778-5.778a2 2 0 0 1 1.414-.586Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgNegativeVirusSanitizerSpray);
export default ForwardRef;
