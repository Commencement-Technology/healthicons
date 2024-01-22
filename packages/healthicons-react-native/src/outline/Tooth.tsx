import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgTooth = (passedProps: SvgProps) => {
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
        d="M23.56 11.126c.199-.157 8.52-6.63 14.02-.253 3.02 3.5 2.764 7.133 1.644 10.69l-3.942 11.293c-1.153 3.927-1.975 5.14-3.995 6.845-1.198 1.013-2.55-.736-3.973-2.577-1.233-1.595-2.519-3.258-3.804-3.254-1.307.004-2.614 1.67-3.864 3.264-1.441 1.838-2.808 3.581-4.013 2.567-2.433-2.048-3.5-4.877-4.616-9.418-.215-.874-.541-1.923-.902-3.08-1.51-4.849-3.612-11.595-.53-15.337 3.807-4.622 8.535-5.366 13.924-.777l.05.037Zm-2.66.474c-1.864-1.28-3.45-1.688-4.77-1.584-1.621.127-3.306 1.063-5 3.121-1.276 1.548-1.405 4.162-.718 7.578.327 1.627.805 3.274 1.286 4.839.103.338.209.676.313 1.011.365 1.17.717 2.301.948 3.24 1.021 4.158 1.91 6.392 3.521 7.966.333-.31.753-.806 1.31-1.511l.27-.344c.57-.727 1.245-1.59 1.934-2.28.732-.731 1.941-1.762 3.51-1.766 1.576-.005 2.782 1.042 3.499 1.769.679.689 1.345 1.551 1.907 2.279l.267.345c.545.7.958 1.196 1.285 1.505.647-.586 1.067-1.075 1.43-1.683.47-.785.907-1.873 1.47-3.792l.031-.096 3.932-11.263c.514-1.64.775-3.137.64-4.544-.134-1.37-.653-2.767-1.899-4.211-2.064-2.394-4.6-2.43-6.994-1.689-1.205.374-2.286.93-3.078 1.406-.298.178-.548.341-.742.474l3.84 2.824a1 1 0 0 1-1.184 1.612l-5.425-3.99a2.005 2.005 0 0 1-.217-.159l-1.158-.851a.997.997 0 0 1-.208-.206Zm-4.77 26.445.003-.002-.004.002Z"
        fill="#000"
      />
    </Svg>
  );
};
export default SvgTooth;
