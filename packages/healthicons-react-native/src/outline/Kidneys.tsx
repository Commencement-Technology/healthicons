import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgKidneys = (passedProps: SvgProps) => {
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
        d="M12.548 30.753c-10.864-4.582-6.577-20.049.965-22.604 3.129-1.06 6.58 2.457 6.559 4.64-.01.945-.497 1.865-1.005 2.825-.666 1.259-1.368 2.584-1.07 4.117.525 2.7 1.113 7.256-.402 9.419-1.515 2.162-3.038 2.45-5.047 1.604Zm.777-1.842c.783.33 1.167.308 1.378.247.217-.062.64-.278 1.254-1.156.373-.532.627-1.655.604-3.333-.02-1.577-.275-3.259-.527-4.556-.404-2.08.426-3.818 1.019-4.965l.28-.535c.199-.374.358-.675.498-.997.188-.43.24-.684.24-.847.001-.052-.034-.316-.293-.752a4.765 4.765 0 0 0-1.068-1.214c-.963-.785-1.895-.984-2.555-.76-2.81.952-5.452 4.619-6.045 8.922-.57 4.127.84 8.1 5.215 9.946ZM34.347 8.149c7.542 2.555 11.83 18.022.965 22.605-2.009.847-3.532.558-5.047-1.604-1.515-2.163-.927-6.719-.402-9.419.298-1.533-.404-2.858-1.07-4.118-.508-.959-.995-1.88-1.004-2.823-.022-2.184 3.43-5.701 6.558-4.641Zm-1.19 21.01c.211.06.596.082 1.378-.248 4.375-1.845 5.785-5.819 5.216-9.947-.594-4.302-3.235-7.969-6.045-8.92-.66-.225-1.593-.026-2.556.76-.454.37-.824.805-1.067 1.213-.26.436-.295.7-.294.752.001.163.053.418.24.847.14.322.3.623.498.997.085.162.179.338.28.535.593 1.147 1.424 2.884 1.02 4.965-.253 1.297-.507 2.98-.528 4.556-.022 1.678.232 2.801.604 3.333.615.878 1.038 1.094 1.254 1.156Z"
        fill="#000"
      />
      <Path
        d="m28.618 22.78.07.997h.016s-.01 0-.025.003a1.551 1.551 0 0 0-.616.258c-.29.206-.716.664-.716 1.82v14.467h-2V25.857c0-1.766.71-2.847 1.555-3.45a3.552 3.552 0 0 1 1.46-.603 2.47 2.47 0 0 1 .16-.02l.016-.002H28.548s.002 0 .07.997ZM19.242 22.78c-.068.997-.07.997-.07.997h-.015s.01 0 .024.003a1.553 1.553 0 0 1 .617.258c.29.206.716.664.716 1.82v14.467h2V25.857c0-1.766-.71-2.847-1.556-3.45a3.55 3.55 0 0 0-1.46-.603 2.472 2.472 0 0 0-.16-.02l-.015-.002H19.312l-.07.997Z"
        fill="#000"
      />
    </Svg>
  );
};
export default SvgKidneys;
