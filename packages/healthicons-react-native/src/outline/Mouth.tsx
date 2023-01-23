import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgMouth = (passedProps: SvgProps) => {
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
        d="M24 14.182C15.2 10.254 7 18.545 4 24c3 4.364 11.2 12 20 12s17-7.636 20-12c-3-5.455-11-14.182-20-9.818Zm17.604 9.694c-1.464-2.32-3.734-4.995-6.458-6.8-3.11-2.059-6.598-2.877-10.274-1.095a2 2 0 0 1-1.687.027c-3.593-1.603-7.119-.782-10.28 1.248C10.158 19.02 7.86 21.608 6.4 23.88c1.471 1.86 3.772 4.166 6.569 6.114C16.31 32.322 20.162 34 24 34s7.69-1.678 11.032-4.005c2.8-1.95 5.102-4.258 6.572-6.12Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.555 23.958C15.683 24.992 19.745 26 24 26c4.196 0 8.204-1.037 11.334-2.077C32.155 22.912 28.066 22 24 22c-4.114 0-8.252.934-11.445 1.958Zm-3.521-.86C12.448 21.73 18.202 20 24 20c5.7 0 11.36 1.672 14.793 3.03.828.327.777 1.493-.057 1.806C35.414 26.079 29.919 28 24 28c-6.04 0-11.636-1.894-14.935-3.174-.804-.312-.832-1.406-.031-1.727Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgMouth;