import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledCommunityHealthworker = (
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
        d="M18.412 9.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm1.082 5.541a1.505 1.505 0 0 0-.347-.04H13.31a.78.78 0 0 0-.026 0h-2.609c-.117 0-.232.014-.346.041-1.128.269-1.911.922-2.416 1.86-.44.818-.654 1.835-.831 2.839l-1.059 6a1.5 1.5 0 0 0 2.954.521l1.06-6c.123-.703.234-1.19.35-1.538l.29 3.276c0 1.866-1.786 10.372-2.424 13.351a.99.99 0 0 0 .83 1.19c4.398.623 7.26.603 11.658-.004a.99.99 0 0 0 .835-1.186c-.633-3.026-2.429-11.747-2.429-13.35l.29-3.277c.115.347.226.835.35 1.537l1.06 6a1.5 1.5 0 0 0 2.953-.521l-1.058-6c-.177-1.003-.392-2.021-.832-2.84-.504-.936-1.287-1.59-2.416-1.859Zm-8.221 26.09-.398-3.013c1.08.125 2.11.206 3.123.244l-.766 2.894a1 1 0 0 1-1.959-.125Zm5.319.125-.76-2.871a38.913 38.913 0 0 0 3.104-.168l-.386 2.914a1 1 0 0 1-1.958.125Zm16.82-34.17 7.207 7.207-1.414 1.414-1.293-1.293V20h-3v-2.5a1.5 1.5 0 0 0-3 0V20h-3v-5.586l-1.293 1.293-1.414-1.414 7.207-7.207Zm0 17.5 9.207 9.207-1.414 1.414-1.909-1.908v7.74h-3.923v-3.27a1.962 1.962 0 0 0-3.923 0v3.27h-3.923v-7.74l-1.908 1.908-1.414-1.414 9.207-9.207Z"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgFilledCommunityHealthworker);
export default ForwardRef;
