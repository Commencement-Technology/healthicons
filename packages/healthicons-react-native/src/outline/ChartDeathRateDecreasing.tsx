import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgChartDeathRateDecreasing = (passedProps: SvgProps) => {
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
        d="M15 16.5a2.5 2.5 0 0 1 4.94-.549 2.61 2.61 0 1 1-.026 1.202A2.501 2.501 0 0 1 15 16.5Zm2.5-.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm4.357.608a.608.608 0 1 1 1.216-.001.608.608 0 0 1-1.216 0Z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.461 21.835c-.461 0-1.846-.453-1.846-2.487 0-.805-.252-1.186-.558-1.646C11.59 17 11 16.112 11 13.243c0-9.657 18-9.657 18 0 0 2.87-.59 3.757-1.057 4.46-.306.46-.558.84-.558 1.645 0 2.035-1.808 2.487-1.847 2.487-.038 0-.615 1.356-.615 2.26C24.923 25 22.308 25 20 25s-4.923 0-4.923-.904c0-.905-.154-2.261-.616-2.261Zm.226-2.004.007.015c1.08.106 1.63.93 1.802 1.236.225.4.339.828.403 1.128.048.228.085.466.112.703.788.084 1.843.087 2.989.087 1.184 0 2.27-.003 3.066-.096a9.756 9.756 0 0 1 .516-1.62 4.89 4.89 0 0 1 .13-.285 2.102 2.102 0 0 1 .611-.754c.074-.056.333-.252.733-.351l.006-.003a.703.703 0 0 0 .16-.095.374.374 0 0 0 .103-.12c.018-.035.06-.128.06-.328 0-1.484.657-2.43.968-2.877.051-.074.093-.135.12-.181.174-.292.527-.931.527-3.047 0-1.702-.756-2.933-1.976-3.806C23.744 8.522 21.926 8 20 8c-1.926 0-3.745.522-5.024 1.437-1.22.873-1.976 2.104-1.976 3.806 0 2.116.353 2.755.526 3.047.028.046.07.107.121.18.31.448.968 1.394.968 2.878 0 .28.047.423.07.477l.002.006Z"
      />
      <Path d="M7 42a1 1 0 0 1-1-1V6h2v29h3.052c6.552 0 12.354-1.368 16.843-4.532 4.153-2.927 7.277-7.457 8.803-14.106l-2.133 1.463a1 1 0 1 1-1.13-1.65l4.374-3a1 1 0 0 1 1.451.36l2.625 5a1 1 0 1 1-1.77.93l-1.445-2.753c-1.613 7.111-4.99 12.125-9.622 15.39C24.112 35.582 17.858 37 11.052 37H8v3h34v2H7Z" />
    </Svg>
  );
};
export default SvgChartDeathRateDecreasing;
