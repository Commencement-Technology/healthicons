import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgMalariaMicroscope = (passedProps: SvgProps) => {
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
        d="M24 42c9.941 0 18-8.059 18-18S33.941 6 24 6 6 14.059 6 24s8.059 18 18 18Zm0 2c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.494 20.044c1.03-.206 2.382-.812 3.727-1.85 1.345-1.04 2.272-2.195 2.73-3.14.309-.637.324-.97.312-1.1-.123-.045-.45-.115-1.144.023-1.03.206-2.381.812-3.726 1.85-1.345 1.04-2.272 2.195-2.73 3.14-.31.637-.324.97-.312 1.1.123.045.45.115 1.143-.023Zm-2.749 1.265c1.18 1.527 4.627.84 7.699-1.533 3.071-2.374 4.605-5.537 3.425-7.064-1.18-1.527-4.627-.84-7.699 1.533-3.072 2.374-4.605 5.537-3.425 7.064ZM34.436 31.33c-.555-.873-1.594-1.9-3.03-2.768-1.437-.867-2.83-1.308-3.861-1.393-.67-.055-.981.04-1.103.097.007.134.067.453.428 1.02.555.874 1.594 1.901 3.03 2.769 1.437.867 2.83 1.308 3.861 1.393.67.055.98-.04 1.102-.097-.006-.134-.066-.453-.427-1.02Zm2.168 2.072c.986-1.634-.878-4.568-4.165-6.552-3.286-1.985-6.75-2.269-7.737-.635-.987 1.634.878 4.567 4.165 6.552 3.286 1.984 6.75 2.269 7.737.635ZM32.638 19.893c.025-1.05-.271-2.503-.992-4.043-.72-1.54-1.645-2.698-2.468-3.353-.556-.442-.878-.529-1.008-.546-.07.11-.21.414-.227 1.124-.025 1.05.272 2.503.992 4.043s1.645 2.698 2.468 3.353c.556.442.878.529 1.008.546.07-.11.21-.414.227-1.124Zm.633 2.961c1.749-.818 1.833-4.333.187-7.852-1.646-3.518-4.398-5.707-6.147-4.889-1.75.819-1.833 4.334-.187 7.852 1.645 3.519 4.398 5.708 6.147 4.89ZM20.968 34.956c-.004-1.083-.351-2.566-1.135-4.125-.784-1.558-1.766-2.721-2.633-3.372-.627-.47-.973-.533-1.097-.54-.069.104-.225.419-.221 1.203.005 1.084.352 2.566 1.135 4.125.784 1.559 1.767 2.722 2.634 3.372.627.47.973.533 1.096.54.069-.103.225-.418.221-1.203Zm.688 3.01c1.764-.888 1.748-4.484-.036-8.033-1.784-3.549-4.66-5.707-6.425-4.82-1.765.887-1.749 4.483.035 8.032 1.785 3.55 4.661 5.707 6.426 4.82Z"
      />
    </Svg>
  );
};
export default SvgMalariaMicroscope;
