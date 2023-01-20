import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgNauseous = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M21.5 32a.996.996 0 0 0-.63.224c-.204-.658-.62-1.264-1.09-1.85a1 1 0 0 0-1.56 1.251c.626.782.774 1.17.78 1.42.005.212-.09.566-.74 1.282a1 1 0 1 0 1.48 1.346c.537-.592.97-1.2 1.158-1.875A.995.995 0 0 0 21.5 34h5a.995.995 0 0 0 .602-.202c.189.674.62 1.283 1.158 1.875a1 1 0 1 0 1.48-1.346c-.65-.715-.745-1.07-.74-1.281.006-.25.154-.639.78-1.42a1 1 0 0 0-1.56-1.251c-.47.585-.886 1.19-1.09 1.849A.996.996 0 0 0 26.5 32h-5ZM13.743 23.35c-.12.738.381 1.445 1.064 1.883.714.457 1.732.707 2.93.53a3.794 3.794 0 0 0 2.654-1.665c.504-.764.711-1.693.48-2.382a.5.5 0 0 0-.818-.203c-1.796 1.704-3.824 2.123-5.643 1.448a.5.5 0 0 0-.667.39ZM33.819 23.35c.119.738-.382 1.445-1.065 1.883-.714.457-1.731.707-2.93.53a3.794 3.794 0 0 1-2.653-1.665c-.504-.764-.712-1.693-.48-2.382a.5.5 0 0 1 .818-.203c1.796 1.704 3.824 2.123 5.642 1.448a.5.5 0 0 1 .668.39Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6s18 8.059 18 18Zm-2 0c0 8.837-7.163 16-16 16S8 32.837 8 24 15.163 8 24 8s16 7.163 16 16Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgNauseous);
export default ForwardRef;
