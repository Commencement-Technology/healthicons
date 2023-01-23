import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const Svg4X4 = (passedProps: SvgProps) => {
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
        d="M16.837 22.654a1.5 1.5 0 1 1-2.898-.776 1.5 1.5 0 0 1 2.898.776ZM32.386 28.374a1.5 1.5 0 1 0 .777-2.898 1.5 1.5 0 0 0-.777 2.898Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m13.207 14.953 1.448.388-.132.495-1.685 1.203a3 3 0 0 0-1.154 1.665l-1.29 4.812a3.001 3.001 0 0 0 1.331 3.336l-.904 3.377a1 1 0 0 0 .707 1.224l3.864 1.036a1 1 0 0 0 1.224-.707l.873-3.259 9.515 2.55h.002l1.296.348-.873 3.258a1 1 0 0 0 .707 1.224l3.863 1.036a1 1 0 0 0 1.225-.707l.955-3.564a3 3 0 0 0 2.295-2.163l1.32-4.927a3 3 0 0 0-.05-1.722l-.718-2.159a3.011 3.011 0 0 0-.159-.387l.005-.016 1.449.388a2 2 0 0 0 2.449-1.414l.906-3.381a2 2 0 0 0-1.414-2.45l-1.49-.399a3 3 0 0 0-2.21-3.18l-16.42-4.4a3 3 0 0 0-3.505 1.649l-1.49-.399a2 2 0 0 0-2.449 1.414l-.906 3.381a2 2 0 0 0 1.415 2.45ZM14.63 9.64l1.449.388-.906 3.38-1.449-.387.906-3.381ZM28.488 29.4l4.83 1.294a1 1 0 0 0 1.224-.707l1.32-4.927a1 1 0 0 0-.017-.574l-.717-2.159a1 1 0 0 0-.69-.65l-17.47-4.681a1 1 0 0 0-.84.152L14 18.666a1 1 0 0 0-.384.555l-1.29 4.813a1 1 0 0 0 .707 1.225l4.83 1.294 1.294-4.83a1 1 0 0 1 1.224-.707l8.694 2.33a1 1 0 0 1 .707 1.224l-1.294 4.83Zm-8.693-2.33 2.414.648.669-2.495a1 1 0 0 1 1.932.518l-.669 2.494 2.415.647 1.035-3.863-6.761-1.812-1.035 3.864Zm18.5-11.089 1.449.388-.906 3.381-1.449-.388.906-3.381Zm-1.544-1.966a1 1 0 0 0-.707-1.225l-16.42-4.4a1 1 0 0 0-1.225.706l-1.553 5.796 18.353 4.918 1.553-5.795Z"
        fill="#333"
      />
      <Path
        d="M11 34a5 5 0 0 0-5 5v2a1 1 0 1 0 2 0v-2a3 3 0 0 1 6 0v1a1 1 0 1 0 2 0 2 2 0 0 1 4 0 1 1 0 1 0 2 0 1 1 0 0 1 2 0v1a1 1 0 0 0 1.25.969 1 1 0 0 0 .25.031h9a1 1 0 1 0 0-2H26a3 3 0 0 0-4.8-2.4 4 4 0 0 0-5.68-.738A4.997 4.997 0 0 0 11 34Z"
        fill="#333"
      />
    </Svg>
  );
};
export default Svg4X4;
