import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgVascularSurgery = (passedProps: SvgProps) => {
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
        d="M40 8H8v32h32V8ZM8 6a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h32a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H8Z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.828 28h4.724a4 4 0 0 0 2.798-1.142L28 23.284v-.456A4 4 0 0 1 29.172 20l1.689-1.69-2.606-1.736L16.828 28ZM12 30l16-16 6 4-3.414 3.414A2 2 0 0 0 30 22.828v.456a2 2 0 0 1-.6 1.43l-3.65 3.573A6 6 0 0 1 21.551 30H12Z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26.707 21.293a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414l3-3a1 1 0 0 1 1.414 0ZM36.707 8.107l-7.6 7.6-1.414-1.414 7.6-7.6 1.414 1.415ZM38.207 12.393a1 1 0 0 1 0 1.414l-5.5 5.5-1.414-1.415 5.5-5.5a1 1 0 0 1 1.414 0Z"
      />
      <Path d="M30.15 35.234a1 1 0 1 0-1.055 1.7 1 1 0 0 0 1.056-1.7ZM23.15 34.234a1 1 0 1 0-1.055 1.7 1 1 0 0 0 1.056-1.7ZM14.15 35.234a1 1 0 1 0-1.055 1.7 1 1 0 0 0 1.055-1.7Z" />
      <Path d="M10 37h28v2H10v-2ZM10 32h28v2H10v-2Z" />
      <Path d="m26.556 32.243 7.53-7.531 1.415 1.414-7.531 7.531-1.414-1.414Z" />
    </Svg>
  );
};
export default SvgVascularSurgery;
