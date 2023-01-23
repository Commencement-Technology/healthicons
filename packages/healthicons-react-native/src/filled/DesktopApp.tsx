import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgDesktopApp = (passedProps: SvgProps) => {
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
        d="M9.176 8.5C7.422 8.5 6 9.94 6 11.714V31c0 1.775 1.422 3.214 3.176 3.214h10.589v2.143h-4.236V38.5h16.942v-2.143h-4.236v-2.143h10.589C40.578 34.214 42 32.775 42 31V11.714C42 9.94 40.578 8.5 38.824 8.5H9.176Zm12.706 27.857v-2.143h4.236v2.143h-4.236Zm-8.47-23.571h2.118v2.143h2.118v2.143H15.53v2.142h-2.118v-2.142h-2.118v-2.143h2.118v-2.143ZM11.294 23.5c0-.592.474-1.071 1.059-1.071h4.235c.585 0 1.059.48 1.059 1.071v4.286c0 .591-.474 1.071-1.059 1.071h-4.235c-.585 0-1.06-.48-1.06-1.071V23.5Zm9.53-9.643c0-.591.473-1.071 1.058-1.071h4.235c.585 0 1.06.48 1.06 1.071v4.286c0 .592-.475 1.071-1.06 1.071h-4.235c-.585 0-1.059-.48-1.059-1.071v-4.286Zm0 9.643c0-.592.473-1.071 1.058-1.071h4.235c.585 0 1.06.48 1.06 1.071v4.286c0 .591-.475 1.071-1.06 1.071h-4.235c-.585 0-1.059-.48-1.059-1.071V23.5Zm9.529-9.643c0-.591.474-1.071 1.059-1.071h4.235c.585 0 1.059.48 1.059 1.071v4.286c0 .592-.474 1.071-1.06 1.071h-4.234c-.585 0-1.06-.48-1.06-1.071v-4.286Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgDesktopApp;
