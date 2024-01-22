import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgFever = (passedProps: SvgProps) => {
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
        d="M24 6c2.711 0 5.282.6 7.588 1.673-.32.585-.608 1.19-.85 1.811A15.94 15.94 0 0 0 24 8C15.163 8 8 15.163 8 24s7.163 16 16 16 16-7.163 16-16c0-1.53-.215-3.01-.616-4.411a7.012 7.012 0 0 0 1.801-.96c.53 1.697.815 3.5.815 5.371 0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6Z"
        fill="#000"
      />
      <Path
        d="M41 13a4 4 0 0 1-8 0c0-3.5 4-7 4-7s4 3.5 4 7ZM16.593 33c.225-.58.487-1.131.783-1.647l-1.711-1.466a2 2 0 1 1 1.301-1.519l1.568 1.344C19.995 28.023 21.907 27 24 27c3.23 0 6.03 2.438 7.407 6 .387 1.003-.42 2-1.495 2h-5.479l-5.203-4.506-1.31 1.512L21.379 35h-3.29c-1.075 0-1.882-.997-1.495-2ZM14.696 21.758c-.684-.438-1.184-1.145-1.065-1.883a.5.5 0 0 1 .668-.39c1.818.676 3.846.257 5.642-1.448a.5.5 0 0 1 .818.204c.232.688.024 1.618-.48 2.381a3.794 3.794 0 0 1-2.654 1.666c-1.198.177-2.216-.073-2.93-.53ZM32.642 21.758c.683-.438 1.184-1.145 1.065-1.883a.5.5 0 0 0-.668-.39c-1.818.676-3.846.257-5.642-1.448a.5.5 0 0 0-.818.204c-.232.688-.024 1.618.48 2.381a3.794 3.794 0 0 0 2.654 1.666c1.198.177 2.216-.073 2.93-.53Z"
        fill="#000"
      />
    </Svg>
  );
};
export default SvgFever;
