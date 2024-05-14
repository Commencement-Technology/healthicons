import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgHazardous = (passedProps: SvgProps) => {
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
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.915 37.44 27.701 30c-.44.339-.93.619-1.46.827a6.106 6.106 0 0 1-2.24.422c-.793 0-1.55-.15-2.242-.422A5.985 5.985 0 0 1 20.3 30l-4.216 7.44a.64.64 0 0 0-.059.495.662.662 0 0 0 .315.393c4.667 2.61 10.654 2.61 15.318 0a.661.661 0 0 0 .317-.393.638.638 0 0 0-.06-.495Zm-10.848-4.736-2.536 4.476c3.44 1.474 7.5 1.474 10.938 0l-2.536-4.476c-.91.352-1.9.545-2.933.545a8.103 8.103 0 0 1-2.933-.546ZM8.599 24.063l8.55.07a5.99 5.99 0 0 1 .014-1.677c.11-.735.358-1.465.755-2.152a6.104 6.104 0 0 1 1.486-1.73 5.987 5.987 0 0 1 1.446-.85l-4.336-7.371a.64.64 0 0 0-.398-.299.662.662 0 0 0-.499.077c-4.593 2.736-7.587 7.92-7.659 13.265a.661.661 0 0 0 .183.471c.12.125.284.195.458.196Zm9.526-7.027-2.608-4.434c-2.997 2.241-5.027 5.758-5.47 9.473l5.145.042c.15-.964.477-1.918.994-2.813a8.103 8.103 0 0 1 1.94-2.268ZM31.486 10.496l-4.336 7.37c.513.212 1 .497 1.445.85a6.105 6.105 0 0 1 1.487 1.73c.396.687.645 1.417.754 2.152.084.562.087 1.127.014 1.677l8.551-.069a.64.64 0 0 0 .458-.196.662.662 0 0 0 .183-.47c-.073-5.346-3.066-10.53-7.659-13.265a.662.662 0 0 0-.498-.078.638.638 0 0 0-.4.299Zm1.322 11.763 5.145-.041c-.443-3.717-2.474-7.233-5.47-9.473l-2.608 4.434a8.103 8.103 0 0 1 1.939 2.267c.516.895.844 1.85.994 2.813ZM24 27a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0 2a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 42c9.941 0 18-8.059 18-18S33.941 6 24 6 6 14.059 6 24s8.059 18 18 18Zm0 2c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Z"
      />
    </Svg>
  );
};
export default SvgHazardous;
