import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgSocialWork = (passedProps: SvgProps) => {
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
        d="M39 8H9a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1ZM9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9Z"
        fill="#333"
      />
      <Path
        d="M33.99 34.635c-.416.421-.829.84-1.217 1.372V37H27v-.993c.098-.773.597-2.166.612-2.553.02-.544.786-1.537.786-1.537l2.348-2.828s.664-.67 1.045-1.414c.38-.744 1.19.192 1.297.861.107.67-.097 1.022-.097 1.022l-1.342 2.547s1.555-2.035 2.038-2.853c.245-.414.313-1.292.39-2.272.074-.956.156-2.009.416-2.828.527-1.66 2.052-1.244 2.317-.503.264.742.204 5.642.108 6.458-.075.64-.478 1.266-.934 1.971-.126.196-.256.397-.384.607-.51.835-1.063 1.395-1.61 1.95ZM28 42a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4ZM12.957 34.635c.417.421.831.84 1.22 1.372V37H20v-.993c-.098-.773-.27-2.166-.285-2.553-.021-.544-.789-1.537-.789-1.537l-2.355-2.828s-.667-.67-1.049-1.414c-.381-.744-1.193.192-1.301.861-.108.67.097 1.022.097 1.022l1.346 2.547s-1.56-2.035-2.045-2.853c-.245-.414-.314-1.292-.39-2.272-.075-.956-.157-2.009-.418-2.828-.529-1.66-2.06-1.244-2.325-.503-.265.742-.564 5.642-.468 6.458.076.64.48 1.266.938 1.971.126.196.257.397.385.607.512.835 1.067 1.395 1.616 1.95ZM19 42a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h4ZM15 17.207C15 13.987 17.018 11 19.781 11c1.918 0 3.34 1.34 4.219 3.24.878-1.9 2.301-3.24 4.219-3.24C30.982 11 33 13.987 33 17.207 33 24.1 24 29 24 29s-9-4.604-9-11.793Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgSocialWork;
