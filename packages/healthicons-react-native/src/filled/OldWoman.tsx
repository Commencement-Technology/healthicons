import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgOldWoman = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M32 28a3 3 0 1 1 6 0v15a1 1 0 1 1-2 0V28a1 1 0 1 0-2 0v.343a1 1 0 1 1-2 0V28Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 13a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm-10.081 4.001C13.21 15.741 15.049 15 17.255 15h7.32c4.973 0 7.944 1.722 9.62 3.759a8.443 8.443 0 0 1 1.494 2.695c.146.44.26.893.309 1.353v.015l.002.006v.003a1.722 1.722 0 0 1 0 .003c.095 1.1-.755 2.067-1.899 2.16-1.134.09-2.132-.714-2.241-1.801v-.002a3.488 3.488 0 0 0-.13-.52 4.492 4.492 0 0 0-.795-1.43c-.614-.746-1.777-1.682-4.066-2.065.009.061.013.123.013.187 0 2.43 2.883 13.139 3.824 16.573a.994.994 0 0 1-.802 1.246c-6.004.963-9.8.995-15.806.006a.993.993 0 0 1-.795-1.252c.457-1.62 1.357-4.861 2.168-8.104-1.447-.284-2.673-.92-3.607-1.838A6.214 6.214 0 0 1 10 21.481 6.336 6.336 0 0 1 11.92 17Zm2.958 2.81c.427-.416 1.137-.79 2.28-.81-.026.115-.04.236-.04.362 0 .906-.294 2.588-.725 4.567-.754-.13-1.246-.428-1.56-.737a2.294 2.294 0 0 1-.675-1.674 2.413 2.413 0 0 1 .72-1.708ZM16.5 39.015v3.482a1.5 1.5 0 0 0 2.95.383l.915-3.46a37.779 37.779 0 0 1-3.865-.405Zm7.134.398.916 3.467a1.5 1.5 0 0 0 2.95-.383v-3.496c-1.365.207-2.63.346-3.866.412Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgOldWoman);
export default ForwardRef;
