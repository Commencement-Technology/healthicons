import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPolygon = (passedProps: SvgProps) => {
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
      <Path d="M18 38a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" fill="#333" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 40a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        fill="#333"
      />
      <Path d="M14 20a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" fill="#333" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        fill="#333"
      />
      <Path d="M42 20a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" fill="#333" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M38 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        fill="#333"
      />
      <Path d="M38 38a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" fill="#333" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34 40a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        fill="#333"
      />
      <Path d="M28 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" fill="#333" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m34.919 19.028-9-6.429 1.162-1.627 9 6.429-1.162 1.627Zm-13.135-6.217-8.703 6.217-1.162-1.627 8.703-6.217 1.162 1.627Zm-10.141 9.972 2.666 12-1.952.434-2.667-12 1.953-.434Zm22.047 12 2.556-11.5 1.952.434-2.555 11.5-1.953-.434ZM17 37h14v2H17v-2Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgPolygon;
