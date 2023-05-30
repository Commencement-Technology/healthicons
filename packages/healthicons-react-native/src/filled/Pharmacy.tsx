import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPharmacy = (passedProps: SvgProps) => {
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
        d="M18.305 13c-.057-1.61-.011-3.315.556-4.647.299-.7.73-1.266 1.354-1.667.627-.402 1.527-.686 2.843-.686 1.475 0 2.704.536 3.584 1.094.437.278.778.555 1.007.76a5.6 5.6 0 0 1 .31.3l.01.01v.001a1 1 0 0 0 1.496-1.328l-.735.65c.735-.65.733-.652.733-.652v-.001l-.004-.004-.01-.01a3.24 3.24 0 0 0-.122-.13 7.649 7.649 0 0 0-.343-.325 9.743 9.743 0 0 0-1.27-.96C26.624 4.716 25.024 4 23.058 4c-1.606 0-2.903.349-3.923 1.003-1.023.657-1.69 1.57-2.114 2.566-.738 1.733-.774 3.798-.718 5.431H11c-.553 0-1.006.45-.943.998.615 5.38 6.16 9.643 13.058 9.98V32h2v-8.034a16.987 16.987 0 0 0 4.87-1.02c.01.115.015.233.015.357 0 .762-.623 1.674-1.901 2.466a8.578 8.578 0 0 1-2.099.924v2.066a10.642 10.642 0 0 0 3.151-1.29C30.623 26.56 32 25.123 32 23.304c0-.41-.038-.815-.123-1.208 3.367-1.804 5.68-4.732 6.066-8.097.063-.548-.391-.998-.943-.998H18.305Z"
        fill="#333"
      />
      <Path
        d="M30 39c0 1.165-.36 2.188-1.019 3H32v2H16v-2h7.115v-4h2v3.914c.802-.131 1.436-.404 1.892-.763.625-.49.993-1.196.993-2.151 0-.955-.368-1.66-.993-2.151-.65-.512-1.662-.85-3.007-.85-1.517 0-3.2-.119-4.531-.71-.684-.304-1.315-.75-1.773-1.403-.462-.66-.696-1.461-.696-2.386s.234-1.726.696-2.386c.458-.653 1.09-1.099 1.773-1.403.76-.338 1.637-.522 2.531-.617v2.013c-.658.083-1.242.22-1.719.432-.441.196-.747.438-.946.722-.194.277-.335.664-.335 1.239 0 .575.14.962.335 1.239.199.284.505.526.946.722.92.409 2.236.539 3.719.539 1.654 0 3.144.413 4.243 1.276C29.368 36.16 30 37.455 30 39Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgPharmacy;
