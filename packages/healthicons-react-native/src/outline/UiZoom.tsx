import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgUiZoom = (passedProps: SvgProps) => {
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
      fill="currentColor"
      color="currentColor"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M42 21c0 8.284-6.716 15-15 15-3.782 0-7.238-1.4-9.876-3.71l-1.828 1.828.004 2.825-6.472 6.471-4.242-4.242 6.524-6.524 2.707.12 1.893-1.892A14.943 14.943 0 0 1 12 21c0-8.284 6.716-15 15-15 8.284 0 15 6.716 15 15Zm-2 0c0 7.18-5.82 13-13 13s-13-5.82-13-13S19.82 8 27 8s13 5.82 13 13ZM7.414 39.172l1.414 1.414 4.47-4.47-.001-1.368-1.397-.063-4.486 4.487Z"
      />
    </Svg>
  );
};
export default SvgUiZoom;
