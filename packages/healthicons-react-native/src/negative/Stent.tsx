import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgStent = (passedProps: SvgProps) => {
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
        d="m13.998 41.52-.194-.04.392-1.96.194.038a49.001 49.001 0 0 0 19.22 0l.194-.039.392 1.962-.194.038a51 51 0 0 1-20.004 0ZM20.377 7.12a21 21 0 0 1 7.246 0L31 7.71v2.942c0 .89.198 1.768.58 2.57l.743 1.561A17.291 17.291 0 0 1 34 22.212v.074c0 3.213-.716 6.386-2.097 9.288a9.309 9.309 0 0 0-.903 4v2.715l-1.652.29c-3.538.62-7.158.62-10.696 0L17 38.289v-3.467c0-.89-.198-1.767-.58-2.57l-.323-.678A21.618 21.618 0 0 1 14 22.286v-.074c0-2.57.573-5.108 1.677-7.429l.42-.882a9.31 9.31 0 0 0 .903-4v-2.19l3.377-.592Zm6.9 1.97a19 19 0 0 0-6.555 0L19 9.39v.511c0 1.681-.375 3.341-1.097 4.86l-.42.881A15.29 15.29 0 0 0 16 22.212v.074c0 2.916.65 5.795 1.903 8.428l.323.679A7.981 7.981 0 0 1 19 34.822v1.787c3.308.58 6.692.58 10 0v-1.036c0-1.68.375-3.34 1.097-4.859A19.617 19.617 0 0 0 32 22.286v-.074a15.29 15.29 0 0 0-1.483-6.57l-.743-1.56a7.98 7.98 0 0 1-.774-3.43V9.392l-1.722-.302Z"
      />
      <Path d="m21.45 14.5 2.47 3.772-2.47 3.772-2.54-3.811 2.54-3.733Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m21.467 12.644 3.688 5.628-3.698 5.643-3.789-5.687 3.799-5.584Zm-.035 3.712-1.28 1.882 1.29 1.934 1.245-1.9-1.255-1.916Z"
      />
      <Path d="m26.64 14.5 2.471 3.772-2.471 3.772-2.54-3.811 2.54-3.733Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m26.657 12.644 3.688 5.628-3.697 5.643-3.79-5.687 3.8-5.584Zm-.035 3.712-1.28 1.882 1.29 1.934 1.245-1.9-1.255-1.916Z"
      />
      <Path d="m21.45 23.5 2.47 3.772-2.47 3.772-2.54-3.811 2.54-3.733Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m21.467 21.644 3.688 5.628-3.698 5.643-3.789-5.687 3.799-5.584Zm-.035 3.712-1.28 1.882 1.29 1.934 1.245-1.9-1.255-1.916Z"
      />
      <Path d="m26.64 23.5 2.471 3.772-2.471 3.772-2.54-3.811 2.54-3.733Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m26.657 21.644 3.688 5.628-3.697 5.643-3.79-5.687 3.8-5.584Zm-.035 3.712-1.28 1.882 1.29 1.934 1.245-1.9-1.255-1.916ZM34 4a1 1 0 0 1 1 1v5.652c0 .89.198 1.768.58 2.57l.743 1.561A17.291 17.291 0 0 1 38 22.212v.074c0 3.213-.716 6.386-2.097 9.288a9.309 9.309 0 0 0-.903 4V43a1 1 0 1 1-2 0v-7.427c0-1.68.375-3.34 1.097-4.859A19.617 19.617 0 0 0 36 22.286v-.074a15.29 15.29 0 0 0-1.483-6.57l-.743-1.56a7.98 7.98 0 0 1-.774-3.43V5a1 1 0 0 1 1-1ZM14 4a1 1 0 0 0-1 1v5.652c0 .89-.198 1.768-.58 2.57l-.743 1.561A17.291 17.291 0 0 0 10 22.212v.074c0 3.213.716 6.386 2.097 9.288a9.309 9.309 0 0 1 .903 4V43a1 1 0 1 0 2 0v-7.427c0-1.68-.375-3.34-1.097-4.859A19.617 19.617 0 0 1 12 22.286v-.074c0-2.273.507-4.517 1.483-6.57l.743-1.56a7.98 7.98 0 0 0 .774-3.43V5a1 1 0 0 0-1-1Z"
      />
    </Svg>
  );
};
export default SvgStent;
