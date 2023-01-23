import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgRespirology = (passedProps: SvgProps) => {
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
        d="M48 0H0v48h48V0ZM25.015 6h-.047H39a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h14.015-.047l.003 5.935.005 7.575c0 .786-.281 1.03-.417 1.123a.867.867 0 0 1-.35.137l-.008.001h.015l.005-.001h.003l.043.999.043.999h.01l.015-.001.036-.003a2.705 2.705 0 0 0 .411-.071 2.87 2.87 0 0 0 1.21-.648 2.87 2.87 0 0 0 1.62.72l.036.002h.02l.004.001.043-1 .043-.998h.015l.007.001h-.006a.866.866 0 0 1-.35-.137c-.136-.093-.418-.338-.418-1.124l.005-7.575L25.015 6Zm-3.55 15.563c.024-2.486.072-7.326-3.76-7.323-5.247.005-8.98 18.326-6.73 20.193 2.25 1.867 6.748.742 8.995-1.503 1.815-1.812 1.654-6.044 1.539-9.081-.025-.654-.048-1.254-.048-1.761l.003-.525Zm8.771-7.331c-3.83.003-3.775 4.843-3.746 7.328.002.19.004.366.004.525 0 .508-.021 1.107-.045 1.761-.11 3.038-.264 7.27 1.554 9.08 2.25 2.24 6.75 3.358 8.997 1.487 2.248-1.87-1.516-20.186-6.764-20.181Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgRespirology;