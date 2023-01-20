import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgOutpatient = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
      ref={ref}
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.889 9.5a4.502 4.502 0 0 0-8.889 1 4.5 4.5 0 0 0 8.888 1H24a.998.998 0 0 0 .123-.008c.23.887.76 1.508 1.377 1.508.828 0 1.5-1.12 1.5-2.5S26.328 8 25.5 8c-.617 0-1.147.62-1.377 1.507A1.012 1.012 0 0 0 24 9.5h-.111Zm-2.123 2.059a2.5 2.5 0 0 1-4.733-.655c1.628.72 3.029.716 4.732.655Zm-4.219-2.62a2.5 2.5 0 0 1 4.264.606l-.026.001c-1.842.063-2.852.097-4.238-.607ZM8.627 19.499C10.28 17.518 12.76 16 15.76 16a3 3 0 0 1 2.864 2.107l1.275 4.09H21a3 3 0 0 1 0 6h-3.309a3 3 0 0 1-2.849-2.063A14.527 14.527 0 0 0 14 29.618V39a3 3 0 1 1-6 0v-6.988c-.193-.306-.43-.701-.672-1.143a14.496 14.496 0 0 1-.834-1.785C6.266 28.48 6 27.616 6 26.69c0-2.628.988-5.225 2.627-7.191ZM15.76 18c-2.286 0-4.24 1.153-5.597 2.78C8.812 22.4 8 24.548 8 26.69c0 .57.169 1.169.365 1.688.202.536.466 1.07.719 1.534a19.768 19.768 0 0 0 .755 1.265 1 1 0 0 1 .161.544V39a1 1 0 1 0 2 0v-9.435c0-.036.002-.07.005-.105.268-2.53 1.153-4.804 2.149-6.582a1 1 0 0 1 1.827.192l.756 2.424a1 1 0 0 0 .954.702H21a1 1 0 1 0 0-2h-1.837a1 1 0 0 1-.955-.702l-1.493-4.792A1 1 0 0 0 15.76 18ZM37.5 18a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34.379 17.77a3 3 0 0 0-3.335-1.71l-.035.008h-.003l-.015.004-.021.005h-.003a4.285 4.285 0 0 0-.511.15 6.89 6.89 0 0 0-.936.41c-.727.383-1.611 1-2.461 1.977C25.32 20.609 24 23.78 24 28.667c0 .51.099 2.273 1.854 3.137.17.084.335.148.492.196H16v10h2v-7h11v7h2v-8.46a35.822 35.822 0 0 1 2.546 1.947c.078.124.18.29.301.494.276.462.62 1.056.977 1.674l.505.88.003.005.027.046v.002h.001c.5.871.984 1.715 1.182 2.025a3 3 0 0 0 5.059-3.226 83.65 83.65 0 0 1-.986-1.697l-.002-.003-.59-1.027c-.358-.62-.723-1.25-1.024-1.754a30.6 30.6 0 0 0-.418-.683l-.005-.009c-.084-.132-.274-.432-.485-.675a5.178 5.178 0 0 0-.492-.48l-.018-.016a24.182 24.182 0 0 0-.53-.446 41.687 41.687 0 0 0-1.984-1.53H39a3 3 0 0 0 0-6h-2.239L34.38 17.77Zm-2.85 13.716a.988.988 0 0 0-.121-.067.986.986 0 0 0-.111-.081c-.583-.369-1.168-.7-1.684-.916-.801-.336-1.358-.303-1.806-.277l-.04.003a4.279 4.279 0 0 1-.397.01 1.547 1.547 0 0 1-.633-.148c-.652-.32-.737-.974-.737-1.343 0-4.519 1.215-7.186 2.567-8.74a6.583 6.583 0 0 1 1.884-1.52 4.874 4.874 0 0 1 .793-.334c.12-.002.241-.026.355-.072a1 1 0 0 1 .956.589l2.648 5.887a1 1 0 0 0 .912.59H39a1 1 0 1 1 0 2h-4.179a1 1 0 0 1-.912-.59l-1.023-2.275a1 1 0 0 0-1.837.031 15.2 15.2 0 0 0-.953 3.403 1 1 0 0 0 .568 1.065c1.188.549 2.547 1.476 3.613 2.267.59.438 1.114.853 1.505 1.174.195.16.36.3.484.408l.01.009c.041.036.097.085.157.14.062.059.113.11.145.147.046.053.101.128.161.214.059.085.11.167.154.234.11.174.243.392.389.637.293.49.65 1.108 1.008 1.727l.59 1.028.002.003.034.06c.463.805.855 1.488.999 1.714a1 1 0 1 1-1.687 1.075 86.145 86.145 0 0 1-1.163-1.997v-.001c-.169-.293-.34-.593-.508-.883-.357-.619-.708-1.225-.992-1.7a26.498 26.498 0 0 0-.417-.678 1 1 0 0 0-.18-.206l-.016-.015a20.417 20.417 0 0 0-.44-.37 37.786 37.786 0 0 0-1.428-1.114 30.832 30.832 0 0 0-1.556-1.088Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgOutpatient);
export default ForwardRef;
