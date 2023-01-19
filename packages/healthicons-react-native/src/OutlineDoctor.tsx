import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineDoctor = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M34 16c0 5.523-4.477 10-10 10s-10-4.477-10-10S18.477 6 24 6s10 4.477 10 10Zm-2 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0ZM17.914 28.855l.011.022.075.147h11.749c.229-.434.748-1.126 1.251-1.011 1.13.257 2.268.615 3.361 1.056l.033-.016.011.022.008.015C38.528 30.762 42 33.596 42 36.57V42H6v-5.43c0-3.775 5.596-7.327 11-8.557.441-.1.703.42.914.842Zm14.79 1.728a20.33 20.33 0 0 0-1.301-.407l-.446.848H16.793l-.414-.787-.36.108c-.007.066-.013.14-.016.224-.013.345.013.754.07 1.17a8.087 8.087 0 0 0 .28 1.281 3 3 0 1 1-1.957.444l-.008-.028a10.082 10.082 0 0 1-.297-1.426 9.987 9.987 0 0 1-.084-.928c-1.236.528-2.389 1.166-3.355 1.87C8.73 34.356 8 35.668 8 36.57V40h32v-3.43c0-.903-.73-2.215-2.652-3.617a16.564 16.564 0 0 0-2.666-1.562A10.446 10.446 0 0 1 34.434 33H35a1 1 0 0 1 .894.553l1 2c.07.139.106.292.106.447v2a1 1 0 0 1-1 1h-2v-2h1v-.764L34.382 35h-2.764L31 36.236V37h1v2h-2a1 1 0 0 1-1-1v-2c0-.155.036-.308.106-.447l1-2A1 1 0 0 1 31 33h1.362c.012-.04.025-.08.037-.124.094-.321.178-.72.235-1.136.056-.412.082-.815.07-1.157ZM17 36c0 .574-.462 1.015-1 1.015s-1-.44-1-1.015c0-.574.462-1.015 1-1.015s1 .44 1 1.015Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineDoctor);
export default ForwardRef;
