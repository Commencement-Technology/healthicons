import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgFhirLogo = (passedProps: SvgProps) => {
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
        d="M18.665 34.565c.397-3.172 1.945-6.509 4.817-9.865 3.066-3.584 3.34-7.46 2.539-10.967-1.006 2.281-2.842 4.906-6.04 8.115-3.265 3.957-3.644 7.965-2.685 11.233a11.966 11.966 0 0 0 1.269 2.861c.009-.452.042-.911.1-1.377Zm2.191 4.1c-.873-3.574.11-7.95 4.145-12.665 4.597-5.372 3.767-11.264 2.011-15.79C26.391 8.607 25.654 7.176 25 6c0 .391.026.791.052 1.208.061.957.128 2.004-.093 3.25-.422 2.377-1.894 5.477-6.459 10.042-6.08 7.297-3.674 15.194.58 19.253.993.948 2.087 1.686 3.196 2.16a10.424 10.424 0 0 1-1.42-3.249Z"
        fill="#000"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.78 29.16c-3.514 3.638-2.365 10.312-1.284 12.84 4.185-.206 9.186-1.411 10.983-8.154.228-.856.404-1.802.521-2.846-.13.278-.686.656-1.344 1.017-.292.16-.605.317-.909.46-.697.33-1.35.587-1.614.65.352-.849.627-1.681.835-2.493 1.039-4.053.419-7.591-.46-10.114-.876-2.514-2.008-4.02-2.008-4.02s.459 1.64-.056 4.198c-.457 2.267-1.679 5.255-4.663 8.463Zm5.598-4.81c-.823 1.91-2.122 4.012-4.133 6.173l-.013.014-.013.014c-1.251 1.295-1.789 3.27-1.804 5.46-.01 1.437.208 2.81.481 3.865 1.68-.209 3.258-.665 4.56-1.608.949-.688 1.858-1.714 2.539-3.314a4.55 4.55 0 0 1-.4.119l-3.813.907 1.503-3.62c1.238-2.98 1.397-5.718 1.093-8.01Z"
        fill="#000"
      />
      <Path
        d="M21.5 15.5c-3 1.833-9.782 6.5-10.182 12.5-.4 6 3 8.5 5 10.5-1-1.5-3-5.2-3-10s5.515-10.833 8.182-13Z"
        fill="#000"
      />
    </Svg>
  );
};
export default SvgFhirLogo;
