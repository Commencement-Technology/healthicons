import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgGroupDiscussionMeeting = (passedProps: SvgProps) => {
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
      fill="currentColor"
      color="currentColor"
      {...props}
    >
      <G clipPath="url(#group-discussion-meeting_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm14.5 32c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4Zm0 2C11.663 34 6 35.43 6 38.267V42h17v-3.733C23 35.429 17.337 34 14.5 34Zm19-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4Zm0 2c-2.837 0-8.5 1.43-8.5 4.267V42h17v-3.733C42 35.429 36.337 34 33.5 34ZM24 12.042A6.042 6.042 0 0 0 17.958 6h-5.916a6.042 6.042 0 1 0 0 12.083H13.2V21S24 19.542 24 12.042ZM32.042 7A6.042 6.042 0 0 0 26 13.042c0 7.5 9.6 8.958 9.6 8.958v-2.917h.358a6.042 6.042 0 1 0 0-12.083h-3.916Z"
        />
      </G>
      <Defs>
        <ClipPath id="group-discussion-meeting_svg__a">
          <Path d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgGroupDiscussionMeeting;
