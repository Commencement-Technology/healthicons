import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgWalkSupported = (passedProps: SvgProps) => {
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
        d="M28.425 9.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM38 28H23.752l4.486 4.426a2 2 0 0 1 .43.628l2.667 6.15a2 2 0 0 1-3.67 1.592L25.152 35 18.057 28H10a2 2 0 0 0-2 2v12H6V30a4 4 0 0 1 4-4h5.964c-.749-2.522-.474-5.128.117-7.144.317-1.081.745-2.066 1.224-2.852a6.55 6.55 0 0 1 .818-1.092c.283-.299.71-.675 1.28-.887 1.242-.461 2.544-.426 3.705.174 1.113.576 1.897 1.565 2.405 2.656.21.45.403.87.584 1.263v.001c.44.95.807 1.748 1.16 2.45.496.986.888 1.624 1.268 2.066.347.405.686.647 1.118.816.47.184 1.146.317 2.217.349a2 2 0 0 1 1.93 2.2H38a4 4 0 0 1 4 4v12h-2V30a2 2 0 0 0-2-2Zm-13.637-4.373L23.848 26h2.392a7.382 7.382 0 0 1-.75-.76 11.007 11.007 0 0 1-1.127-1.613Zm-7.877 6.146 3.3 3.166-1.247 4.21c-.05.171-.124.335-.218.486l-2.122 3.42a2 2 0 0 1-3.399-2.11l1.98-3.19 1.342-4.528.364-1.454Z"
      />
    </Svg>
  );
};
export default SvgWalkSupported;
