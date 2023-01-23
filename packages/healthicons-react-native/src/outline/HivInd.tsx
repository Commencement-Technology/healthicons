import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgHivInd = (passedProps: SvgProps) => {
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
        d="M26.924 4c.967 0 1.866.217 2.667.675.685.39 1.462.93 2.037 1.734l-.012.01.01.014 2.332 3.023.009.01.813 1.084a9.354 9.354 0 0 1 1.8 4.315 5.748 5.748 0 0 0-2.163-.599 7.343 7.343 0 0 0-1.233-2.51l-.003-.004-.472-.63a5.953 5.953 0 0 1-1.2 2.639l-6.065 7.835 3.552 4.491 2.238-2.889V26c0 .144.011.285.032.423l-.996 1.285 6.95 8.944a2 2 0 0 1-.242 2.713l-4.066 3.662A2 2 0 0 1 30 42.775l-5.79-7.383-5.845 7.451a2 2 0 0 1-2.781.36l-4.379-3.317a2 2 0 0 1-.368-2.826l7.314-9.358-4.504-5.714-.006-.008a9.414 9.414 0 0 1-.002-11.339l.002-.002.811-1.082 2.337-3.029.108-.141C18.008 4.85 19.852 4 21.678 4h5.247Zm-2.75 15.969 4.6-5.942c-.598-.325-1.278-.518-1.94-.518h-5.248c-.72 0-1.42.179-2.012.518l4.6 5.942Zm5.836-7.537a4.034 4.034 0 0 0 .022-4.792l-.1-.13.015-.011c-.329-.428-.797-.773-1.348-1.088C28.134 6.145 27.585 6 26.924 6h-5.248c-1.243 0-2.466.59-3.167 1.572l-.01.015-.116.149a3.908 3.908 0 0 0-.773 2.33c0 .811.252 1.68.735 2.367.974-.623 2.118-.924 3.24-.924h5.248c1.132 0 2.243.353 3.177.923ZM19.426 29.318l-7.013 8.974 4.378 3.317 6.146-7.836-3.511-4.455Zm-2.517-15.467a6.061 6.061 0 0 1-1.192-2.647l-.479.639-.003.004a7.414 7.414 0 0 0-.005 8.918l9.766 12.39 6.578 8.386 4.066-3.662-7.42-9.55-4.795-6.06-6.516-8.417Z"
        fill="#333"
      />
      <Path
        d="M34 18c1.111.009 2 .906 2 2 0 1.1-.898 2-2.016 2a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0v-2.125A4.004 4.004 0 0 0 38 20a4.008 4.008 0 0 0-3.952-4h-.096C31.77 16.035 30 17.807 30 20a1 1 0 0 0 2 0c0-1.094.889-1.991 2-2ZM35 29a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgHivInd;