import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgRibbon = (passedProps: SvgProps) => {
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
        d="M26.924 4c.967 0 1.866.217 2.667.675.685.39 1.462.93 2.037 1.734l-.012.01.01.014 2.332 3.022.822 1.095a9.414 9.414 0 0 1-.002 11.34l-4.508 5.818 6.95 8.944a2 2 0 0 1-.242 2.713l-4.066 3.662A2 2 0 0 1 30 42.775l-5.79-7.383-5.845 7.451a2 2 0 0 1-2.781.36l-4.379-3.317a2 2 0 0 1-.368-2.826l7.314-9.358-4.504-5.714-.006-.008a9.414 9.414 0 0 1-.002-11.339l.002-.002.811-1.082 2.337-3.029.108-.141C18.008 4.85 19.852 4 21.678 4h5.247Zm1.675 2.411c.551.315 1.02.66 1.348 1.088l-.015.011.1.13a4.034 4.034 0 0 1-.022 4.792c-.934-.57-2.045-.923-3.177-.923h-5.247c-1.123 0-2.267.3-3.241.924a4.206 4.206 0 0 1-.735-2.366c0-.815.256-1.632.773-2.331l.115-.15.01-.014C19.21 6.59 20.434 6 21.677 6h5.248c.66 0 1.21.145 1.675.411Zm-9.025 7.616 4.6 5.942 4.6-5.942c-.598-.325-1.278-.518-1.94-.518h-5.248c-.72 0-1.42.179-2.012.518Zm9.422 12.06-3.552-4.49 6.066-7.836a5.953 5.953 0 0 0 1.199-2.638l.475.633a7.415 7.415 0 0 1 .003 8.921l-4.19 5.41Zm-9.57 3.232-7.013 8.973 4.378 3.317 6.146-7.836-3.511-4.455Zm-2.517-15.467a6.061 6.061 0 0 1-1.192-2.648l-.479.639-.003.004a7.414 7.414 0 0 0-.005 8.918l9.766 12.39 6.578 8.386 4.066-3.662-7.42-9.55-4.795-6.06-6.516-8.417Z"
        fill="#000"
      />
    </Svg>
  );
};
export default SvgRibbon;
