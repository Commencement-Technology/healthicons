import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgOutbreak = (passedProps: SvgProps) => {
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
        d="M23.002 6.65a.535.535 0 0 0-.664-.53c-4.23 1.107-7.336 4.788-7.336 9.159a9.096 9.096 0 0 0 1.402 4.854l-.159.003a9.063 9.063 0 0 0-3.555.848c-3.96 1.847-5.984 6.218-5.2 10.519.062.347.44.527.76.378a.593.593 0 0 0 .331-.593 7.003 7.003 0 0 1 6.502-7.593l.047-.003c.66-.04 1.315.014 1.95.156a6.988 6.988 0 0 1 4.82 3.874 6.971 6.971 0 0 1 .39 4.873 7.04 7.04 0 0 1-.769 1.751 7.003 7.003 0 0 1-10.913 1.288.593.593 0 0 0-.667-.128.535.535 0 0 0-.2.826c2.792 3.365 7.44 4.625 11.401 2.778a9.105 9.105 0 0 0 3.86-3.405 9.106 9.106 0 0 0 3.86 3.405c3.961 1.847 8.61.587 11.401-2.778a.535.535 0 0 0-.2-.826.593.593 0 0 0-.666.128 7.003 7.003 0 0 1-11.707-3.128 6.973 6.973 0 0 1 .414-4.784 6.988 6.988 0 0 1 4.919-3.895 6.987 6.987 0 0 1 4.383.51 7.003 7.003 0 0 1 4.017 6.95.593.593 0 0 0 .331.594c.32.15.698-.03.761-.378.784-4.301-1.24-8.672-5.2-10.52a9.063 9.063 0 0 0-3.68-.85H33.6a9.095 9.095 0 0 0 1.402-4.854c0-4.37-3.106-8.052-7.336-9.16a.535.535 0 0 0-.664.53c0 .25.165.466.398.551a7.003 7.003 0 0 1 2.577 11.503 6.978 6.978 0 0 1-4.975 2.076 6.979 6.979 0 0 1-5.067-2.17 6.97 6.97 0 0 1-1.933-4.83c0-3.024 1.917-5.6 4.602-6.579a.593.593 0 0 0 .398-.55Zm4 18.319a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z"
      />
      <Path d="M15.029 25.707a9.997 9.997 0 0 0 4.686 7.751c.381-.572.64-1.216.763-1.89a7.997 7.997 0 0 1-3.42-5.657 4.998 4.998 0 0 0-2.029-.204ZM30.29 33.458a9.997 9.997 0 0 0 4.685-7.75c-.69-.074-1.38 0-2.028.203a7.997 7.997 0 0 1-3.42 5.656c.122.675.381 1.32.762 1.891ZM25.002 14.969a9.96 9.96 0 0 0-4.47 1.052 5.02 5.02 0 0 0 1.281 1.609 7.973 7.973 0 0 1 3.19-.661c1.133 0 2.211.235 3.188.66.531-.44.97-.986 1.281-1.608a9.958 9.958 0 0 0-4.47-1.052Z" />
    </Svg>
  );
};
export default SvgOutbreak;
