import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgForest = (passedProps: SvgProps) => {
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
        d="M14 29.927C9.5 29.264 6 24.177 6 18c0-6.627 4.03-12 9-12s9 5.373 9 12c0 6.177-3.5 11.264-8 11.927V37h16v-6.954h-4.727a3.273 3.273 0 0 1-1.468-6.199 4.092 4.092 0 0 1 2.411-4.968 4.909 4.909 0 1 1 9.568 0 4.092 4.092 0 0 1 2.411 4.968 3.273 3.273 0 0 1-1.468 6.199H34V37h5.5a2.5 2.5 0 0 1 0 5h-31a2.5 2.5 0 0 1 0-5H14v-7.073ZM22 18c0 2.923-.891 5.492-2.236 7.285-1.082 1.443-2.398 2.322-3.764 2.61V24.5h-2v3.395c-1.366-.288-2.682-1.167-3.764-2.61C8.891 23.492 8 20.923 8 18s.891-5.492 2.236-7.285C11.581 8.922 13.286 8 15 8c1.715 0 3.42.922 4.764 2.715C21.109 12.508 22 15.077 22 18Zm13.835.43-.386 1.673 1.596.635a2.092 2.092 0 0 1 1.233 2.54l-.476 1.605 1.495.751a1.273 1.273 0 0 1-.57 2.412H34V25.5h-2v2.546h-4.727a1.273 1.273 0 0 1-.57-2.412l1.495-.751-.476-1.604a2.092 2.092 0 0 1 1.233-2.54l1.595-.636-.385-1.673a2.909 2.909 0 1 1 5.67 0ZM8 39.5a.5.5 0 0 1 .5-.5h31a.5.5 0 0 1 0 1h-31a.5.5 0 0 1-.5-.5Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgForest;