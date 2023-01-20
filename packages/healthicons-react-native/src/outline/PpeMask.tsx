import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPpeMask = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M30.242 20.03 24 18.47l-6.242 1.56a1 1 0 1 0 .485 1.94L24 20.53l5.758 1.44a1 1 0 0 0 .485-1.94Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 16.868c0-4.226 11.16-4.226 11.16-4.226l.901-1.616A2 2 0 0 1 22.808 10h2.559a2 2 0 0 1 1.747 1.026l.9 1.616S39 12.642 39 16.867v.167l1.73.42a4 4 0 0 1 3.042 4.235l-.554 6.35a4 4 0 0 1-2.687 3.435l-7.091 2.431C29.344 38 24.484 38 24.484 38h-.968s-4.865 0-8.963-4.1l-7.192-2.798a4 4 0 0 1-2.532-3.348l-.573-6.021a4 4 0 0 1 3.114-4.284L9 17.087v-.219Zm.058 2.255-1.254.278a2 2 0 0 0-1.557 2.142l.573 6.021a2 2 0 0 0 1.266 1.674l4.097 1.593c-1.628-2.73-2.851-6.501-3.125-11.708Zm26.648 11.892 4.176-1.431a2 2 0 0 0 1.344-1.719l.554-6.35a2 2 0 0 0-1.521-2.117l-1.315-.319c-.275 5.348-1.55 9.184-3.238 11.936ZM22.803 12.011c-.125.221-.24.435-.35.638-.633 1.176-1.076 1.998-2.275 1.998-5.941 0-8.988 1.573-8.988 2.145 0 16.445 8.974 19.027 12.592 19.198a2.39 2.39 0 0 0 .308.01h.09c.075 0 .147-.003.218-.01 3.619-.17 12.592-2.753 12.592-19.198 0-.572-3.046-2.145-8.988-2.145-1.199 0-1.642-.822-2.275-1.998-.11-.203-.224-.417-.35-.638h-2.574Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgPpeMask);
export default ForwardRef;
