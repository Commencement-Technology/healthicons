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
        d="M17.5 9a5 5 0 1 1 10 0 5 5 0 0 1-10 0Zm5-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
        fill="#333"
      />
      <Path
        d="m18.165 19.46-.172 1.173c-.165 1.125-.483 2.605-.865 4.186l-.312 1.293-1.155-.658a3.32 3.32 0 0 1-.731-.56c-.625-.639-.942-1.501-.934-2.384a3.462 3.462 0 0 1 .98-2.4c.333-.339.774-.466 1.06-.526.32-.067.658-.089.943-.096l1.186-.028Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.132 17.3c1.448-1.469 3.48-2.3 5.842-2.3h7.037c5.046 0 8.207 1.833 10.03 4.138.996 1.259 1.774 2.874 1.945 4.57v.008l.002.018V23.744l.001.002v.006l.003.03v.003c.044.61-.097 1.19-.377 1.687A2.998 2.998 0 0 1 38 28v15a1 1 0 0 1-2 0V28a1 1 0 0 0-2 0v.343a1 1 0 0 1-2 0V28c0-.532.138-1.031.381-1.464a2.626 2.626 0 0 1-.542-.519c-.439-.554-.662-1.268-.817-1.767L31 24.183l-.066-.208a3.548 3.548 0 0 0-.595-1.113c-.34-.43-.957-1.011-2.132-1.41.77 3.812 2.672 10.531 3.439 13.189a1.993 1.993 0 0 1-1.618 2.524c-6.076.924-9.971.956-16.059.006a1.993 1.993 0 0 1-1.604-2.539c.357-1.203.964-3.28 1.588-5.555a7.329 7.329 0 0 1-1.877-1.383c-1.429-1.459-2.094-3.37-2.077-5.223a7.464 7.464 0 0 1 2.132-5.172Zm22.86 6.58.002.07v.033a.908.908 0 0 0 .005.061 1 1 0 0 1-.914.953c-.25.02-.388-.015-.464-.047a.53.53 0 0 1-.214-.173c-.184-.233-.311-.596-.497-1.192l-.07-.218a5.546 5.546 0 0 0-.931-1.746c-.772-.976-2.18-2.085-4.801-2.475l-1.323-.197.185 1.324c.476 3.403 2.894 11.938 3.753 14.916-5.88.894-9.568.923-15.438.006.403-1.356 1.12-3.813 1.825-6.421l.237-.878-.851-.32a5.43 5.43 0 0 1-1.99-1.282C12.479 25.246 11.987 23.86 12 22.49a5.463 5.463 0 0 1 1.556-3.787c1.037-1.05 2.54-1.703 4.418-1.703h7.037c4.512 0 7.064 1.611 8.462 3.379.806 1.02 1.39 2.273 1.52 3.5Z"
        fill="#333"
      />
      <Path
        d="M17.801 43.874a1.5 1.5 0 0 1-1.3-1.486v-3.374c1.364.203 2.63.333 3.867.393l-.92 3.375a1.5 1.5 0 0 1-1.647 1.092ZM24.553 42.782 23.63 39.4a40.98 40.98 0 0 0 3.87-.4v3.388a1.5 1.5 0 0 1-2.948.394Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgOldWoman);
export default ForwardRef;
