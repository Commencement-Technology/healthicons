import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBreastPump = (passedProps: SvgProps) => {
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
      <G clipPath="url(#breast_pump_svg__a)" fill="#000">
        <Path d="M11.84 18.204c.854-1.163 1.723-2.993 2.319-5.217.596-2.223.758-4.243.6-5.677-.064-.594-.176-1.015-.287-1.286-.232.18-.54.488-.892.97-.853 1.163-1.723 2.994-2.319 5.217-.595 2.223-.757 4.243-.6 5.677.065.594.177 1.015.287 1.286.232-.18.54-.488.893-.97ZM25 17v-4a1 1 0 1 0-2 0v4h2ZM24 19a3 3 0 0 0-3 3h6a3 3 0 0 0-3-3ZM13.06 19.94l-.037-.01c1.193-1.388 2.336-3.694 3.068-6.425.732-2.73.895-5.299.556-7.098l.037.01c.21.073.555.327.826 1.663.26 1.278.377 3.182.47 5.931-1.455 2.335-2.51 3.925-3.372 4.902-.903 1.022-1.33 1.07-1.548 1.027Z" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="m20.82 24-2.172 1.718v6.118l-.923 4.333c1.409.453 4.323 1.1 6.644-.31 2.283-1.387 4.627-.784 5.77-.332l-.787-3.691v-6.118L27.18 24h-6.36ZM26 29.857c0 1.2-.88 2.143-2 2.143s-2-.943-2-2.143c0-1.2 2-3.857 2-3.857s2 2.743 2 3.857Z"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm10.38 21.293a1.4 1.4 0 0 0 .269.044c.066.036.138.064.215.085l1.704.457.042.01c1.374.305 2.502-.526 3.497-1.652.718-.814 1.516-1.951 2.452-3.4L21 17.49V18a4.993 4.993 0 0 0-2 4v.89l-2.352 1.86v6.875l-1.477 6.938c-.657 2.143.584 5.437 3.693 5.437h10.272c3.11 0 4.35-3.294 3.694-5.438l-1.478-6.937V24.75L29 22.89V22a4.993 4.993 0 0 0-2-4v-5a3.001 3.001 0 0 0-1.996-2.828c.062-2.354.788-3.416 1.493-3.854.763-.474 1.88-.457 3.09.092 1.195.544 2.263 1.521 2.804 2.577.523 1.02.525 2.017-.172 2.888-1.12 1.401-1.627 2.837-1.617 4.226.01 1.38.527 2.613 1.285 3.624C33.367 21.7 35.902 23 38 23a1 1 0 1 0 0-2c-1.402 0-3.368-.949-4.513-2.475-.554-.74-.88-1.567-.886-2.438-.005-.862.3-1.863 1.18-2.962 1.303-1.629 1.18-3.507.39-5.05-.771-1.506-2.203-2.779-3.757-3.485-1.54-.7-3.424-.934-4.973.03-1.516.942-2.374 2.814-2.437 5.55a3.006 3.006 0 0 0-1.93 2.164l-1.172-.314c-.086-1.8-.209-3.24-.431-4.337-.299-1.472-.86-2.756-2.203-3.179a1.031 1.031 0 0 0-.041-.012l-1.705-.457a1.003 1.003 0 0 0-.228-.034 1.4 1.4 0 0 0-.255-.095c-1.867-.5-4.423 2.986-5.71 7.787-1.286 4.801-.815 9.1 1.052 9.6Z"
        />
      </G>
      <Defs>
        <ClipPath id="breast_pump_svg__a">
          <Path d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgBreastPump;
