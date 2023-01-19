import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineDatabase = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M38.908 10C38.08 7.75 31.721 6 24 6 16.28 6 9.92 7.75 9.092 10H9v28c0 2.21 6.716 4 15 4 8.284 0 15-1.79 15-4V10h-.092ZM37 10.666c-.072-.08-.258-.262-.684-.508-.632-.364-1.568-.738-2.8-1.071C31.067 8.424 27.727 8 24 8c-3.727 0-7.065.424-9.517 1.087-1.23.333-2.167.707-2.799 1.071-.426.246-.612.428-.684.508v27.027c.055.044.134.102.245.172.517.326 1.398.693 2.664 1.031C16.412 39.563 19.98 40 24 40s7.588-.437 10.091-1.104c1.266-.338 2.147-.705 2.664-1.03.11-.071.19-.129.245-.173V10.666Zm.11 26.92c.002 0-.003.008-.016.022a.09.09 0 0 1 .017-.021Zm-26.22 0 .016.022c-.013-.014-.018-.021-.017-.021Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="m37.045 10.275-.008.014a.055.055 0 0 1 .008-.014Zm-.222.225a3.101 3.101 0 0 0-.159-.12c-.51-.362-1.379-.77-2.632-1.146C31.55 8.489 28.004 8 24 8c-4.004 0-7.55.49-10.032 1.234-1.253.376-2.122.784-2.632 1.146a3.101 3.101 0 0 0-.16.12c.045.036.098.076.16.12.51.362 1.379.77 2.632 1.146C16.45 12.511 19.996 13 24 13c4.004 0 7.55-.49 10.032-1.234 1.253-.376 2.122-.784 2.632-1.146.062-.044.115-.084.16-.12Zm-25.868-.225.008.014a.049.049 0 0 1-.008-.014Zm0 .45.008-.014a.055.055 0 0 1-.008.014Zm26.082-.014a.049.049 0 0 1 .008.014l-.008-.014ZM24 15c8.284 0 15-2.015 15-4.5S32.284 6 24 6C15.716 6 9 8.015 9 10.5S15.716 15 24 15ZM9 19.5c0 2.485 6.716 4.5 15 4.5 8.284 0 15-2.015 15-4.5h-2.177a3.101 3.101 0 0 1-.159.12c-.51.362-1.379.77-2.632 1.146C31.55 21.511 28.004 22 24 22c-4.004 0-7.55-.49-10.032-1.234-1.253-.376-2.122-.784-2.632-1.146a3.101 3.101 0 0 1-.16-.12H9Zm1.955.225.008-.014a.055.055 0 0 1-.008.014Zm26.082-.014a.049.049 0 0 1 .008.014l-.008-.014ZM9 28.5c0 2.485 6.716 4.5 15 4.5 8.284 0 15-2.015 15-4.5h-2.177a3.101 3.101 0 0 1-.159.12c-.51.362-1.379.77-2.632 1.146C31.55 30.511 28.004 31 24 31c-4.004 0-7.55-.49-10.032-1.234-1.253-.376-2.122-.784-2.632-1.146a3.101 3.101 0 0 1-.16-.12H9Zm1.955.225.008-.014a.055.055 0 0 1-.008.014Zm26.082-.014a.049.049 0 0 1 .008.014l-.008-.014Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        d="M30 36.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm5-1a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineDatabase);
export default ForwardRef;
