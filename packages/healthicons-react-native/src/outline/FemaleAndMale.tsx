import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgFemaleAndMale = (passedProps: SvgProps) => {
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
        d="M33.5 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm0-2a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM38.63 16.841c-.991-.596-2.085-.841-3.175-.841h-3.909c-1.09 0-2.184.245-3.175.841-.99.595-1.7 1.433-2.192 2.343-.929 1.717-1.178 3.864-1.178 5.96v.088c0 .03 0 .06.003.089l.008.088.001.013.002.044.003.157c.001.136 0 .325-.002.583l-.004.372v.004C25.006 26.99 25 27.475 25 28a3 3 0 0 0 3.5 2.958V39.5a2.5 2.5 0 0 0 4.983.298l.018-.148.017.148a2.5 2.5 0 0 0 4.983-.298v-8.542A3 3 0 0 0 42 28c0-.526-.006-1.012-.011-1.42v-.001l-.005-.373a30.655 30.655 0 0 1 .001-.74l.002-.044v-.013l.009-.088c.002-.03.004-.06.004-.089v-.088c0-2.096-.25-4.243-1.18-5.96-.491-.91-1.201-1.748-2.19-2.343ZM28 29a.991.991 0 0 0 .5-.133V23h2v16.5a.5.5 0 0 0 .997.06l1.01-8.423a1 1 0 0 1 1.986 0l1.011 8.423a.5.5 0 0 0 .997-.06V23h2v5.867a1 1 0 0 0 1.5-.867c0-.512-.006-.989-.011-1.398l-.005-.375c-.005-.503-.004-.826.012-.995l.004-.044v-.044c0-1.996-.25-3.736-.938-5.008-.354-.654-.833-1.201-1.464-1.58-.63-.38-1.355-.556-2.144-.556h-3.909c-.788 0-1.513.176-2.145.555-.63.38-1.11.927-1.463 1.58-.688 1.273-.938 3.013-.938 5.008v.045l.004.044c.015.17.017.492.012.995l-.005.371v.005c-.005.409-.01.884-.01 1.397a1 1 0 0 0 1 1ZM10 10a4 4 0 1 0 8 0 4 4 0 0 0-8 0Zm2 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0ZM10.554 16.444A4.35 4.35 0 0 1 12.522 16h3.958c.43 0 1.18.048 1.966.444 1.331.67 2.09 1.767 2.542 2.736.431.928.68 1.954.864 2.808.176.811.18.832.28 1.345.095.49.282 1.45.81 4.077a3 3 0 0 1-3.123 3.585l.54 3.1c.149.86-.285 1.797-1.21 2.127-.908.324-2.553.778-4.648.778-2.096 0-3.74-.454-4.648-.778-.926-.33-1.36-1.268-1.21-2.126l.54-3.1a3.004 3.004 0 0 1-3.124-3.587c.528-2.627.715-3.587.81-4.077.1-.512.104-.533.28-1.344.184-.854.433-1.88.864-2.808.451-.969 1.21-2.066 2.541-2.736ZM13.002 18h-.48c-.285 0-.679.034-1.068.23-.793.4-1.29 1.07-1.628 1.794-.33.71-.542 1.547-.723 2.387-.172.797-.175.81-.268 1.291l-.003.012c-.096.495-.283 1.457-.812 4.09a1 1 0 0 0 1.49 1.057l1.186-6.524 1.967.358-.625 3.44.024-.026-1.437 8.264A12.07 12.07 0 0 0 14.5 35c1.733 0 3.103-.36 3.876-.627l-1.437-8.26.024.027-.626-3.445 1.968-.358 1.186 6.524a1 1 0 0 0 1.489-1.058c-.529-2.632-.716-3.594-.812-4.089l-.003-.011a44.377 44.377 0 0 0-.268-1.292c-.182-.84-.393-1.677-.724-2.387-.337-.724-.834-1.395-1.627-1.794a2.357 2.357 0 0 0-1.068-.23H13.002Z"
        fill="#000"
      />
      <Path
        d="M17.715 41.913a1.5 1.5 0 0 0 1.286-1.484V38a36.92 36.92 0 0 1-3.683.335l.744 2.518a1.5 1.5 0 0 0 1.653 1.06ZM13.735 38.354l-.805 2.53a1.5 1.5 0 0 1-2.93-.456v-2.336c1.311.157 2.528.245 3.735.262Z"
        fill="#000"
      />
    </Svg>
  );
};
export default SvgFemaleAndMale;
