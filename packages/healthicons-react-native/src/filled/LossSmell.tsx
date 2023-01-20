import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgLossSmell = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M14 4C8.477 4 4 8.477 4 14s4.477 10 10 10 10-4.477 10-10S19.523 4 14 4ZM6 14a8 8 0 0 1 12.906-6.32L7.68 18.906A7.965 7.965 0 0 1 6 14Zm3.094 6.32L20.32 9.094A8 8 0 0 1 9.094 20.32Z"
        fill="#333"
      />
      <Path
        d="M30.582 31.187a1 1 0 0 1 .231 1.395c-.586.82-1.336 1.565-2.216 2.22a1 1 0 0 1-1.194-1.604c.735-.547 1.332-1.149 1.784-1.78a1 1 0 0 1 1.395-.231Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.555 37.832a1 1 0 0 0-1.104-1.668l-.002.002-.03.018a3.34 3.34 0 0 1-.155.086 5.58 5.58 0 0 1-.668.29C23 36.777 22.116 37 21 37a1 1 0 1 0 0 2c1.384 0 2.5-.277 3.28-.56.389-.142.694-.285.91-.397.107-.056.191-.105.252-.14l.012-.008.03-.018.032-.02.024-.015.009-.006.003-.002.003-.002ZM25 37l.555.832L25 37ZM37 40.513a1 1 0 0 0-2-.026 7.441 7.441 0 0 0 .27 2.096 6.122 6.122 0 0 0 .278.782l.004.008.02.045.01.018.002.007.002.002v.003a1 1 0 0 0 1.792-.89l-.007-.015a4.147 4.147 0 0 1-.175-.5 5.445 5.445 0 0 1-.196-1.53Zm-1.413 2.935L36.48 43l-.782.392-.112.056Z"
        fill="#333"
      />
      <Path
        d="M36.816 33.051a1 1 0 0 1 .633 1.264l-.003.01-.013.04a10.864 10.864 0 0 0-.207.79C37.11 35.678 37 36.35 37 37a1 1 0 1 1-2 0c0-.85.14-1.68.274-2.28a12.835 12.835 0 0 1 .25-.95l.004-.013c.006-.02.01-.035.015-.047l.005-.017.002-.006.001-.003.94.313-.94-.313a1 1 0 0 1 1.265-.633ZM29.832 40.555a1 1 0 0 0-.277-1.387L26.5 42.5l.555.832.001-.001.002-.001.006-.004.018-.013a5.322 5.322 0 0 0 .268-.193c.173-.13.412-.317.683-.555.539-.47 1.233-1.161 1.8-2.01ZM33.449 33.106a1 1 0 0 1 .445 1.343c-.16.317-.27.6-.396.92-.066.17-.137.352-.221.554-.227.544-.518 1.139-1.014 1.724a1 1 0 0 1-1.525-1.294c.306-.361.502-.743.693-1.2.05-.12.104-.258.162-.407.144-.365.313-.795.513-1.195a1 1 0 0 1 1.343-.445ZM38.458 6.2c-1.297 2.777-4.74 9.608-8.396 12.333C24.594 22.589 27.328 28 31.43 28H32c0-.04.003-.08.008-.121a3.508 3.508 0 0 1 1.745-2.633c1.103-.633 2.613-.753 4.523-.207a1 1 0 0 1-.55 1.923c-1.59-.455-2.497-.257-2.977.019A1.503 1.503 0 0 0 34.012 28h.87c.735 0 1.46.171 2.118.5.658.329 1.383.5 2.118.5H40s4.549.455 4.969-4.275a4.526 4.526 0 0 0-.638-2.182c-.565-.945-1.455-1.621-2.72-1.614l-.01-2c1.293-.007 2.346.431 3.162 1.091-.358-3.805-.594-7.695.33-11.39l.286-1.145A2 2 0 0 0 43.439 5H40.32c-.801 0-1.524.475-1.863 1.2Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgLossSmell);
export default ForwardRef;
