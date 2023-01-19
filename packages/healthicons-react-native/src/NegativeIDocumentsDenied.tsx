import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegativeIDocumentsDenied = (
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
        d="m29 8 6 6h-5a1 1 0 0 1-1-1V8Zm-6.293 12.293a1 1 0 0 0-1.414 1.414L24.586 25l-3.293 3.293a1 1 0 0 0 1.414 1.414L26 26.414l3.293 3.293a1 1 0 0 0 1.414-1.414L27.414 25l3.293-3.293a1 1 0 0 0-1.414-1.414L26 23.586l-3.293-3.293Z"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M0 0h48v48H0V0Zm29 5H16a2 2 0 0 0-2 2v30a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V14l-9-9Zm-17 6h-2v27a5 5 0 0 0 5 5h19v-2H15a3 3 0 0 1-3-3V11Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgNegativeIDocumentsDenied);
export default ForwardRef;
