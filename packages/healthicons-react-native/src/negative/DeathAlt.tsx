import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgDeathAlt = (passedProps: SvgProps) => {
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
      <G clipPath="url(#death_alt_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm15.415 25.31c.13.014.319.025.585.025.87 0 1.702.189 2.42.645a3.817 3.817 0 0 1 1.454 1.72c.323.738.42 1.546.448 2.173.798.12 1.993.127 3.678.127 1.685 0 2.88-.006 3.678-.127.028-.628.125-1.435.448-2.174a3.817 3.817 0 0 1 1.453-1.72c.72-.455 1.551-.644 2.421-.644.267 0 .455-.01.585-.024a3.12 3.12 0 0 0 .012-.08c.048-.339.07-.826.07-1.56 0-1.841.74-2.947 1.205-3.645.091-.136.172-.256.234-.363.36-.616.894-1.742.894-4.99 0-2.861-1.272-4.952-3.241-6.389C29.73 6.804 26.918 6 24 6s-5.73.804-7.759 2.284C14.272 9.721 13 11.812 13 14.674c0 3.247.535 4.373.894 4.99.063.106.143.227.234.362.466.698 1.205 1.804 1.205 3.644 0 .735.022 1.222.07 1.56l.012.08Zm-2.082-1.64c0 2.999.334 3.665 2.667 3.665 2.333 0 2.333 2 2.333 3.332C18.333 32 20.667 32 24 32c3.333 0 5.667 0 5.667-1.333s0-3.332 2.333-3.332 2.667-.666 2.667-3.665c0-1.186.365-1.747.806-2.424C36.148 20.21 37 18.903 37 14.674c0-14.232-26-14.232-26 0 0 4.229.852 5.537 1.527 6.572.441.677.806 1.238.806 2.424Zm5.668-1.672a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm13.001-3a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-22.3 23.05 11.023-3.545-11.03-3.528.61-1.905 13.694 4.38 13.688-4.402.612 1.904-11.024 3.545 11.03 3.528-.61 1.905-13.694-4.38-13.688 4.402-.612-1.904Z"
        />
      </G>
      <Defs>
        <ClipPath id="death_alt_svg__a">
          <Path d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgDeathAlt;
