import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgStarMedium = (passedProps: SvgProps) => {
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
        d="m16.34 28.324 1.972.335-1.018 5.998 5.305-2.817a2.986 2.986 0 0 1 2.802 0l5.305 2.817-1.018-5.998a3.012 3.012 0 0 1 .855-2.65l4.332-4.266-5.968-.877a2.996 2.996 0 0 1-2.256-1.65l1.797-.878a.996.996 0 0 0 .749.55l7.95 1.167c.816.12 1.142 1.133.551 1.714l-5.752 5.665c-.235.231-.342.564-.286.89l1.358 7.999c.139.82-.714 1.447-1.444 1.06l-7.11-3.777a.987.987 0 0 0-.927 0l-7.11 3.776c-.73.388-1.584-.238-1.445-1.06l1.358-7.998Zm-6.038-6.555c-.591-.581-.265-1.595.551-1.714l7.95-1.167a.996.996 0 0 0 .75-.55l1.796.878a2.996 2.996 0 0 1-2.255 1.65l-5.97.877 4.333 4.266a3.012 3.012 0 0 1 .855 2.65l-1.972-.335a1.012 1.012 0 0 0-.286-.89l-5.752-5.665ZM24 13.79l2.65 5.426 1.798-.878-3.556-7.278a.99.99 0 0 0-1.784 0l-3.556 7.278 1.797.878L24 13.79Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgStarMedium;