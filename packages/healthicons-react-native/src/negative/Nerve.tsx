import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgNerve = (passedProps: SvgProps) => {
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
      <G clipPath="url(#nerve_svg__a)" fill="#333">
        <Path d="M22.487 22.51a1.5 1.5 0 1 1-2.999 0 1.5 1.5 0 0 1 2.999 0Z" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM24.936 9.446a1 1 0 0 0-.82-1.824 7.029 7.029 0 0 0-3.128 2.778 7.03 7.03 0 0 0-3.01-2.723 1 1 0 1 0-.855 1.808 5 5 0 0 1 2.864 4.505v.035a5 5 0 0 1-9.96.618 1 1 0 0 0-1.984.25 6.976 6.976 0 0 0 1.695 3.744 6.996 6.996 0 0 0-3.644 2.127 1 1 0 1 0 1.48 1.344 5 5 0 0 1 7.854 6.148 7.037 7.037 0 0 0-.21.291 4.991 4.991 0 0 1-4.956 1.817 1 1 0 1 0-.403 1.959 7.027 7.027 0 0 0 4.154-.41 6.972 6.972 0 0 0 .993 4.237 1 1 0 0 0 1.708-1.041 4.972 4.972 0 0 1-.727-2.597c0-1.033.313-1.993.85-2.79.073-.095.143-.192.212-.29a4.991 4.991 0 0 1 3.938-1.92c1.6 0 3.023.75 3.94 1.92l.012.017c.08.115.178.208.29.277-.145.453-.057.968.277 1.354.156.18.297.364.427.553.28.408.735.624 1.195.615a1.411 1.411 0 0 0-.242 1.352c.172.503.311 1.014.445 1.538.146.571.621.971 1.17 1.05a1.413 1.413 0 0 0-.372 1.62c.3.703.746 1.43 1.493 1.958.624.44 1.482.304 1.94-.3.198.638.83 1.063 1.516.98.314-.037.642-.093.984-.168.527-.115.92-.51 1.058-.995.202.06.423.056.633-.023l.06-.021c.1-.038.197-.08.293-.125l.187-.078c.88-.369 1.512-.632 2.154-.765.689-.143 1.396-.13 2.39.215a1 1 0 1 0 .656-1.89 7.386 7.386 0 0 0-1.554-.37c.75-.877 1.527-2.05 2.153-3.586a1 1 0 0 0-1.853-.755c-.525 1.29-1.168 2.268-1.778 2.992-.068-.736-.301-1.512-.709-2.302a1 1 0 0 0-1.777.917c.574 1.113.591 1.982.392 2.584a2.06 2.06 0 0 1-1.073 1.21l-.274.113a.995.995 0 0 0-.437.351 1.408 1.408 0 0 0-1.122-.231 7.733 7.733 0 0 1-.72.124 1.408 1.408 0 0 0-.956.548 1.406 1.406 0 0 0-.533-.732c-.164-.116-.34-.327-.526-.76a1.411 1.411 0 0 0-1.1-.844c.39-.34.578-.881.441-1.416-.139-.544-.3-1.143-.51-1.756a1.413 1.413 0 0 0-1.365-.954 1.413 1.413 0 0 0 .071-1.691 8.985 8.985 0 0 0-.622-.807 1.407 1.407 0 0 0-.888-.476 1 1 0 0 0-.2-.49l-.007-.009a5 5 0 0 1 7.955-6.034 1 1 0 1 0 1.52-1.299 7 7 0 0 0-3.784-2.285 6.974 6.974 0 0 0 1.71-3.879 1 1 0 1 0-1.988-.213 5 5 0 0 1-9.971-.521v-.035a5.001 5.001 0 0 1 2.948-4.544Z"
        />
      </G>
      <Defs>
        <ClipPath id="nerve_svg__a">
          <Path fill="#fff" d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgNerve;
