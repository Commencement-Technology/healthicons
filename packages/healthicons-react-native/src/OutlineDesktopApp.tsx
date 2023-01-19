import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineDesktopApp = (
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
        d="M9.176 8.5C7.422 8.5 6 9.94 6 11.714V31c0 1.775 1.422 3.214 3.176 3.214h10.589v2.143h-4.236V38.5h16.942v-2.143h-4.236v-2.143h10.589C40.578 34.214 42 32.775 42 31V11.714C42 9.94 40.578 8.5 38.824 8.5H9.176Zm12.706 27.857h4.236v-2.143h-4.236v2.143ZM8.118 11.714c0-.591.474-1.071 1.058-1.071h29.648c.584 0 1.058.48 1.058 1.071V31c0 .592-.474 1.071-1.058 1.071H9.176c-.584 0-1.058-.48-1.058-1.071V11.714Zm7.411 1.072h-2.117v2.143h-2.118v2.142h2.118v2.143h2.117v-2.143h2.118V14.93h-2.118v-2.143Zm-3.176 8.571c-.585 0-1.06.48-1.06 1.072v4.285c0 .592.475 1.072 1.06 1.072h4.235c.585 0 1.059-.48 1.059-1.072V22.43c0-.592-.474-1.072-1.059-1.072h-4.235Zm1.059 4.286V23.5h2.117v2.143h-2.117Zm7.412-11.786c0-.592.474-1.071 1.059-1.071h4.235c.585 0 1.059.48 1.059 1.071v4.286c0 .592-.474 1.071-1.06 1.071h-4.234c-.585 0-1.06-.48-1.06-1.071v-4.286Zm2.117 1.072v2.142h2.118V14.93h-2.118Zm-1.058 6.428c-.585 0-1.06.48-1.06 1.072v4.285c0 .592.475 1.072 1.06 1.072h4.235c.585 0 1.059-.48 1.059-1.072V22.43c0-.592-.474-1.072-1.06-1.072h-4.234Zm1.058 4.286V23.5h2.118v2.143h-2.118Zm7.412-11.786c0-.592.474-1.071 1.059-1.071h4.235c.585 0 1.059.48 1.059 1.071v4.286c0 .592-.474 1.071-1.059 1.071h-4.235c-.585 0-1.059-.48-1.059-1.071v-4.286Zm2.118 1.072v2.142h2.117V14.93h-2.117Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineDesktopApp);
export default ForwardRef;
