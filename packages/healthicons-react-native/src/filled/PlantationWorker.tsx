import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPlantationWorker = (passedProps: SvgProps) => {
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
        d="M34 16c0 5.523-4.477 10-10 10s-10-4.477-10-10S18.477 6 24 6s10 4.477 10 10Zm-2 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
        fill="#333"
      />
      <Path
        d="M39 24c0 1.533-1.127 2.69-2 3.355v2.346c.13-.119.275-.226.438-.317 1.383-.774 3.163-.2 4.034.172a.804.804 0 0 1 .488.836c-.103.909-.47 2.62-1.785 3.231-1.09.507-2.343.408-3.175.246v1.832c.13-.119.275-.226.438-.317 1.383-.773 3.163-.2 4.034.172a.804.804 0 0 1 .488.836c-.103.909-.47 2.62-1.785 3.231-1.09.507-2.343.408-3.175.246V41a1 1 0 1 1-2 0v-1.13c-.832.161-2.085.26-3.175-.247-1.315-.61-1.683-2.322-1.785-3.231a.804.804 0 0 1 .488-.836c.87-.372 2.65-.945 4.034-.172.163.091.309.198.438.317V33.87c-.832.162-2.085.26-3.175-.246-1.315-.61-1.683-2.322-1.785-3.231a.804.804 0 0 1 .488-.836c.87-.372 2.65-.946 4.034-.172.163.091.309.198.438.317v-2.346c-.873-.666-2-1.822-2-3.355 0-1.903 1.738-3.227 2.569-3.75a.802.802 0 0 1 .862 0C37.261 20.773 39 22.097 39 24ZM6 35.538c0-3.235 3.69-5.2 8-6.31V35h-1a1 1 0 0 0-1 1v6H6v-6.462ZM24 36c-3.5 0-6-1-6-1h-2v-6.22a43.31 43.31 0 0 1 4-.574V30a2 2 0 0 0 2 2h4c.532 0 1.016-.208 1.374-.547.033.11.068.222.105.337a8.57 8.57 0 0 0 .74 1.669c.081.136.175.284.283.437a3.001 3.001 0 0 0-1.406 1.847C26.21 35.89 25.16 36 24 36ZM24 38c1.183 0 2.262-.103 3.191-.247.068.293.162.652.288 1.037.118.356.277.778.492 1.21H14v-3h3.651l.177.059c.336.108.811.249 1.401.388 1.178.277 2.834.553 4.771.553Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgPlantationWorker;
