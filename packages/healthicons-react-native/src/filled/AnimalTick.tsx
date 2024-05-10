import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgAnimalTick = (passedProps: SvgProps) => {
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
        d="M20.572 10.283a1 1 0 0 0-1.414.02l-3 3.086a1 1 0 0 0-.074 1.309c.744.962 1.463 1.674 2.374 2.175.616.338 1.283.56 2.04.718-.405.452-.792.97-1.155 1.536l-2.991-1.137-1.183-2.756a1 1 0 1 0-1.838.789l1.35 3.145a1 1 0 0 0 .564.54l3.12 1.187c-.302.63-.575 1.294-.813 1.979l-2.798-1.064-1.922-2.88a1 1 0 1 0-1.664 1.111l2.1 3.145a1 1 0 0 0 .477.38l3.244 1.233c-.057.24-.11.479-.157.719a11.903 11.903 0 0 0-.585.25c-.379.174-.89.431-1.41.762-.512.327-1.071.75-1.512 1.267-.439.515-.825 1.2-.825 2.026 0 1.204.438 2.53.823 3.48a18.149 18.149 0 0 0 .781 1.671l.015.028.005.008.002.004a1 1 0 0 0 1.748-.97l-.002-.005-.01-.018a13.372 13.372 0 0 1-.2-.389c-.132-.268-.309-.645-.485-1.08-.365-.9-.677-1.928-.677-2.73 0-.177.083-.417.347-.727.262-.307.64-.607 1.066-.878.207-.133.416-.252.614-.357-.018.297-.027.591-.027.883C16.5 34.708 20.272 38 24 38s7.5-3.292 7.5-9.257c0-.292-.009-.586-.026-.883.197.105.406.224.613.357.425.27.804.57 1.066.878.264.31.347.55.347.728 0 .8-.312 1.828-.677 2.73a16.197 16.197 0 0 1-.643 1.389l-.007.013a7.966 7.966 0 0 1-.035.066l-.01.018-.002.004a1 1 0 1 0 1.749.97l.002-.003.004-.008.015-.028.053-.099a18.149 18.149 0 0 0 .728-1.572c.385-.95.823-2.275.823-3.48 0-.825-.386-1.51-.825-2.026-.44-.516-1-.94-1.512-1.267a11.912 11.912 0 0 0-1.995-1.012c-.047-.24-.1-.48-.157-.719l3.245-1.234a1 1 0 0 0 .476-.379l2.1-3.145a1 1 0 0 0-1.663-1.11l-1.923 2.879-2.798 1.064a19.29 19.29 0 0 0-.812-1.98l3.12-1.186a1 1 0 0 0 .563-.54l1.35-3.145a1 1 0 1 0-1.838-.789l-1.183 2.756-2.99 1.137-.069-.105a11.943 11.943 0 0 0-1.087-1.431c.758-.159 1.424-.38 2.04-.718.911-.501 1.63-1.213 2.374-2.176a1 1 0 0 0-.074-1.308l-3-3.086a1 1 0 0 0-1.434 1.394l2.373 2.44c-.418.456-.796.76-1.202.983-.57.314-1.275.513-2.374.663-.208-1.409-1.116-2.469-2.205-2.469-1.088 0-1.996 1.06-2.205 2.469-1.099-.15-1.803-.35-2.374-.663-.406-.223-.784-.527-1.201-.983l2.372-2.44a1 1 0 0 0-.02-1.414ZM33 34.528l.875.486-.875-.486Zm-18 0-.874.486.874-.486Z"
      />
    </Svg>
  );
};
export default SvgAnimalTick;
