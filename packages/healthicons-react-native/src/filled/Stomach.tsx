import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgStomach = (passedProps: SvgProps) => {
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
        d="M16.715 15.074c1.18 1.286 3.174 1.838 6.827 1.916.208-2.759 1.271-4.932 2.844-6.458C28.134 8.836 30.452 8 32.752 8s4.619.836 6.367 2.532C40.879 12.24 42 14.758 42 18v11c0 3.082-.513 6.301-2.066 8.78-1.599 2.553-4.239 4.22-8.19 4.22-4.042 0-6.855-2.398-9.428-4.618l-.112-.096c-2.59-2.236-5.005-4.32-8.437-4.786-1.683.013-2.816.527-3.607 1.231-.82.73-1.35 1.734-1.68 2.812-.33 1.076-.444 2.17-.472 3.007a12.968 12.968 0 0 0 .019 1.269 4.8 4.8 0 0 0 .005.065l.002.014v.001L7.039 41c-.995.102-.995.1-.995.1v-.003l-.001-.009-.003-.027a10.792 10.792 0 0 1-.027-.426c-.012-.281-.02-.678-.004-1.153.032-.944.16-2.226.559-3.525.397-1.297 1.081-2.669 2.262-3.72 1.2-1.068 2.838-1.737 5.001-1.737.503 0 .977.011 1.432.022.846.02 1.628.04 2.412-.02 1.155-.086 2.107-.337 2.894-.927 1.507-1.13 2.812-3.824 2.927-10.585-3.719-.077-6.48-.63-8.254-2.564-.964-1.05-1.559-2.425-1.918-4.126-.357-1.694-.493-3.775-.493-6.3h2c0 2.475.135 4.394.45 5.887.314 1.487.793 2.487 1.434 3.187ZM40 26.241V18c0-2.758-.94-4.74-2.274-6.032C36.382 10.664 34.576 10 32.752 10c-1.824 0-3.63.664-4.974 1.968-1.333 1.293-2.273 3.274-2.273 6.032 0 2.769-.179 5.04-.525 6.895 3.338-1.804 5.869-.52 8.252.691 2.208 1.121 4.289 2.178 6.768.655Z"
      />
    </Svg>
  );
};
export default SvgStomach;
