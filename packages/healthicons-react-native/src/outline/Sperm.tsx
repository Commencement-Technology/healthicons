import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgSperm = (passedProps: SvgProps) => {
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
        d="M31.194 8.632c2.923-2.923 7.494-3.653 10.174-.973 2.68 2.68 1.95 7.25-.973 10.174-2.298 2.297-5.519 3.206-8.125 2.267a.306.306 0 0 0-.148-.018.092.092 0 0 0-.027.008l-.023.023a4.316 4.316 0 0 1-3.298 1.37l-3.013-.112c-1.61-.06-2.807 1.578-2.283 3.059l.256.723c1.447 4.089-1.828 8.432-6.161 8.23l-1.836-.084a.435.435 0 0 0-.435.498l.29 1.523c.565 2.956-1.544 5.823-4.532 6.206l-1.365.174a2.372 2.372 0 0 1-.602-4.704l1.468-.188a.437.437 0 0 0 .37-.496l-.29-1.523c-.63-3.303 2.06-6.398 5.42-6.242l1.835.086c.955.044 1.67-.934 1.362-1.803l-.256-.724c-1.657-4.683 2.069-9.673 7.039-9.488l2.78.104.034-.033a.086.086 0 0 0 .007-.025.292.292 0 0 0-.012-.136c-.807-2.563.11-5.663 2.344-7.896Zm-2.34 8.058v-.001.001Zm11.1-7.617c-1.62-1.62-4.893-1.48-7.345.973-1.815 1.815-2.392 4.165-1.852 5.882.214.68.134 1.55-.485 2.171l-.175.176c-.286.299-.691.47-1.117.454l-3.014-.112c-3.582-.134-6.257 3.492-5.079 6.822l.256.723c.79 2.23-.99 4.578-3.34 4.469l-1.835-.086c-2.072-.096-3.75 1.84-3.363 3.87l.29 1.522c.262 1.368-.708 2.679-2.08 2.855l-1.468.188a.371.371 0 1 0 .094.737l1.365-.175c1.86-.239 3.167-2.04 2.822-3.848l-.29-1.522c-.291-1.525.943-2.943 2.492-2.871l1.836.085c2.937.137 5.148-2.837 4.183-5.566l-.256-.723c-1.003-2.835 1.246-5.836 4.242-5.724l3.014.112a2.317 2.317 0 0 0 1.772-.748l.011-.012.048-.048c.65-.652 1.57-.71 2.268-.459 1.728.623 4.161.072 6.033-1.8 2.452-2.452 2.593-5.725.973-7.345Z"
      />
    </Svg>
  );
};
export default SvgSperm;
