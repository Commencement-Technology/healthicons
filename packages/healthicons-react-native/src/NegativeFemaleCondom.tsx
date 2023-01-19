import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegativeFemaleCondom = (
  passedProps: SvgProps,
  ref: Ref<SVGSVGElement>
) => {
  const context = React.useContext(HealthIconsContext);
  const props = {
    ...context,
    ...passedProps,
  };
  return (
    <Svg
      width="1.5em"
      height="1.5em"
      fill="none"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M20.546 36v-5.002c0-.647.246-1.267.377-1.586.129-.315.294-.668.44-.977l.097-.207c.18-.388.326-.717.428-1.004.086-.242.106-.362.11-.39v-.004a2.276 2.276 0 0 0-.11-.39 12.057 12.057 0 0 0-.428-1.003l-.098-.208c-.145-.309-.31-.662-.44-.976-.13-.32-.377-.94-.377-1.587v-.417c0-.685.27-1.295.415-1.605.137-.295.313-.621.458-.889l.093-.17c.178-.333.312-.597.402-.824.061-.156.08-.24.085-.267a2.332 2.332 0 0 0-.11-.386 12.057 12.057 0 0 0-.428-1.004l-.098-.207c-.144-.31-.31-.662-.44-.977-.13-.319-.377-.939-.377-1.586v-1.25c0-1.872-.634-3.104-1.432-3.872C18.291 8.421 17.165 8 16 8s-2.29.42-3.114 1.212c-.797.768-1.431 2-1.431 3.872v1.25c0 .647-.247 1.267-.378 1.586-.129.315-.294.668-.44.977l-.097.207c-.18.387-.326.717-.428 1.004a2.332 2.332 0 0 0-.11.386c.005.027.024.11.085.267.09.227.223.49.402.823l.092.171c.146.268.322.594.46.889.144.31.413.92.413 1.605v.417c0 .648-.246 1.268-.377 1.587a21.77 21.77 0 0 1-.44.976l-.097.208c-.18.387-.326.716-.428 1.003a2.276 2.276 0 0 0-.11.39v.004c.004.028.024.148.11.39.102.287.248.616.428 1.003l.098.208c.145.31.31.662.44.977.13.319.377.939.377 1.586V36h9.09ZM17 12a2 2 0 0 0-2 2 1 1 0 1 1-2 0 4 4 0 0 1 4-4 1 1 0 1 1 0 2Z"
        clipRule="evenodd"
      />
      <Path fill="#333" d="M40 18a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z" />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M0 0h48v48H0V0Zm6 39a3 3 0 0 1 3-3h.455v-5.002c0-.374-.294-1.001-.618-1.692C8.441 28.461 8 27.52 8 26.832c0-.688.44-1.629.837-2.474.324-.69.618-1.317.618-1.692v-.417c0-.374-.294-.917-.618-1.515C8.441 20.002 8 19.188 8 18.5s.44-1.629.837-2.474c.324-.69.618-1.318.618-1.692v-1.25c0-9.445 13.09-9.445 13.09 0v1.25c0 .374.294 1.001.618 1.692.396.845.837 1.786.837 2.474 0 .688-.44 1.502-.837 2.234-.324.598-.617 1.14-.617 1.515v.417c0 .375.293 1.002.617 1.692.396.845.837 1.786.837 2.474 0 .688-.44 1.629-.837 2.474-.324.69-.617 1.318-.617 1.692V36H23a3 3 0 1 1 0 6H9a3 3 0 0 1-3-3Zm36-21a8.001 8.001 0 0 1-7 7.938V29h3a1 1 0 1 1 0 2h-3v5a1 1 0 1 1-2 0v-5h-3a1 1 0 1 1 0-2h3v-3.062A8.001 8.001 0 0 1 34 10a8 8 0 0 1 8 8Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgNegativeFemaleCondom);
export default ForwardRef;
