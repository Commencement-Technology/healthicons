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
      fill="none"
      color="currentColor"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.316 10.74c.034 3.608.501 5.377 1.418 6.322.806.83 2.164 1.232 4.714 1.307.202-2.036 1.014-3.66 2.207-4.817 1.373-1.332 3.192-1.987 4.991-1.987 1.8 0 3.619.655 4.992 1.987 1.385 1.343 2.256 3.316 2.256 5.83v8.333c0 2.354-.391 4.846-1.602 6.78-1.257 2.006-3.336 3.31-6.41 3.31-3.163 0-5.359-1.883-7.3-3.557l-.061-.054c-1.976-1.705-3.752-3.237-6.27-3.585-1.059.01-1.794.294-2.322.681-.549.402-.942.966-1.22 1.617-.57 1.333-.589 2.868-.561 3.528.005.13.008 1.548.01 2.88l.002 1.85v.833l-.968.002H39a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H17.314l.002 4.67v.069ZM9 42h1.16v-.833a3774.833 3774.833 0 0 0-.009-4.388l-.001-.196v-.066.001c-.032-.748-.029-2.647.719-4.396.38-.89.969-1.78 1.878-2.445.919-.673 2.098-1.069 3.567-1.069.395 0 .76.01 1.107.018.632.015 1.204.029 1.787-.015.852-.064 1.52-.247 2.065-.655 1.026-.77 2.001-2.655 2.115-7.587-2.648-.076-4.713-.496-6.09-1.914-1.529-1.577-1.948-4.124-1.982-7.696L15.314 6H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3Zm16.03-17.534c2.396-1.157 4.24-.22 5.98.663 1.6.812 3.112 1.58 4.884.635v-6.382c0-2.03-.69-3.466-1.649-4.395-.97-.94-2.275-1.422-3.598-1.422-1.324 0-2.63.482-3.6 1.422-.957.93-1.648 2.365-1.648 4.395 0 2.011-.123 3.69-.368 5.084Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgGastroenterology;
