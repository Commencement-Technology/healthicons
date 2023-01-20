import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPediatrics = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
      ref={ref}
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9Zm19.055 8.278a4.278 4.278 0 1 1-8.555 0 4.278 4.278 0 0 1 8.555 0Zm-.388 9.032c1.361-.194 2.79-.488 4.369-.878a2 2 0 1 0-.96-3.883c-2.945.728-5.142 1.05-7.29 1.041-2.155-.008-4.36-.348-7.328-1.047a2 2 0 1 0-.916 3.894c1.567.369 2.99.657 4.347.853v1.488h7.778V23.31Zm-7.778 3.023v1.51c0 .492.444 1.757 1.805 2.363.156.07.33.156.488.235l.093.045c.193.096.38.186.57.267.394.167.702.247.933.247.23 0 .538-.08.933-.247.19-.08.377-.171.57-.267l.093-.046c.157-.078.332-.165.488-.234 1.361-.606 1.805-1.871 1.805-2.364v-1.509h-7.778Zm-2.664 7.77c0-1.743.664-3.064 1.871-4.115.372.628.99 1.26 1.909 1.678-.139.13-.27.282-.395.468-.39.579-.724 1.294-.724 1.969 0 .616.253 1.146.445 1.548l.013.03c.212.443.345.742.345 1.057 0 .71-.61 1.262-1.33 1.262-.672 0-1.203-.448-1.599-1.313-.387-.846-.535-1.89-.535-2.584Zm9.326-2.437c.92-.418 1.537-1.05 1.909-1.678 1.206 1.05 1.87 2.371 1.87 4.114 0 .696-.148 1.739-.534 2.584-.396.866-.928 1.313-1.6 1.313-.72 0-1.33-.551-1.33-1.261 0-.316.134-.614.345-1.058l.014-.03c.191-.401.444-.931.444-1.548 0-.674-.334-1.39-.723-1.969a2.733 2.733 0 0 0-.395-.467Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgPediatrics);
export default ForwardRef;
