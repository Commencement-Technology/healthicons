import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgOpenMrsLogo = (passedProps: SvgProps) => {
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
        d="M15.301 7.192C17.89 5.858 20.861 5 24.011 5c3.13 0 6.088.758 8.693 2.1a1 1 0 0 1 .542.89l-.007 6.767 6.773.005a1 1 0 0 1 .888.542 18.937 18.937 0 0 1 2.1 8.695c0 3.13-.757 6.087-2.1 8.693a1 1 0 0 1-.89.542l-6.774-.008-.005 6.785a1 1 0 0 1-.542.889 18.928 18.928 0 0 1-8.694 2.1c-3.13 0-6.087-.757-8.694-2.1a1 1 0 0 1-.542-.89l.008-6.777-6.778-.005a1 1 0 0 1-.889-.542A18.935 18.935 0 0 1 5 23.992c0-3.131.758-6.087 2.1-8.694a1 1 0 0 1 .89-.542l6.777.007-.008-6.681a1 1 0 0 1 .542-.89Zm-1.68 9.57-5.01-.006A16.947 16.947 0 0 0 7 23.992c0 2.59.578 5.042 1.611 7.237l5.017.003a12.599 12.599 0 0 1-2.275-7.24c0-2.688.84-5.18 2.267-7.23Zm2.943 14.867a1.013 1.013 0 0 0-.09-.103 10.618 10.618 0 0 1-3.12-7.534c0-2.881 1.141-5.493 2.998-7.413a.997.997 0 0 0 .123-.104 10.622 10.622 0 0 1 7.537-3.121 10.62 10.62 0 0 1 7.442 3.029.988.988 0 0 0 .072.08 10.62 10.62 0 0 1 3.12 7.536c0 2.915-1.168 5.555-3.064 7.478a.982.982 0 0 0-.052.049 10.617 10.617 0 0 1-7.535 3.12c-2.89 0-5.51-1.149-7.431-3.017Zm.201 2.75-.005 5.01A16.944 16.944 0 0 0 23.995 41c2.59 0 5.043-.578 7.237-1.611l.003-5.017a12.6 12.6 0 0 1-7.24 2.274c-2.687 0-5.18-.838-7.23-2.266Zm17.616-3.151 5.009.005A16.941 16.941 0 0 0 41 24c0-2.59-.578-5.043-1.611-7.238l-5.017-.003a12.604 12.604 0 0 1 2.275 7.241c0 2.687-.838 5.18-2.266 7.229ZM31.24 13.62l.005-5.01A16.94 16.94 0 0 0 24.012 7c-2.573 0-5.04.648-7.252 1.7l.006 4.931a12.605 12.605 0 0 1 7.246-2.277c2.687 0 5.18.838 7.228 2.266Z"
      />
    </Svg>
  );
};
export default SvgOpenMrsLogo;
