import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgAdmissions = (passedProps: SvgProps) => {
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
      <G
        clipPath="url(#admissions_svg__a)"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#000"
      >
        <Path d="M22.835 10.065a1 1 0 0 0-1.316.95v1.567H15v22.817h6.52v1.814a1 1 0 0 0 1.315.948l8.865-2.955a1 1 0 0 0 .684-.948V13.969a1 1 0 0 0-.684-.949l-8.865-2.955Zm3.03 13.324c0 .8-.324 1.449-.724 1.449-.4 0-.725-.649-.725-1.449s.325-1.449.725-1.449c.4 0 .724.649.724 1.45Zm-4.346-8.807H17v18.817h4.52V14.582Z" />
        <Path d="M48 0H0v48h48V0ZM9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9Z" />
      </G>
      <Defs>
        <ClipPath id="admissions_svg__a">
          <Path d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgAdmissions;
