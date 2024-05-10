import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgWalkSupported = (passedProps: SvgProps) => {
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
        d="M26.343 14.974a4.487 4.487 0 1 0 0-8.974 4.487 4.487 0 0 0 0 8.974Zm0-2a2.487 2.487 0 1 0 0-4.974 2.487 2.487 0 0 0 0 4.974ZM10 28a2 2 0 0 0-2 2v12H6V30a4 4 0 0 1 4-4h6.911c-.494-5.03.56-9.083 3.631-10.731a.997.997 0 0 1 .12-.054l.024-.01c1.306-.485 2.713-.458 3.977.196 1.202.621 2.011 1.67 2.519 2.76.188.402.361.778.523 1.13a73.23 73.23 0 0 0 1.026 2.169c.435.865.75 1.364 1.024 1.683.231.27.426.402.676.5.3.117.8.229 1.709.256A2.611 2.611 0 0 1 34.622 26H38a4 4 0 0 1 4 4v12h-2V30a2 2 0 0 0-2-2h-3.797a2.608 2.608 0 0 1-2.22 1.117c-1.224-.037-2.383-.194-3.451-.612A6.81 6.81 0 0 1 27.5 28h-2.126l-.004.023 3.88 3.828c.26.257.463.565.596.904l2.23 5.68a2.61 2.61 0 1 1-4.86 1.908l-2.027-5.165-7.037-6.944a2.61 2.61 0 0 1-.21-.234H10Zm10.762 0 5.983 5.904a1 1 0 0 1 .229.346l2.104 5.362a.61.61 0 1 0 1.136-.445l-2.23-5.68a.61.61 0 0 0-.139-.212l-4.26-4.204a1 1 0 0 1-.28-.9l.033-.171h-2.576Zm2.959-2 .464-2.429a1 1 0 0 1 1.868-.277c.402.766.803 1.416 1.258 1.947.543.631 1.162 1.094 1.948 1.401.775.303 1.682.443 2.784.476a.61.61 0 1 0 .037-1.22c-1.029-.03-1.782-.16-2.377-.392-.582-.228-1.041-.565-1.466-1.06-.435-.507-.836-1.18-1.293-2.087a74.491 74.491 0 0 1-1.05-2.219l-.005-.012c-.162-.352-.334-.725-.52-1.123-.38-.815-.924-1.465-1.625-1.828-.701-.362-1.5-.404-2.313-.115-1.9 1.066-3.021 3.959-2.518 8.854a.513.513 0 0 0 .016.084h4.792Z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.557 30.9a1 1 0 0 0-1.651.437l-.983 3.318-1.918 2.889a3 3 0 0 0 4.999 3.318l2.167-3.264a3 3 0 0 0 .377-.807l.524-1.77a1 1 0 0 0-.266-1.005L18.557 30.9Zm-.76 4.467.56-1.888 1.625 1.558-.352 1.186c-.028.095-.07.186-.125.269l-2.167 3.264a1 1 0 0 1-1.667-1.106l2.001-3.014c.055-.083.098-.174.126-.27Z"
      />
    </Svg>
  );
};
export default SvgWalkSupported;
