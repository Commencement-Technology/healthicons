import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgGastroenterology = (passedProps: SvgProps) => {
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
        d="M6 39a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v30ZM40 9a1 1 0 0 0-1-1H17.314l.002 2.74c.034 3.608.501 5.377 1.418 6.322.806.83 2.164 1.232 4.714 1.307.202-2.036 1.014-3.66 2.207-4.817 1.373-1.332 3.192-1.987 4.991-1.987 1.8 0 3.619.655 4.992 1.987 1.385 1.343 2.256 3.316 2.256 5.83v8.333c0 2.354-.391 4.846-1.602 6.78-1.257 2.006-3.336 3.31-6.41 3.31-3.163 0-5.359-1.883-7.3-3.557l-.061-.054c-1.976-1.705-3.752-3.237-6.27-3.585-1.059.01-1.794.294-2.322.681-.549.402-.942.966-1.22 1.617-.57 1.333-.589 2.868-.561 3.528.005.13.008 1.548.01 2.88V40H39a1 1 0 0 0 1-1V9ZM8 9a1 1 0 0 1 1-1h6.315l.001 2.76c.034 3.57.453 6.118 1.983 7.695 1.376 1.418 3.441 1.838 6.09 1.914-.115 4.932-1.09 6.818-2.116 7.587-.544.408-1.213.591-2.065.655-.583.044-1.155.03-1.787.015-.347-.009-.712-.018-1.107-.018-1.469 0-2.648.396-3.567 1.069-.91.666-1.498 1.555-1.878 2.445-.748 1.75-.75 3.648-.72 4.396v.005l.001.06.001.196.003.651.004 1.888V40H9a1 1 0 0 1-1-1V9Zm17.03 15.466c2.396-1.157 4.24-.22 5.98.663 1.6.812 3.112 1.58 4.884.635v-6.382c0-2.03-.69-3.466-1.649-4.395-.97-.94-2.275-1.422-3.598-1.422-1.324 0-2.63.482-3.6 1.422-.957.93-1.648 2.365-1.648 4.395 0 2.011-.123 3.69-.368 5.084Z"
      />
    </Svg>
  );
};
export default SvgGastroenterology;
